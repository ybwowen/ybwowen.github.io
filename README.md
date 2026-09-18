# Bowen Yang’s academic homepage

Static HTML, CSS, and JavaScript based on the [Arvid template](https://github.com/Arvid-pku/Academic-Homepage-Template).
No Jekyll, build tooling, or backend is required.

## Edit content

- `index.html`: biography, contact links, and News. The newest six items are visible initially; give older items the `older-news` class and `hidden` attribute.
- `data.js`: publications, projects, talks, research experience, and honors. Use `isSelected` for homepage entries. Publications use ISO dates and appear newest first.
- `blog-data.js`: blog metadata and public URLs. Blog bodies are Markdown in `blogs/`; TeX is protected during Markdown parsing and rendered using local MathJax.
- `cv/index.html` and `slides/index.html`: summaries and original PDF previews.
- `site-shell.js`: shared navigation and footer. `site-styles.css` contains local adaptations of the upstream styles.

When adding a public page, copy the metadata structure of an existing page,
update its title, description, canonical and sharing URLs, and add it to `sitemap.xml`.
Keep `data-page` aligned with its navigation section.

## Preview

```sh
bash scripts/package-site.sh
python3 -m http.server 8000 --directory _site
```

Open http://localhost:8000/. Preview over HTTP so Markdown loading works.
The deploy artifact includes only public HTML, scripts, styles, Markdown, vendor
libraries, files, images, and project photos. Development files and old caches
are excluded.

## Browser checks

With the preview server running on port 8000:

```sh
npm install
npx playwright install chromium
npm test
```

The checks cover 13 pages at 1440, 768, and 375 pixels, navigation, compatibility
redirects, internal resources, News, Abstract/Citation, keyboard activation, theme
persistence, back to top, and MathJax errors. Screenshots go to `/tmp/arvid-check`
(or `SCREENSHOT_DIR`). Set `CHROME_PATH` to use an existing Chromium executable.

## Deployment and rollback

`.github/workflows/pages.yml` deploys pushes to `master` and supports manual runs.
GitHub Settings → Pages → Source must be **GitHub Actions**. Work on a migration
branch can be reviewed before merging into `master`.

Migration starts from `baab09272b25790d492706d5fd73c8160762dc7f` on
`migrate/arvid-static`. See `THIRD_PARTY.md` for the pinned template source and notices.

For a failed migration release, revert the migration commit on `master` and restore
Pages to **Deploy from a branch → master → / (root)**, then trigger the previous
Jekyll deployment. Merely reverting the static workflow does not restore the Pages
source setting. The PDF files are unchanged by this migration.

Old publication, talk, and blog URLs remain available. `/about/`, `/about.html`,
`/resume`, and `/portfolio/guidedvla` redirect to their new destinations.
