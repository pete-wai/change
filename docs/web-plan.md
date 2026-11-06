# Webpage plan following research

## Research findings that determine the display

The collection spans slow changes as well as dated removals. A single incident/date axis would imply false causation. Display date ranges, distinguish retirement, changed defaults, added defenses and ongoing transitions, and explain that chronology follows a documented milestone rather than a universal adoption date. Each record carries origin, prevalence, pressure, response, outcome, scope, milestones and primary sources. Keep those fields available without forcing them into every short recollection.

The initial survey and Luna follow-up produced 46 selected cases, including antivirus, CERT, SSH, firewalls, IDS, cryptographic retirements, removable media, browser plug-ins, HTTPS, cloud defaults, authentication, package publishing and memory safety. Independent factual review identified and corrected announcement/enforcement confusion, overbroad platform claims and causal shortcuts. See research and reviews for the record.

## Reading experience

Build an editorial chronology with a large serif opening and a working before/after exhibit. A visitor selects a familiar case, then switches between its old behavior and the documented response. A simple labeled flow diagram changes with the selection; explanatory copy supplies the precise scope. This is a conceptual comparison, never a simulation of an exploit. Link the exhibit to the full entry.

Below it, a compact chronological index gives four era jumps. The main chronology is fully rendered HTML with a date rail, topic and outcome labels, short summaries and two source links. Native expandable details hold the full account, milestones and remaining sources. Large era headings provide pacing without repeating cards.

Search, topic and outcome filters operate together; a live count and a clear reset handle empty results. URL search parameters preserve filters; entry anchors are shareable and reveal the selected entry even if filters would otherwise hide it. No-JavaScript readers retain all records and native details.

## Visual system and implementation

Use warm paper, deep ink, restrained red and teal, a self-hosted literary serif for the display, and a familiar sans serif for body text. A timeline and exact geometric diagram provide the visual material. Avoid stock hacker imagery, faux terminal clutter, card grids and ornamental charts. On phones, stack the exhibit and shorten the date rail without reducing text size. Controls wrap and stay usable at 320px.

Generate the page with pinned Node and plain HTML/CSS/JavaScript. No framework or client rendering dependency is needed. Ship only index.html, local CSS/JS/font assets and metadata. Relative asset links support the /change/ Pages path. Use a custom 404 with a working home link if needed; anchors require no routing.

## Verification and release

Validate records and the generated artifact, test filters, anchor recovery, exhibit switching, keyboard controls and no-JavaScript behavior in Chromium, Firefox and WebKit. Check accessibility with axe and inspect desktop/mobile screenshots. Include narrow viewport, enlarged text and reduced motion. Sol reviews the final rendered copy and design. Resolve material findings before publication.

Create the public change repository, commit the lockfile and source/research/reviews, configure GitHub Pages deployment through Actions, and verify the deployed URL and assets. Record actual outcomes and remaining limitations in docs/validation.md and README.md.
