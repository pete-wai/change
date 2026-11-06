# Candidate register

This register preserves all 110 lines from [`candidate-leads.txt`](candidate-leads.txt) in their original order, then records additional Luna and review leads. Dispositions refer to the current canonical set in [`data/events.json`](../data/events.json). “Screened-only” means inventoried and lightly triaged; it does not mean sources were fully researched or a factual conclusion was reached.

For evidence, see the [initial findings](initial-findings.md), [Luna early](luna-early.md), [Luna middle](luna-middle.md), [Luna recent](luna-recent.md), and the [lead](lead-entries.json), [middle](middle-entries.json), [recent](recent-entries.json), and [early](early-entries.json) manifests. Review records: [facts](../reviews/facts.md), [prose](../reviews/prose.md), and [resolutions](../reviews/resolutions.md).

Disposition key: **selected** is canonical; **merged/related** is represented only in part by a named entry; **deferred** has a research or scope reason to revisit; **screened-only** has not had a full evidence pass. A relationship does not imply every aspect is covered.

## Initial candidate list (110)

| # | Candidate | Disposition | Canonical relation or research note |
|---:|---|---|---|
| 1 | Boot-sector viruses and disk scanning | selected | `early-pc-antivirus-scanning`. Bounded scanner-market history; broad adoption is unmeasured. |
| 2 | Morris worm and CERT coordination | selected | `morris-worm-cert`. Incident response coordination; use 1988 for CERT/CC establishment. |
| 3 | Password sniffing and SSH | selected | `ssh-remote-login`. SSH origin and implementation; not universal protocol retirement. |
| 4 | Open SMTP relays | selected | `open-relays`. Lead research covers sendmail 8.9 and RFC 2505. |
| 5 | DES brute force and AES | selected | `des-aes-transition`. Federal standards transition; distinguish the 1998 and 1999 cracking milestones. |
| 6 | Macro viruses and Office prompts | merged/related | `outlook-attachment-security` and `internet-macros` cover macro abuse and later defaults; the first Office macro-warning rollout is not separately established. |
| 7 | Melissa and Outlook attachment restrictions | selected | `outlook-attachment-security`. Outlook controls after Melissa and ILOVEYOU; June 2000 rollout. |
| 8 | ILOVEYOU and script attachments | merged/related | `outlook-attachment-security`. Complementary threat evidence; not a separate entry. |
| 9 | Perimeter firewalls | selected | `perimeter-firewalls`. Organizational practice, not a universal 1990 adoption date. |
| 10 | Network IDS and IPS | selected | `intrusion-detection-systems`. Bro deployment and later NIST guidance establish IDS; inline IPS adoption is not separately established. |
| 11 | Windows XP SP2 firewall | selected | `windows-xp-sp2-firewall`. Windows default change with configuration exceptions. |
| 12 | Automatic security updates | merged/related | `microsoft-patch-cadence`. Related patch-management practice; automation and release cadence differ. |
| 13 | Patch Tuesday | selected | `microsoft-patch-cadence`. Microsoft-specific monthly bulletin schedule. |
| 14 | DEP and non-executable memory | selected | `dep-nx-windows`. Hardware DEP and Windows XP SP2 defaults. |
| 15 | ASLR | deferred | Identified during the early pass; later selection retained DEP. A separate ASLR deployment and adoption review remains open. |
| 16 | Stack canaries | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 17 | Windows Vista UAC | selected | `windows-uac`. Vista elevation prompts; compatibility and user-experience limits. |
| 18 | Unix privilege separation | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 19 | Web browser process sandboxes | selected | `chromium-sandbox`. Chrome/Chromium launch-era sandbox, separate from site isolation. |
| 20 | Mobile application sandboxing | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 21 | Signed mobile apps and app stores | merged/related | `gatekeeper`. Related trust check; macOS Gatekeeper does not represent mobile app-store signing. |
| 22 | Android runtime permissions | selected | `android-runtime-permissions`. Dangerous-permission prompts for applicable target SDKs. |
| 23 | Gatekeeper and downloaded software | selected | `gatekeeper`. macOS downloaded-app signature check; users can override. |
| 24 | Secure Boot | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 25 | Full-disk encryption | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 26 | USB AutoRun restrictions | selected | `usb-autorun`. AutoRun change for ordinary removable USB media; optical exception. |
| 27 | BadUSB | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 28 | USB restricted mode | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 29 | WEP to WPA/WPA2 | selected | `wep-wpa-transition`. Offered replacement; standards and certification do not prove migration. |
| 30 | KRACK and wireless patches | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 31 | WPA3 and password guessing | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 32 | Bluetooth discoverability | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 33 | Router default passwords | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 34 | Mirai and IoT defaults | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 35 | UPnP exposure | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 36 | DNS cache poisoning and source port randomization | selected | `dns-forgery-resistance`. Resolver defenses against forged DNS replies. |
| 37 | DNSSEC | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 38 | DNS over HTTPS | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 39 | BGP route validation and RPKI | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 40 | NTP amplification | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 41 | DNS amplification and response rate limiting | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 42 | SYN cookies | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 43 | DDoS mitigation services | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 44 | Shodan searchable services | merged/related | `internet-wide-scanning`. One related discovery service, not the cause of Internet-scale scanning. |
| 45 | ZMap Internet-wide scanning | selected | `internet-wide-scanning`. Research establishes scale; dual use and exposure observability remain distinct. |
| 46 | SMBv1 removal | selected | `smbv1-clean-install-removal`. Windows clean-install and edition-specific omission, not global protocol removal. |
| 47 | RDP network level authentication | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 48 | Telnet removal from devices | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 49 | FTP removal from browsers | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 50 | rlogin and rsh replacement | merged/related | `ssh-remote-login`. Related insecure protocols; SSH does not establish their universal retirement. |
| 51 | SSLv2 retirement | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 52 | SSLv3 and POODLE | selected | `ssl3-retirement`. Browser and standards retirement dates differ. |
| 53 | TLS 1.0/1.1 retirement | selected | `tls-10-11-browser-retirement`. Narrowed to verified Firefox 78 rollout. |
| 54 | RC4 retirement | selected | `rc4-tls-retirement`. Firefox TLS policy and IETF guidance; platform-specific. |
| 55 | MD5 certificate collision | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 56 | SHA-1 certificate retirement | selected | `sha1-certificates`. Public certificate distrust; browser rollout preceded collision news. |
| 57 | Export-grade crypto FREAK/Logjam | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 58 | HTTPS everywhere | merged/related | `hsts, lets-encrypt, http-warning`. A broad goal represented by separate controls, not one enforcement event. |
| 59 | Let's Encrypt certificate automation | selected | `lets-encrypt`. Automated certificate issuance and renewal; issuance totals are not people. |
| 60 | HSTS and SSL stripping | selected | `hsts`. Browser policy after secure visits; first visit remains a limit. |
| 61 | Mixed-content blocking | deferred | Verify public release and scope before promotion. |
| 62 | Certificate Transparency | selected | `certificate-transparency`. Chrome requires public logs; transparency does not prevent issuance. |
| 63 | DigiNotar distrust | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 64 | Symantec certificate distrust | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 65 | Shorter certificate lifetimes | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 66 | Flash retirement | selected | `flash`. Support end and execution block are separate milestones. |
| 67 | Java/NPAPI retirement | selected | `npapi-retirement`. Browser-specific plugin removal, scoped to product releases. |
| 68 | ActiveX retirement | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 69 | Internet Explorer retirement | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 70 | Browser popup blocking | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 71 | Safe Browsing and malicious site warnings | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 72 | Extension signing and store requirements | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 73 | Content Security Policy | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 74 | SameSite cookies | deferred | Strong future lead; rollout, rollback, and resumption need full chronology review. |
| 75 | Cross-site request forgery tokens | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 76 | SQL injection and parameterized queries | deferred | Known defense, but no dated broad deployment transition is established. |
| 77 | Password hashing with salts and work factors | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 78 | Password expiration guidance changes | deferred | Guidance change does not establish changed domain policy; primary baseline review remains. |
| 79 | Password managers | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 80 | Credential stuffing and breached-password checks | merged/related | `breached-passwords`. Selected record covers Chrome breach-password warnings, not all defenses. |
| 81 | Mass MFA enrollment | selected | `mass-mfa`. Google-reported enrollment and outcomes, not population-wide MFA. |
| 82 | SMS MFA limitations | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 83 | Passkeys and security keys | selected | `passkeys-default-signin`. Google prompt for supported accounts; passwords remain available. |
| 84 | Legacy Basic authentication retirement | selected | `exchange-online-basic-auth-retirement`. Exchange Online affected protocols; excludes SMTP AUTH. |
| 85 | OAuth third-party access | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 86 | OAuth PKCE | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 87 | Email SPF/DKIM/DMARC | merged/related | `gmail-sender-requirements`. Related authentication; the canonical record is Google-specific. |
| 88 | Gmail bulk sender requirements | selected | `gmail-sender-requirements`. Google inbox rules and sender cohorts, not universal email delivery. |
| 89 | Remote email images blocked | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 90 | Office Protected View | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 91 | Internet macros blocked | selected | `internet-macros`. Office files carrying Mark of the Web in supported Windows channels. |
| 92 | ActiveX Office defaults | selected | `office-activex-default-disabled`. Office LTSC 2024 dated default; Microsoft 365 rollout date not asserted. |
| 93 | Antivirus integrated into Windows | deferred | Later Defender integration is distinct from early scanner emergence; scope a later case. |
| 94 | EDR and behavioral detection | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 95 | Ransomware and immutable backups | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 96 | Cloud storage public access defaults | selected | `s3-public-access`. New S3 buckets only; existing buckets were not rewritten. |
| 97 | Cloud metadata IMDSv2 | selected | `aws-imdsv2-transition`. Selected AWS launch paths; adoption and enforcement scope varies. |
| 98 | Software dependency scanning | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 99 | Reproducible builds | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 100 | Package signing and provenance | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 101 | Registry mandatory MFA | selected | `pypi-mandatory-2fa`. PyPI policy; downloads do not require an account. |
| 102 | Short-lived package publishing credentials | merged/related | `npm-classic-token-revocation`. Related npm token/session change; OIDC is a separate optional feature. |
| 103 | Memory-safe language adoption | selected | `memory-safe-language-transition`. Narrowed to shipped Android/Google changes, not an industry-wide transition. |
| 104 | Spectre and browser isolation | selected | `chrome-site-isolation-spectre`. Chrome rollout; Site Isolation predated Spectre and activation was staged. |
| 105 | Meltdown and kernel page-table isolation | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 106 | Hardware-backed credentials | merged/related | `passkeys-default-signin`. Related implementation path, not all hardware security keys. |
| 107 | TLS forward secrecy | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 108 | QUIC encryption | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 109 | Post-quantum cryptography deployment | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |
| 110 | AI prompt injection defenses | screened-only | Inventory lead only; no full-source review or adoption claim is recorded. |

