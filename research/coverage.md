# Research coverage and limits

Cutoff: 2026-11-06. This report describes the current canonical history in [`data/events.json`](../data/events.json), not every candidate considered. Candidate dispositions and open leads are in the [candidate register](candidate-register.md). The research trail includes [initial findings](initial-findings.md), [Luna early](luna-early.md), [Luna middle](luna-middle.md), [Luna recent](luna-recent.md), four period manifests ([lead](lead-entries.json), [middle](middle-entries.json), [recent](recent-entries.json), [early](early-entries.json)), and independent [fact](../reviews/facts.md), [prose](../reviews/prose.md), and [resolution](../reviews/resolutions.md) records.

## Current collection counts

The canonical collection has **46 entries**. The four candidate manifests contain **50 unique proposals**; 46 became canonical, two proposals were consolidated into canonical entries, and two remained outside the selected collection.

| Measure | Verified count |
|---|---:|
| Canonical entries | 46 |
| 1980s | 2 |
| 1990s | 4 |
| 2000s | 10 |
| 2010s | 15 |
| 2020s through cutoff | 15 |
| Networks | 13 |
| Software | 14 |
| Web | 11 |
| Identity | 5 |
| Devices | 3 |
| Defense | 18 |
| Default changed | 17 |
| Retired or blocked | 9 |
| Ongoing transition | 2 |
| Distinct source URLs per entry | At least 2 for every entry |

Counts are from current event data grouped by year, category, and status. The resolution log also confirms 46 unique records and a minimum of two distinct source URLs each. Status describes a kind of change, not its reach: a platform can change a default without the whole industry changing practice.

## Coverage shape

The early period has **12 canonical entries dated 1987-2004**: antivirus scanner availability, the Morris/CERT response, SSH, firewalls and intrusion detection, SMTP relay controls, Outlook attachment restrictions, DES/AES, patch cadence, Wi-Fi security, XP firewall defaults, and DEP. The remaining 34 records cover 2006-2026. The 1980s and 1990s are thin compared with recent platform changes.

The collection favors observable product, protocol, standards, or service behavior: defaults, enforcement, support removal, and adopted defenses. It includes vendor-specific and standards-based changes, with many examples from Windows, Google/Chrome/Android, browser vendors, AWS, and package registries. It is not a representative sample of all sectors or organizations.

## Notable omissions and limits

- **Early adoption evidence is uneven.** The 1989 NIST virus guide and 1992 scanner-selection guide show recommendations and an established product category; ESET documents one product's 1987 precursor and 1990 Austrian retail sale. They do not establish antivirus market share, workplace compliance, or a universal move to scanning. Firewall and IDS records rely on bounded operational examples and guidance, not a deployment census.
- **The 1990s coverage is selective.** Four entries fall in that decade: firewalls (early 1990s), SSH (1995), IDS (1996 deployment anchor), and SMTP relays (1998). Important subjects such as patch management, password policy, browser scripting, early web encryption, and malware distribution remain absent where a broad change in common behavior was not established.
- **Standards do not establish adoption.** RFCs and IEEE/NIST publications establish specifications, recommendations, and availability. They do not show that every organization upgraded. WEP/WPA and DNS defenses are scoped accordingly. Federal DES withdrawal describes federal approval, not every commercial migration date.
- **Vendor rollout is not universal behavior.** Windows XP's firewall, Outlook attachment handling, Firefox cryptographic changes, Google MFA, Chrome warnings, Amazon defaults, and Gmail sender rules concern named products, cohorts, or services. Their dates are not Internet-wide enforcement dates.
- **Some changes remain partial.** Passkeys and memory-safe development are continuing transitions. Chrome's HTTP permission prompt applies to defined public HTTP navigations. TLS retirement is anchored to Firefox's verified release evidence. A product milestone does not prove all users adopted it.
- **Threats and defenses overlap.** Melissa and ILOVEYOU provide context for Outlook attachment restrictions; neither is said to have caused every later email filter. Spectre raised Site Isolation's urgency, while the project began earlier. DES demonstrations show practical key search but did not single-handedly create AES. Shodan and ZMap support claims about observable scanning, not a claim that either caused later exploitation.
- **Researched candidates remain outside the collection.** SameSite defaults, mixed active content, SQL injection defenses, BCP 38, RPKI, password-change guidance, Android's original sandbox, npm OIDC trusted publishing, and broader Windows antivirus integration are deferred or screened. The register describes the evidence gaps. Screened-only candidates have not received a full source review.
- **This is not a ranking.** Selection favors traceable before/pressure/response/outcome evidence. It does not estimate economic harm or compare attack severity.

## Review and verification record

The lead verification pass records source openings, fetch limitations, and additional screening in [`lead-review-notes.md`](lead-review-notes.md). Independent factual review and resolutions are in [`facts.md`](../reviews/facts.md) and [`resolutions.md`](../reviews/resolutions.md). Prose edits are recorded in [`prose.md`](../reviews/prose.md) and [`prose-edits.json`](../reviews/prose-edits.json). The review log records an FBI Melissa retrospective fetch denial; related threat and response evidence is retained. Candidate labels distinguish deferred or screened-only ideas from publication-ready research.
