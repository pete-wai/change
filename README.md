# Change

[Read the history](https://pete-wai.github.io/change/)

A history of things people used to trust at the computer, and the threats that changed them. The site covers 46 selected shifts from the 1980s through November 6, 2026, with short recollections, primary sources and expandable evidence. A before/after exhibit, chronological sections and combined search/topic/outcome filters support browsing.

Research came first: an initial survey, follow-up research by three Luna agents, lead verification, and independent Sol reviews of facts, writing and the rendered site. The repository retains that work, including rejected and deferred candidates. AI assistance is disclosed on the site. The collection is selective; it does not claim every technology became obsolete everywhere.

## Run locally

Requires mise. Node 24.21.0 is pinned in mise.toml; npm 11.19.0 is pinned in package.json. The lockfile is committed.

```sh
mise trust
mise install
mise exec -- npm ci
mise exec -- npm run build
mise exec -- npm run preview
```

Open http://127.0.0.1:4173/change/. The preview binds to localhost. Set PORT to use another port.

## Verify

```sh
mise exec -- npm test
mise exec -- npx playwright install chromium firefox webkit
mise exec -- npm run test:browser
mise exec -- npm run check:links
```

The source-link checker reports reachability, not whether a source proves a claim. Browser tests cover functionality, keyboard use, no-JavaScript reading, axe checks, reduced motion and narrow screens with doubled text. Playwright output and screenshots are local artifacts under output/ and are not deployed. See [validation](docs/validation.md) for actual results and limits.

## Edit the history

[data/events.json](data/events.json) is the reviewed canonical record. Each entry needs the former practice, pressure, response, outcome, scope, origin, prevalence, dated milestones and at least two supporting sources. Check actual enforcement or deployment; an announcement alone does not establish a change. Keep a short summary in ordinary language. The numerical year determines its chronological position; dateLabel can show the broader interval.

[data/exhibits.json](data/exhibits.json) supplies the four comparisons. Their explanations simplify a documented case and link back to its complete entry. Keep diagram state and wording consistent: a blocked path ends at its barrier, while a permission step can be passed with approval.

[research/](research/) contains the method, candidate register, source notes and draft research batches. Draft batches are historical working notes, superseded by the canonical data and [review resolutions](reviews/resolutions.md). Never copy them back over the reviewed records. [docs/web-plan.md](docs/web-plan.md) records the second-stage plan. [PRODUCT.md](PRODUCT.md) and [DESIGN.md](DESIGN.md) describe the product and visual system.

## Build and publication

A small Node script renders every entry into static HTML. The browser adds filtering and comparison controls; all history and native disclosures remain usable without JavaScript. The site uses local CSS, JavaScript and a self-hosted Newsreader font, with no analytics or external runtime requests. The font is distributed under the included SIL Open Font License.

Pushes to main run the pinned GitHub Actions workflow, validate the content, build dist/, and deploy that directory to GitHub Pages. Research, reviews and local reports are excluded from the site. Relative asset paths support the /change/ project URL.
