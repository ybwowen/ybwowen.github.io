/**
 * Main JavaScript file for rendering content on the website
 */

let detailIdCounter = 0;
const detailToggleRegistry = [];

function closeOtherDetails(activeToggle) {
  detailToggleRegistry.forEach(({ toggle, content, label }) => {
    if (toggle !== activeToggle && toggle.getAttribute('aria-expanded') === 'true') {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = label;
      content.hidden = true;
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Homepage: single selected papers list (preprints + conference papers, both filtered to isSelected)
  if (document.getElementById('selected-papers-list')) {
    const selected = [...getSelectedPreprints(), ...getSelectedPublications()];
    populatePublications(selected, 'selected-papers-list');
  }

  // Full publications page (renders all preprints and all conference/journal papers)
  if (document.getElementById('preprints-list')) {
    populatePublications(getPreprints(), 'preprints-list');
  }
  if (document.getElementById('publications-list')) {
    populatePublications(getPublications(), 'publications-list');
  }

  // Other sections (used on homepage or other pages if present)
  populateProjects(false);
  populateResearchExperience();
  populateAcademicServices();
  populateTeaching();
  populateTalks();
  populateHonors();
  populateExperience();
  ['preprints-list', 'academic-services-list', 'teaching-list'].forEach(id => {
    const list = document.getElementById(id);
    if (list && !list.children.length) list.closest('section')?.setAttribute('hidden', '');
  });

  const detail = document.getElementById('publication-detail');
  if (detail) populatePublications([publications[Number(detail.dataset.index)]], detail.id);
  populateFullProjects();
  const newsToggle = document.getElementById('news-toggle');
  if (newsToggle) newsToggle.addEventListener('click', () => {
    const expanded = newsToggle.getAttribute('aria-expanded') !== 'true';
    newsToggle.setAttribute('aria-expanded', String(expanded));
    newsToggle.textContent = expanded ? 'Show recent news' : 'Show all news';
    document.querySelectorAll('.older-news').forEach(item => { item.hidden = !expanded; });
  });

  // Initialize dark mode toggle
  initializeDarkMode();

  // Initialize back to top button
  initializeBackToTop();

  // Update last modified time
  const lastModifiedElement = document.getElementById('last-modified-time');
  if (lastModifiedElement) {
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long' };
    lastModifiedElement.textContent = `Last Modified: ${lastModified.toLocaleDateString('en-US', options)}`;
  }
});

/**
 * Populate publications in the specified list element
 */
function populatePublications(publications, listId) {
  const list = document.getElementById(listId);
  if (!list) return;

  publications.forEach(pub => {
    const li = document.createElement('li');

    const titleDiv = document.createElement('div');
    titleDiv.className = 'papertitle';
    titleDiv.innerHTML = (pub.isNew ? '<span class="new-badge">New</span>' : '') + pub.title;

    const restDiv = document.createElement('div');
    restDiv.className = 'paper_rest';
    restDiv.innerHTML = `${pub.authors}<br />`;

    const venueSpan = document.createElement('span');
    venueSpan.className = 'paper-venue';
    venueSpan.innerHTML = `<i>${pub.venue}</i>`;
    restDiv.appendChild(venueSpan);

    const linksWrapper = document.createElement('span');
    linksWrapper.className = 'paper-links';
    linksWrapper.appendChild(document.createTextNode('[ '));

    const linkElements = pub.links.map(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.text;
      if (/^https?:\/\//i.test(link.url)) {
        anchor.target = '_blank';
        anchor.rel = 'noopener';
      }
      return anchor;
    });

    const createDetailToggle = (label, contentValue, fallbackText, baseClass) => {
      const container = document.createElement('div');
      container.className = `${baseClass}-container detail-container`;

      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = `${baseClass}-toggle detail-toggle`;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = label;

      const content = document.createElement('div');
      content.className = `${baseClass}-content detail-content`;
      const hasContent = typeof contentValue === 'string' && contentValue.trim().length > 0;
      content.innerHTML = hasContent ? contentValue : fallbackText;
      content.hidden = true;
      const contentId = `detail-content-${detailIdCounter++}`;
      content.id = contentId;
      content.setAttribute('role', 'region');
      content.setAttribute('aria-label', `${pub.title} ${label.toLowerCase()}`);
      toggle.setAttribute('aria-controls', contentId);

      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        if (!isExpanded) {
          closeOtherDetails(toggle);
        }
        const nextState = !isExpanded;
        toggle.setAttribute('aria-expanded', String(nextState));
        content.hidden = !nextState;
        toggle.textContent = nextState ? `Hide ${label}` : label;
      });

      container.appendChild(content);
      detailToggleRegistry.push({ toggle, content, label });
      return { container, toggle };
    };

    const { container: abstractContainer, toggle: abstractToggle } =
      createDetailToggle('Abstract', pub.abstract, 'Abstract coming soon.', 'abstract');
    const { container: citationContainer, toggle: citationToggle } =
      createDetailToggle('Citation', pub.citation, 'Citation coming soon.', 'citation');

    if (listId === 'selected-papers-list') {
      li.className = 'selected-entry';
      if (pub.thumbnail) li.appendChild(createThumbnail(pub.thumbnail, pub.url));
      li.appendChild(createSelectedPaperBody(pub, linkElements, abstractToggle, citationToggle));
      li.lastChild.append(abstractContainer, citationContainer);
      list.appendChild(li);
      return;
    }

    const interactiveItems = [];
    if (linkElements.length > 0) {
      interactiveItems.push(linkElements[0]);
    }
    interactiveItems.push(abstractToggle);
    if (linkElements.length > 1) {
      linkElements.slice(1).forEach(linkElement => {
        interactiveItems.push(linkElement);
      });
    }
    interactiveItems.push(citationToggle);

    interactiveItems.forEach((item, index) => {
      if (index > 0) {
        linksWrapper.appendChild(document.createTextNode(' | '));
      }
      linksWrapper.appendChild(item);
    });
    linksWrapper.appendChild(document.createTextNode(' ]'));

    restDiv.appendChild(document.createElement('br'));
    restDiv.appendChild(linksWrapper);

    const bottomSpaceDiv = document.createElement('div');
    bottomSpaceDiv.className = 'paper_bottom_space';

    const body = document.createElement('div');
    body.append(titleDiv, restDiv, abstractContainer, citationContainer, bottomSpaceDiv);
    li.appendChild(body);
    list.appendChild(li);
  });
}

