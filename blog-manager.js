document.addEventListener('DOMContentLoaded', async () => {
  const list = document.getElementById('blog-list');
  if (list) {
    blogPosts.slice().sort((a, b) => b.date.localeCompare(a.date)).forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = `<h2><a href="${post.url}">${post.title}</a></h2><p class="meta">${post.date} · ${post.tags.join(', ')}</p>`;
      list.appendChild(article);
    });
  }
  const body = document.getElementById('blog-body');
  if (!body) return;
  const post = blogPosts.find(post => post.id === body.dataset.id);
  try {
    const response = await fetch(post.markdownFile);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    // Protect TeX from Markdown's backslash, underscore, and line-break rules.
    // The original Jekyll source escapes inline delimiters with two backslashes.
    const normalized = markdown.replaceAll('\\\\(', '\\(').replaceAll('\\\\)', '\\)').replaceAll('\\\\[', '\\[').replaceAll('\\\\]', '\\]');
    const formulas = [];
    const protectedMarkdown = normalized.replace(/\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|\\begin\{(equation\*?|align\*?|gather\*?)\}[\s\S]*?\\end\{\1\}/g, formula => {
      const token = `MATHPLACEHOLDER${formulas.length}END`;
      // Some legacy blocks escape every command (and double their row breaks).
      if (/\\\\[a-zA-Z]/.test(formula)) formula = formula.replaceAll('\\\\', '\\');
      formulas.push(formula);
      return token;
    });
    body.innerHTML = marked.parse(protectedMarkdown).replace(/MATHPLACEHOLDER(\d+)END/g, (_, i) =>
      formulas[Number(i)].replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'));
    if (formulas.length) {
      window.MathJax = {
        tex: { inlineMath: [['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] },
        options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] },
        startup: { ready() { MathJax.startup.defaultReady(); MathJax.startup.promise.catch(console.error); } }
      };
      const script = document.createElement('script');
      script.src = '/vendor/mathjax/tex-chtml.js';
      script.onerror = () => { body.insertAdjacentHTML('afterbegin', '<p>Formula rendering is unavailable. The original TeX is displayed below.</p>'); };
      document.head.appendChild(script);
    }
  } catch (error) {
    body.textContent = 'Unable to load the article. Please reload this page.';
    console.error(error);
  }
});
