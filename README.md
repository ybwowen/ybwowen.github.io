# Bowen Yang’s academic homepage

This site uses static HTML, CSS, and JavaScript based on the [Arvid template](https://github.com/Arvid-pku/Academic-Homepage-Template).
It runs without Jekyll or a backend. The packaging script copies public files into `_site/`; it does not compile the site.

## Edit content

- `index.html`: biography, contact links, and News. The newest six items are visible initially; give older items the `older-news` class and `hidden` attribute.
- `data.js`: publications, projects, talks, research experience, and honors. Use `isSelected` for homepage entries. Publications use ISO dates and appear newest first.
- `blog-data.js`: blog metadata and public URLs. Blog bodies are Markdown in `blogs/`. The blog renderer preserves TeX during Markdown parsing and renders formulas with local MathJax.
- `cv/index.html` and `slides/index.html`: links to and previews of the original PDFs.
- `site-shell.js`: shared navigation and footer. `site-styles.css` contains local adaptations of the upstream styles.

Publication and talk detail pages also contain descriptions used in page metadata.
Keep these descriptions consistent with `data.js` when editing an entry.

When adding a public page:

1. Copy the metadata structure of an existing page.
2. Update the title, description, canonical URL, and sharing URLs.
3. Add the page to `sitemap.xml` and set `data-page` to its navigation section.

## Preview

```sh
bash scripts/package-site.sh
python3 -m http.server 8000 --directory _site
```

Open http://localhost:8000/. Use HTTP so the browser can load the Markdown files.
Packaging replaces `_site/` with the public HTML, scripts, styles, Markdown, vendor
libraries, files, images, and project photos. Edit the source files, not `_site/`.
The package excludes root development documents, including `AGENTS.md` and this
README, as well as local backups and caches. Keep working files in `.work/` or the
current task's evidence directory, outside the public content directories.

## Browser checks

With the preview server running on port 8000:

```sh
npm install
npx playwright install chromium
SCREENSHOT_DIR="$PWD/.work/screenshots" npm test
```

The checks cover 13 pages at 1440, 768, and 375 pixels, navigation, compatibility
redirects, internal resources, News, Abstract/Citation, keyboard activation, theme
persistence, back to top, and MathJax errors. Set `SCREENSHOT_DIR` explicitly, as
above, to keep screenshots in the working directory. Set `CHROME_PATH` to use an
existing Chromium executable. Review the affected pages' screenshots after the
checks pass.

## Deployment and rollback

`.github/workflows/pages.yml` deploys pushes to `master` and supports manual runs.
Pull requests to `master` package the site without deploying it. GitHub Settings →
Pages → Source must be **GitHub Actions**. Local preview does not publish the site.
Deployments and pushes that can trigger deployment must stay within the authorized scope.

The static migration started from `baab09272b25790d492706d5fd73c8160762dc7f` on
`migrate/arvid-static`. See `THIRD_PARTY.md` for the pinned template source and notices.

To restore the former Jekyll site, restore its source through file edits and review
the diff before deployment. Also restore Pages to **Deploy from a branch → master →
/ (root)**, then trigger the previous Jekyll deployment. Restoring the workflow alone
does not restore the Pages source setting. The static migration left the PDF files unchanged.

Old publication, talk, and blog URLs remain available. `/about/`, `/about.html`,
`/resume`, and `/portfolio/guidedvla` redirect to their new destinations.