/**
 * Homepage paper entry: venue first, a shortened author list, and the main links up front.
 */
const PRIMARY_PAPER_LINKS = ['Paper', 'Project', 'Code'];
const VISIBLE_AUTHORS = 6;

function createSelectedPaperBody(pub, linkElements, abstractToggle, citationToggle) {
  const body = document.createElement('div');
  body.className = 'selected-entry-body';

  const title = document.createElement('h3');
  title.className = 'papertitle';
  title.innerHTML = `<a href="${pub.url}">${pub.title}</a>`;

  // "Robotics: Science and Systems (RSS) 2026" -> "RSS 2026" + "Robotics: Science and Systems"
  const venue = document.createElement('p');
  venue.className = 'paper-venue';
  const venueParts = pub.venue.match(/^(.*?)\s*\(([^)]+)\)\s*(\d{4})$/);
  venue.innerHTML = venueParts
    ? `<strong>${venueParts[2]} ${venueParts[3]}</strong> · ${venueParts[1]}`
    : `<strong>${pub.venue}</strong>`;

  const authors = document.createElement('p');
  authors.className = 'paper_rest';
  const note = pub.authors.match(/<small>\((.*)\)<\/small>\s*$/);
  const names = pub.authors.replace(/\s*<small>.*<\/small>\s*$/, '').split(/,\s+/).map(name => name.replace(/^and\s+/, ''));
  const ownIndex = names.findIndex(name => name.includes('Bowen Yang'));
  const visibleCount = Math.max(VISIBLE_AUTHORS, ownIndex + 1);
  authors.innerHTML = names.slice(0, visibleCount).join(', ');
  if (names.length > visibleCount) {
    const rest = document.createElement('span');
    rest.hidden = true;
    rest.innerHTML = `, ${names.slice(visibleCount).join(', ')}`;
    const more = document.createElement('button');
    more.type = 'button';
    more.className = 'authors-toggle';
    more.setAttribute('aria-expanded', 'false');
    const label = `+${names.length - visibleCount} more`;
    more.textContent = label;
    more.addEventListener('click', () => {
      const expanded = more.getAttribute('aria-expanded') !== 'true';
      more.setAttribute('aria-expanded', String(expanded));
      rest.hidden = !expanded;
      more.textContent = expanded ? 'show fewer' : label;
    });
    authors.append(rest, ' ', more);
  }
  if (note) authors.insertAdjacentHTML('beforeend', `<span class="paper-note">${note[1]}</span>`);

  const links = document.createElement('div');
  links.className = 'paper-links';
  const usable = linkElements.filter(link => link.textContent !== 'Details');
  let primary = PRIMARY_PAPER_LINKS.map(text => usable.find(link => link.textContent === text)).filter(Boolean);
  if (!primary.length && usable.length) primary = [usable[0]];
  const secondary = usable.filter(link => !primary.includes(link));
  links.append(...primary, abstractToggle, citationToggle);
  if (secondary.length) {
    const more = document.createElement('details');
    more.className = 'paper-more';
    more.innerHTML = '<summary>More</summary>';
    const items = document.createElement('span');
    items.append(...secondary);
    more.appendChild(items);
    links.appendChild(more);
  }

  body.append(title, venue, authors, links);
  return body;
}

/**
 * Populate projects (only selected ones for homepage)
 */