## Additional Luna and review leads

These leads were added during omission research or adjudication. Screened-only items are not represented as publication-ready research.

| Candidate | Disposition | Relation or next evidence needed |
|---|---|---|
| Network ingress filtering / BCP 38 | deferred | RFC 2827 is a recommendation and says implementation was limited; operator measurements are needed. |
| Firewall segmentation inside networks | deferred | Later guidance describes the direction, but adoption date and prevalence are unestablished. |
| Chrome HTTP warning and later HTTP permission prompts | selected | Two distinct records: `http-warning` (2018 labels) and `http-permission` (2026 prompts for defined navigations). |
| Mixed active-content blocking in Firefox | deferred | HTTPS-related candidate; public release verification remains open. |
| Microsoft Defender / Windows 8 integrated antivirus | deferred | Later Windows-specific case noted in screening; distinct from early scanner history. |
| npm OIDC trusted publishing | deferred | Researched availability candidate, distinct from classic-token enforcement; uptake is unmeasured. |
| PyPI OIDC / provenance transition | deferred | Distinguish attestations and optional federation from mandatory PyPI 2FA. |
| Android OS-level application sandbox | deferred | Held outside canonical selection; separate from runtime permissions. |
| Outlook executable attachment block shipped June 8, 2000 | selected | Fact review clarifies shipped date and behavior; Outlook 2002 integration corroborates persistence. |
| WEP retirement in payment-card environments | merged/related | PCI DSS gives scoped deadlines for cardholder environments, not all Wi-Fi networks. |

## Manifest reconciliation

The four research manifests contain 50 unique proposed records. The canonical event data contains 46 unique IDs. Four proposed IDs do not appear separately: `windows-dep` is consolidated into `dep-nx-windows`; `chrome-site-isolation` is consolidated into `chrome-site-isolation-spectre`; `android-sandbox` was held out; and `npm-trusted-publishing` was held out because availability evidence did not establish meaningful adoption. See [`resolutions.md`](../reviews/resolutions.md).
