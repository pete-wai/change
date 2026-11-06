# Lead verification notes

2026-11-06: Opened and read the relevant sections of all sources in lead-entries.json. These are independently authored summaries, not reproduced articles. S3 launch and completion are different dates; the 2018 AWS article explicitly says buckets were always private. SHA-1 browser enforcement preceded/overlapped the collision demonstration. Chrome HTTP labels (2018) and permission before insecure connections (2026) are distinct changes, each backed by vendor primary documents. The 2026 completion report supersedes the 2025 plan.

The password-alert research abstract establishes the deployment and response figures; the separate Chrome announcement establishes integration. Google MFA results are vendor reported and do not measure every provider or method. NCSC supports the role of legitimate macros and malicious attachments; Microsoft's table establishes channel dates. Let’s Encrypt’s certificate volume is cumulative issuance, not unique certificates or people, so public prose uses its reported website count instead.

Fetch failures: original FBI retrospective timed out (CMU institutional history is available); Google's SHA-1 announcement returned a bot challenge (NIST's contemporaneous report and Mozilla enforcement record supply the required claims). Neither failed fetch is treated as a completed reading.

## Additional candidate screening

- SameSite cookie defaults: strong candidate for future expansion. Chromium's https://www.chromium.org/updates/same-site/ documents February 2020 rollout, temporary pandemic rollback and resumption. Do not simplify to a single universal February cutoff. Kept out of initial public selection to limit overlapping browser-default entries; requires full chronology review before promotion.
- Mixed active content: Mozilla's https://blog.mozilla.org/security/2013/05/16/mixed-content-blocking-in-firefox-aurora/ and June follow-up establish default active-content blocking planned for Firefox 23. Public release verification remains needed. Fold into future HTTPS expansion, not an unsupported universal content ban.
- SQL injection/parameterized queries: OWASP documents a well-established defense, but the survey has not established a dated broad transition in actual deployment. Defer; never claim injection became obsolete.
- BCP 38: RFC 2827 provides a concrete 2000 recommendation against source spoofing, but a standard alone does not establish widespread adoption. Defer pending operator/measurement evidence.
- RPKI: research measurement of filtering exists, but rollout varies by provider and route visibility; defer pending a stronger adoption narrative.
- Mandatory periodic password changes: the 2019 Microsoft baseline change is a good future case, but removing a recommendation is not the same as changing every deployed domain policy. Defer pending primary final-baseline review.
- Standalone Windows antivirus installation: Microsoft's November 2013 explanation confirms Windows 8/RT include antivirus in Defender, unlike older Defender's narrower protection. Distinct later outcome for antivirus; recommend expansion after early-history pass if not otherwise covered. https://www.microsoft.com/en-us/security/blog/2013/11/14/windows-defender-and-microsoft-security-essentials-which-one-do-i-need/

These screened leads are not represented as fully investigated or publication-ready. The candidate register distinguishes selected, merged, deferred and screened-only cases.
