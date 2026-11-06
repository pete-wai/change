# Validation record

Local checks completed November 6, 2026 using pinned Node 24.21.0, npm 11.19.0 and Playwright 1.65.0 on the agent-operated Mac.

- Build: 46 entries rendered into HTML across four eras. Research/reviews are not in dist/.
- Content checks: 3 tests passed, validating record completeness, unique IDs, chronological order, source presence, exhibit references and build contents.
- Browser checks: all 32 passed across Chromium, Firefox, WebKit and iPhone 13 emulation. Covered combined filtering/reset/empty state, saved query state, deep-link recovery, before/after controls, keyboard activation, native details, no JavaScript, reduced motion, and 320px width with doubled text.
- Accessibility: axe found no violations in the default page or expanded Flash entry in each browser project. Keyboard tests cover skip navigation, buttons and disclosures. WebKit uses Option-Tab for link navigation, reflecting its default keyboard behavior.
- Direct source HTTP check: 126 of 126 distinct source URLs reachable. This verifies availability only. Historical claims were reviewed separately; a successful response is not proof of accuracy.
- Visual review: desktop 1440×1100 and mobile 390×844 captures, chronology and expanded details; full-page captures also retained locally. Initial text enlargement overflow was fixed with wrapping and constrained grid columns. Independent Sol review requested a vertical route terminating at the blocked barrier and narrower HTTP wording. All four review findings were scored resolved, with a ship verdict in reviews/site-review.md.
- Impeccable static detector: no findings. Design tokens documented in DESIGN.md and .impeccable/design.json.
- Dependencies: npm install reported zero known vulnerabilities at installation.

Evidence paths: output/screenshots/, output/playwright-report/, output/test-results/, output/source-links.json. These generated artifacts remain local. Review findings and resolutions are committed.

Limits: automated accessibility checks and browser emulation do not replace testing with people using assistive technology or physical devices. Sources are predominantly English-language and vendor/standards records. The history deliberately distinguishes measured deployments from recommended practice and does not claim universal adoption. Every external link can change after this check.

Publication verification is recorded below after deployment.

A later regression check added repeated clicks on an already-current entry anchor after filtering it out. The fix and its four browser-project checks passed. The FedRAMP reference manifest was verified unchanged after this independent project work: 63,442 entries.

## Published site

Public repository: https://github.com/pete-wai/change

Live site: https://pete-wai.github.io/change/

The first GitHub Pages workflow succeeded: https://github.com/pete-wai/change/actions/runs/42225296956. A live Chromium check on November 6, 2026 confirmed HTTP 200, all 46 rendered entries, local asset loading without HTTP errors, comparison controls, filtering/reset, and a deep link opening the Flash details. No JavaScript errors occurred. The machine-readable report is output/live-check.json.

The final site update is tracked at https://github.com/pete-wai/change/actions/runs/42225676438. Future main-branch pushes run the same build and content checks before Pages deployment. Research and reviews remain repository files, not published website assets.

The final update workflow also succeeded. A second live smoke check passed after deployment, and the served app.js included the repeated-anchor recovery fix. GitHub emitted non-blocking runtime migration notices for its Pages actions; build and deployment completed successfully. Documentation-only recording commits use [skip ci] because they do not alter the built site.