function createThumbnail(image, url) {
  const link = document.createElement('a');
  link.className = 'selected-entry-thumbnail';
  link.href = url;
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  img.loading = 'lazy';
  link.appendChild(img);
  // A short muted clip plays while the thumbnail is hovered or focused.
  if (image.video && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const video = document.createElement('video');
    video.src = image.video;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'none';
    video.setAttribute('aria-hidden', 'true');
    link.appendChild(video);
    const play = () => video.play().then(() => link.classList.add('playing')).catch(() => {});
    const stop = () => { video.pause(); link.classList.remove('playing'); };
    link.addEventListener('mouseenter', play);
    link.addEventListener('focus', play);
    link.addEventListener('mouseleave', stop);
    link.addEventListener('blur', stop);
  }
  return link;
}

function populateProjects() {
  const list = document.getElementById('projects-list');
  if (!list) return;
  getSelectedProjects().forEach(project => {
    const li = document.createElement('li');
    li.className = 'selected-entry';
    li.appendChild(createThumbnail(project.homeImage || project.images[0], `/portfolio/#${project.id}`));
    const body = document.createElement('div');
    body.className = 'selected-entry-body';
    body.innerHTML = `<h3><a href="/portfolio/#${project.id}">${project.title}</a></h3><p>${project.description}</p>`;
    li.appendChild(body);
    list.appendChild(li);
  });
}

function populateFullProjects() {
  const mount = document.getElementById('full-projects');
  if (!mount) return;
  projects.forEach(project => {
    const section = document.createElement('section');
    section.id = project.id;
    section.className = 'project-full';
    section.innerHTML = `<h2>${project.title}</h2><p>${project.fullDescription}</p>
      <div class="resource-links">${project.links.map(link => `<a href="${link.url}"${link.url.startsWith('https:') ? ' target="_blank" rel="noopener"' : ''}>${link.text}</a>`).join('')}</div>
      <div class="${project.images.length > 1 ? 'project-gallery' : ''}">${project.images.map(img => `<figure><img src="${img.src}" alt="${img.alt}" loading="lazy"><figcaption>${img.caption}</figcaption></figure>`).join('')}</div>`;
    mount.appendChild(section);
  });
  // The fragment target is created by JavaScript after initial navigation.
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
}

/**
 * Populate research experience
 */
function populateResearchExperience() {
  const list = document.getElementById('research-experience-list');
  if (!list) return;

  researchExperience.forEach(exp => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p>
        <strong>${exp.period},   ${exp.institution}</strong><br>
        Mentor: ${exp.mentor}<br>
        ${exp.description}
      </p>
    `;
    list.appendChild(li);
  });
}

/**
 * Populate academic services
 */
function populateAcademicServices() {
  const list = document.getElementById('academic-services-list');
  if (!list) return;

  academicServices.forEach(service => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${service}</p>`;
    list.appendChild(li);
  });
}

/**
 * Populate teaching
 */
function populateTeaching() {
  const list = document.getElementById('teaching-list');
  if (!list) return;

  teaching.forEach(teachingItem => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${teachingItem}</p>`;
    list.appendChild(li);
  });
}

/**
 * Populate talks
 */
function populateTalks() {
  const list = document.getElementById('talks-list');
  if (!list) return;

  talks.slice().sort((a, b) => b.date.localeCompare(a.date)).forEach(talk => {
    const li = document.createElement('li');
    const attachmentLinks = talk.attachments.map(attachment =>
      `<a href="${attachment.url}" target="_blank" rel="noopener">${attachment.text}</a>`
    ).join(' | ');

    li.innerHTML = `<p><strong><a href="${talk.url}">${talk.title}</a></strong><br><span class="meta">${talk.date} · ${talk.venue}</span><br>${talk.description}<br>[ ${attachmentLinks} ]</p>`;
    list.appendChild(li);
  });
}

/**
 * Populate honors
 */
function populateHonors() {
  const list = document.getElementById('honors-list');
  if (!list) return;

  honors.forEach(honor => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${honor}</p>`;
    list.appendChild(li);
  });
}

function populateExperience() {
  const list = document.getElementById('experience-list');
  if (!list) return;
  experiences.forEach(experience => {
    const item = document.createElement('div');
    item.className = 'experience-item';
    const details = [
      experience.department,
      experience.advisor && `Advisor: <a href="${experience.advisor.url}" target="_blank" rel="noopener">${experience.advisor.name}</a>`
    ].filter(Boolean).join(' · ');
    item.innerHTML = `<a class="experience-logo" href="${experience.url}" target="_blank" rel="noopener"><img src="${experience.logo}" alt="${experience.institution} logo" width="44" height="44" loading="lazy"></a>
      <div class="experience-content"><h3>${experience.position ? `${experience.position}, ` : ''}<a href="${experience.url}" target="_blank" rel="noopener">${experience.institution}</a></h3>${details ? `<p>${details}</p>` : ''}</div>
      <p class="experience-period">${experience.period}</p>`;
    list.appendChild(item);
  });
}
