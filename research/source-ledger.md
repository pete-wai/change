# Source ledger

Generated from the reviewed canonical records. Sources can support several entries; links are not a claim that each source independently proves every part of an entry. Direct HTTP checks are recorded in docs/validation.md.

## Floppy disks got a virus check

Record: `early-pc-antivirus-scanning`. 1986–1992.

- [Computer Viruses and Related Threats: A Management Guide](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-166.pdf) (government guidance). Contemporaneous 1989 recommendations for antivirus testing of new software, disk controls, and organizational response.
- [A Guide to the Selection of Anti-Virus Tools and Techniques](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-5.pdf) (government technical guide). December 1992 statement that a variety of antivirus tools were available and criteria for selecting scanners and related products.
- [30 years of IT Security Innovation](https://www.eset.com/nz/about/30-years-it-security-anniversary/) (vendor retrospective). ESET's own retrospective on a 1987 NOD detection program and first Austrian retail sale in 1990; single-vendor evidence only.
- [History of Viruses](https://csrc.nist.rip/publications/nistir/threats/subsubsection3_3_1_1.html) (government retrospective). Brain's 1986 origin, its boot-sector behavior, and the role of disk exchange in PC-virus spread.

## The Morris worm leads to CERT/CC

Record: `morris-worm-cert`. 1988.

- [Fostering Growth in Professional Cyber Incident Management](https://www.sei.cmu.edu/history-of-innovation/fostering-growth-in-professional-cyber-incident-management/) (institutional history). SEI states that DARPA asked it to establish CERT/CC in the aftermath of the Morris worm.
- [Tracking and Tracing](https://resources.sei.cmu.edu/asset_files/SpecialReport/2002_003_001_13928.pdf) (research report). Dates the center to 1988 and provides CERT incident counts through 2001.
- [The President's Commission on Critical Infrastructure Protection Internet Report](https://www.cisa.gov/sites/default/files/publications/Network%20Group%20Internet%20Report_1999.pdf) (government report). Provides a distinct later estimate of roughly 4,000 affected computers and about five percent of connected systems.
- [U.S. Department of Homeland Security Announces Partnership with Carnegie Mellon's CERT Coordination Center](https://www.cmu.edu/cmnews/extra/030915_cyberpartner.html) (institutional announcement). Dates CERT/CC's formation to November 1988, in contrast to a later SEI report's December date; the public entry therefore uses year only.

## A firewall at the edge of the network

Record: `perimeter-firewalls`. Early 1990s–2002.

- [RFC 2979: Behavior of and Requirements for Internet Firewalls](https://www.rfc-editor.org/rfc/rfc2979.html) (IETF informational RFC). Firewall behavior and interoperability expectations by October 2000.
- [NIST SP 800-41: Guidelines on Firewalls and Firewall Policy](https://csrc.nist.gov/pubs/sp/800/41/final) (government guidance). Firewall selection, deployment, management, and policy were established organizational practices by January 2002.
- [Protecting Information Systems with Firewalls](https://csrc.nist.gov/pubs/itlb/2009/10/protecting-information-systems-with-firewalls-revi/final) (government retrospective). NIST's retrospective on perimeter placement, blind spots, and later internal network controls.
- [Network (In)Security Through IP Packet Filtering](https://www.usenix.org/legacy/publications/library/proceedings/sec92/full_papers/chapman.pdf) (primary). Documents operational gateways at AT&T, DEC, and other organizations.

## SSH brings encryption to remote logins

Record: `ssh-remote-login`. 1995–1999.

- [History of SSH](https://www.ssh.com/academy/ssh) (creator history). Ylönen's account of the password-sniffing incident, SSH's 1995 origin, and early distribution.
- [OpenSSH History](https://www.openssh.org/history.html) (project history). OpenBSD's incorporation and distribution of OpenSSH beginning in 1999.
- [RFC 4251: The Secure Shell Protocol Architecture](https://www.rfc-editor.org/rfc/rfc4251.html) (standards-track specification). The protocol's security design, publication date, and the need to verify host keys.

## Network operators start watching for intrusions

Record: `intrusion-detection-systems`. 1996–2001.

- [NIST SP 800-31: Intrusion Detection Systems](https://csrc.nist.gov/pubs/sp/800/31/final) (government guidance). IDS function, threat context, and NIST's assessment of organizational importance.
- [NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems](https://csrc.nist.gov/pubs/sp/800/94/final) (government guidance). Later distinctions among network-based, host-based, and other IDPS technologies.
- [Bro project history](https://old.zeek.org/manual/2.5.5/intro/index.html) (primary). Dates the operational deployment at Berkeley Lab to 1996.
- [Bro: A System for Detecting Network Intruders in Real-Time](https://static.usenix.org/publications/library/proceedings/sec98/paxson.html) (primary). Contemporaneous account of passive network monitoring.

## Sendmail stopped relaying mail for strangers by default

Record: `open-relays`. 1998–1999.

- [Sendmail 8.9 release notes](https://www.sendmail.org/~ca/email/releases/8.9.0.release.html) (primary). Default relay refusal
- [RFC 2505: anti-spam recommendations](https://www.rfc-editor.org/rfc/rfc2505.html) (primary). Abuse, consequences and relay policy

## Outlook blocks executable attachments

Record: `outlook-attachment-security`. 1999–2001.

- [Alert on Macro Virus Issues](https://news.microsoft.com/source/1999/03/30/alert-on-macro-virus-issues/) (contemporaneous vendor advisory). Melissa's Word macro, Outlook requirements, and immediate user warnings.
- [Microsoft Outlook Email Security Update announcement](https://news.microsoft.com/source/2000/05/15/microsoft-to-deliver-major-outlook-security-solution-to-help-protect-customers-against-computer-viruses/) (vendor rollout announcement). The attachment warnings and restrictions announced after both Melissa and ILOVEYOU.
- [Steven Sinofsky’s account of the Outlook update](https://hardcoresoftware.learningbyshipping.com/p/060-iloveyou) (primary). The Microsoft Office executive overseeing the response dates actual availability to June 8, 2000.
- [Microsoft Security Bulletin MS01-038](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2001/ms01-038) (primary). Confirms the protections were integrated into Outlook 2002.

## AES replaced DES in federal standards

Record: `des-aes-transition`. 1998–2005.

- [EFF DES Cracker record](https://w2.eff.org/Privacy/Crypto/Crypto_misc/DESCracker/) (project record). The July 1998 under-three-day challenge result and the January 1999 22-hour-15-minute distributed result.
- [FIPS 197: Advanced Encryption Standard](https://csrc.nist.gov/files/pubs/fips/197/final/docs/fips-197.pdf) (federal standard). AES specifications and effective date.
- [NIST announcement withdrawing FIPS 46-3 and related standards](https://csrc.nist.gov/News/2005/Withdrawal-of-FIPS-46-3-FIPS-74-and-FIPS-81) (standards policy announcement). The 2005 withdrawal rationale and explicit AES recommendation.

## Microsoft put security bulletins on a monthly schedule

Record: `microsoft-patch-cadence`. 2003.

- [NIST SP 800-40: Procedures for Handling Security Patches](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-40.pdf) (government guidance). Code Red and Nimda's use of vulnerabilities with available patches and the need for patch-management procedures.
- [10 years of Update Tuesdays](https://www.microsoft.com/en-us/msrc/blog/2013/10/10-years-of-update-tuesdays/) (vendor retrospective). The announcement date, monthly schedule, and customer request for predictability.
- [Microsoft Outlines New Initiatives in Ongoing Security Efforts](https://news.microsoft.com/source/2003/10/09/microsoft-outlines-new-initiatives-in-ongoing-security-efforts-to-help-customers/) (contemporaneous vendor announcement). Microsoft's stated reasons and planned patch scanning/deployment tools.

## Windows XP prevents code from running in protected memory

Record: `dep-nx-windows`. 2004.

- [Determine if hardware DEP is available](https://learn.microsoft.com/en-us/troubleshoot/windows-client/performance/determine-hardware-dep-available) (platform documentation). Processor, BIOS, operating-system, and configuration requirements for hardware DEP.
- [Security Tips: Minimizing the Code You Expose to Untrusted Users](https://learn.microsoft.com/en-us/archive/msdn-magazine/2004/november/security-tips-minimizing-the-code-you-expose-to-untrusted-users) (contemporaneous technical guidance). DEP's buffer-overflow rationale and its place among Windows XP SP2 mitigations.

## Wi-Fi got a replacement for WEP

Record: `wep-wpa-transition`. 2001–2010.

- [Establishing Wireless Robust Security Networks](https://csrc.nist.gov/pubs/sp/800/97/final) (primary). Explains WEP weaknesses and the WPA/802.11i transition.
- [PCI DSS v1.2.1, requirement 4.1.1](https://listings.pcisecuritystandards.org/minisite/en/docs/pci_dss_v1-2.pdf) (primary). Establishes WEP retirement deadlines for wireless networks in the payment card scope.
- [Using the Fluhrer, Mantin, and Shamir Attack to Break WEP](https://www.ndss-symposium.org/wp-content/uploads/2017/09/Using-the-Fluhrer-Mantin-and-Shamir-Attack-to-Break-WEP-Adam-Stubbefild.pdf) (primary). Documents practical key recovery on a network with permission.

## Windows XP turned its firewall on by default

Record: `windows-xp-sp2-firewall`. 2004.

- [Will Poole: Microsoft Worldwide Partner Conference 2004](https://news.microsoft.com/speeches/will-poole-microsoft-worldwide-partner-conference-2004/) (contemporaneous vendor speech). Microsoft's direct connection between the default firewall and stopping Blaster/Sasser.
- [NIST SP 800-69: Windows XP Home Edition security checklist](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-69.pdf) (government configuration guide). Pre-SP2 disabled default, SP2 enabled default, and detection of a third-party firewall.
- [Windows XP SP2 released to computer manufacturers](https://news.microsoft.com/source/2004/08/06/microsoft-releases-windows-xp-service-pack-2-with-advanced-security-technologies-to-computer-manufacturers/) (vendor release announcement). The August 6, 2004 release-to-manufacturing date.

## Windows Vista asked before giving a program admin access

Record: `windows-uac`. 2006–2007.

- [User Account Control overview](https://learn.microsoft.com/en-us/windows-server/security/user-account-control/user-account-control-overview) (vendor documentation). Elevation behavior and administrative operations requiring greater permissions.
- [Windows Vista application development requirements for UAC](https://learn.microsoft.com/en-us/windows/win32/secauthz/user-account-control) (vendor documentation). UAC introduction and requirements for standard-user applications.

## Chrome put web pages in a sandbox

Record: `chromium-sandbox`. 2008.

- [Security Architecture](https://blog.chromium.org/2008/09/security-architecture.html) (vendor engineering blog). Original purpose, process division, access mediation, and limits.
- [Chromium Sandbox FAQ](https://github.com/chromium/chromium/blob/main/docs/design/sandbox_faq.md) (project technical documentation). What sandboxing restricts and which harms it does not prevent.

## DNS replies became harder to forge

Record: `dns-forgery-resistance`. 2008–2009.

- [CERT’s coordinated DNS advisory](https://kb.cert.org/vuls/id/800113) (primary). Vendor patches, fixed ports and cache poisoning
- [RFC 5452: Measures for Making DNS More Resilient against Forged Answers](https://www.rfc-editor.org/rfc/rfc5452) (IETF standards document). Resolver requirements, source-port randomization and their security rationale.

## Windows took away AutoRun for ordinary USB drives

Record: `usb-autorun`. 2009–2011.

- [AutoRun changes in Windows 7](https://www.microsoft.com/en-us/msrc/blog/2009/04/autorun-changes-in-windows-7/) (vendor engineering blog). Distinguishes AutoRun from AutoPlay, names Conficker, describes behavior change and optical-media exception.
- [Changes in Windows to Meet Changes in Threat Landscape](https://www.microsoft.com/en-us/msrc/blog/2009/04/changes-in-windows-to-meet-changes-in-threat-landscape) (vendor security blog). Connects the default change to observed increase in removable-media malware.
- [Microsoft Security Advisory 967940](https://learn.microsoft.com/en-us/security-updates/securityadvisories/2009/967940) (primary). Documents KB971029 availability in 2009 and automatic update offering in 2011.

## Browsers could remember to use HTTPS

Record: `hsts`. 2011–2012.

- [RFC 6797: HTTP Strict Transport Security](https://www.rfc-editor.org/rfc/rfc6797) (IETF standards document). Threat model, persistent policy, forced HTTPS, and certificate-error behavior.
- [HTTP Strict Transport Security (HSTS) preload](https://chromium.org/hsts/) (browser project documentation). Preload mechanism and requirements for first-visit protection.
- [New Chromium security features, June 2011](https://blog.chromium.org/2011/06/new-chromium-security-features-june.html?hl=hu) (primary). Confirms HSTS preload capabilities in Chromium 12 before RFC publication.

## The Mac checked who signed a downloaded app

Record: `gatekeeper`. 2012.

- [Mountain Lion Available in July From Mac App Store](https://www.apple.com/newsroom/2012/06/11Mountain-Lion-Available-in-July-From-Mac-App-Store/) (vendor release announcement). Release timing and default identified-developer policy.
- [OS X Mountain Lion Core Technologies Overview](https://www.apple.com/media/us/osx/2012/docs/OSX_MountainLion_Core_Technologies_Overview.pdf) (vendor technical document). Developer ID signing and the settings users could choose.
- [Mountain Lion Available Today From the Mac App Store](https://www.apple.com/newsroom/2012/07/25Mountain-Lion-Available-Today-From-the-Mac-App-Store/) (primary). Confirms July 25, 2012 availability with Gatekeeper.

## An obscure address was no longer much of a hiding place

Record: `internet-wide-scanning`. 2009–2013.

- [ZMap’s original research](https://www.usenix.org/conference/usenixsecurity13/technical-sessions/paper/durumeric) (primary). Performance, single-port scope and dual use
- [What Shodan indexes](https://help.shodan.io/the-basics/what-is-shodan) (primary). Device indexing and defensive inventory
- [Ten Years of ZMap](https://arxiv.org/abs/2406.15585) (primary). Subsequent research and commercial adoption
- [Shodan founder’s ten-year retrospective](https://blog.shodan.io/happy-10-year-anniversary/) (primary). Dates the service to 2009 and describes documented network-monitoring use.

## Browsers dropped the SSL fallback

Record: `ssl3-retirement`. 2014–2015.

- [Firefox 34 release notes](https://www.firefox.com/en-US/firefox/34.0/releasenotes/) (primary). Shipped SSLv3 disablement
- [RFC 7568: Deprecating Secure Sockets Layer Version 3.0](https://www.rfc-editor.org/rfc/rfc7568) (IETF standards document). Protocol prohibition, fallback rule, and weaknesses of SSLv3.
- [This POODLE bites: exploiting the SSL 3.0 fallback](https://security.googleblog.com/2014/10/this-poodle-bites-exploiting-ssl-30.html) (research disclosure). Attack pressure and downgrade mechanism.

## Android apps began asking for access when they needed it

Record: `android-runtime-permissions`. 2015.

- [Android 6.0 Changes](https://developer.android.com/about/versions/marshmallow/android-6.0-changes) (platform release documentation). The runtime permissions model and API 23 targeting condition.
- [Request runtime permissions](https://developer.android.com/training/permissions/requesting) (developer documentation). User grant/revoke and application behavior requirements.

## Websites got free certificates they could renew automatically

Record: `lets-encrypt`. 2015–2020.

- [Let’s Encrypt public beta](https://letsencrypt.org/2015/12/03/entering-public-beta.html) (primary). Availability and automation
- [A billion certificates](https://letsencrypt.org/2020/02/27/one-billion-certs.html) (primary). Deployment scale

## Java applets lost their place in the browser

Record: `npapi-retirement`. 2015–2017.

- [Chromium’s NPAPI phase-out](https://blog.chromium.org/2014/11/the-final-countdown-for-npapi.html) (primary). Chrome schedule and rationale
- [NPAPI plugins in Firefox](https://blog.mozilla.org/futurereleases/2015/10/08/npapi-plugins-in-firefox/) (browser roadmap announcement). Phase-out schedule and transition context.
- [Firefox 52.0 release notes](https://www.mozilla.org/en-US/firefox/52.0/releasenotes/) (vendor release notes). Removal of NPAPI support except Flash in the shipped release.

## Firefox stopped offering RC4 for HTTPS

Record: `rc4-tls-retirement`. 2015–2016.

- [Firefox 44 developer release notes](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/44) (primary). Actual release default and date
- [RFC 7465: Prohibiting RC4 Cipher Suites](https://www.rfc-editor.org/rfc/rfc7465) (IETF standards document). Explicit client/server prohibition and rationale.
- [On the Security of RC4 in TLS](https://www.isg.rhul.ac.uk/tls/) (cryptographic research). Practical attack evidence against RC4 in TLS.

## Firefox stopped trusting public SHA-1 certificates

Record: `sha1-certificates`. 2015–2017.

- [Mozilla’s certificate phase-out](https://blog.mozilla.org/security/2017/02/23/the-end-of-sha-1-on-the-public-web/) (primary). Enforcement and residual prevalence
- [NIST on the collision result](https://csrc.nist.gov/News/2017/Research-Results-on-SHA-1-Collisions) (primary). Earlier deprecation and collision significance
- [Mozilla’s public trust policy and exceptions](https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/) (primary). Establishes the manually imported root exception.

## New Windows installs began leaving out SMBv1

Record: `smbv1-clean-install-removal`. 2017–2021.

- [SMBv1 not installed by default in Windows Server and Windows](https://learn.microsoft.com/en-us/windows-server/storage/file-server/Troubleshoot/smbv1-not-installed-by-default-in-windows) (vendor documentation). Current edition behavior, version timeline, upgrade exceptions and reinstall limits.
- [Detect, enable, and disable SMBv1, SMBv2, and SMBv3](https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3) (vendor documentation). Removal controls and continued SMBv2/3 alternatives.

## Chrome required a public record for website certificates

Record: `certificate-transparency`. 2013–2018.

- [Certificate Transparency in Chrome](https://googlechrome.github.io/CertificateTransparency/) (primary). Actual general enforcement and issuance cutoff
- [RFC 6962: Certificate Transparency](https://www.rfc-editor.org/rfc/rfc6962) (IETF standards document). Log architecture and intended auditability.
- [Chrome Certificate Transparency policy](https://googlechrome.github.io/CertificateTransparency/ct_policy.html) (browser policy). Browser enforcement scope and rollout conditions.

## Chrome gave different sites separate renderer processes

Record: `chrome-site-isolation-spectre`. 2018–19.

- [Site Isolation](https://www.chromium.org/Home/chromium-security/site-isolation/) (browser architecture documentation). Current scope and platform/version rollout.
- [Site Isolation Design Document](https://www.chromium.org/developers/design-documents/site-isolation/) (browser design history). Process-sharing context, milestones and known scope limits.
- [Mitigating Spectre with Site Isolation in Chrome](https://security.googleblog.com/2018/07/mitigating-spectre-with-site-isolation.html?hl=el) (primary). Documents July rollout, original design, and additional phases.

## Chrome started labeling plain HTTP “Not secure”

Record: `http-warning`. 2018.

- [Chrome’s HTTP warning](https://security.googleblog.com/2018/02/a-secure-web-is-here-to-stay.html) (primary). Warning scope and adoption figures
- [Chrome July 2018 releases](https://chromereleases.googleblog.com/2018/07/) (primary). Release availability

## Some new EC2 instances began requiring a token for metadata

Record: `aws-imdsv2-transition`. 2019–2023.

- [Add defense in depth against open firewalls, reverse proxies, and SSRF vulnerabilities with enhancements to the EC2 Instance Metadata Service](https://aws.amazon.com/blogs/security/defense-in-depth-open-firewalls-reverse-proxies-ssrf-vulnerabilities-ec2-instance-metadata-service/) (cloud security design announcement). SSRF pressure and IMDSv2 token design.
- [Amazon EC2 Instance Metadata Service IMDSv2 by default](https://aws.amazon.com/blogs/aws/amazon-ec2-instance-metadata-service-imdsv2-by-default/) (cloud rollout record). Completed and planned rollout milestones, with opt-back caveat.
- [Transition to using Instance Metadata Service Version 2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-metadata-transition-to-version-2.html) (cloud service documentation). Migration requirements and unchanged existing instances.

## Chrome started warning about passwords exposed in breaches

Record: `breached-passwords`. 2019.

- [Password breach alerting study](https://research.google/pubs/protecting-accounts-from-credential-stuffing-with-password-breach-alerting/) (primary). Threat and measured response
- [Chrome password protections](https://blog.google/products-and-platforms/products/chrome/better-password-protections/) (primary). Integration and rollout

## Android began taking permissions back from unused apps

Record: `android-unused-permission-reset`. 2020.

- [Android 11 behavior changes: Privacy](https://developer.android.com/about/versions/11/privacy/permissions) (platform release documentation). Permission auto-reset behavior and eligibility.
- [One-time permissions](https://support.google.com/android/answer/9431959) (platform user documentation). User-facing one-time location, camera and microphone permission option.

## Firefox drops TLS 1.0 and 1.1 by default

Record: `tls-10-11-browser-retirement`. 2020.

- [Removing Old Versions of TLS](https://blog.mozilla.org/security/2018/10/15/removing-old-versions-of-tls/) (browser security announcement). Protocol rationale, telemetry and planned transition.
- [Firefox 78.0 Release Notes](https://www.firefox.com/en-US/firefox/78.0/releasenotes/) (browser release notes). Actual Firefox release outcome.
- [Chrome UI for Deprecating Legacy TLS Versions](https://security.googleblog.com/2019/10/chrome-ui-for-deprecating-legacy-tls.html) (browser deprecation notice). Chrome staged warnings and planned removal with enterprise exception.

## Flash stopped running

Record: `flash`. 2017–2021.

- [Adobe Flash end of life](https://www.adobe.com/products/flashplayer/end-of-life.html) (primary). Support end, block and replacement technologies
- [Chrome’s Flash transition](https://blog.google/products-and-platforms/products/chrome/saying-goodbye-flash-chrome/) (primary). Prevalence and security rationale

## Google turned on two-step verification for millions of accounts

Record: `mass-mfa`. 2021–2022.

- [Google’s enrollment results](https://blog.google/innovation-and-ai/technology/safety-security/safer-internet-day-2022/) (primary). Scale and reported reduction
- [Research on account hijacking defenses](https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html) (primary). Threats and differences between defenses

## Older mail clients lost their password sign-in to Exchange Online

Record: `exchange-online-basic-auth-retirement`. 2022–2023.

- [Deprecation of Basic Authentication in Exchange Online](https://learn.microsoft.com/en-us/lifecycle/announcements/basic-auth-deprecation-exchange-online) (vendor lifecycle notice). Protocol scope and planned rollout date.
- [Deprecation of Basic authentication in Exchange Online](https://learn.microsoft.com/en-nz/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online) (vendor service documentation). Actual disabled state and end of re-enable option.

## Office blocked macros in files from the internet

Record: `internet-macros`. 2022–2023.

- [Microsoft’s rollout and exceptions](https://learn.microsoft.com/en-us/microsoft-365-apps/security/internet-macros-blocked) (primary). Affected versions, dates and behavior
- [NCSC macro security guidance](https://www.ncsc.gov.uk/guidance/macro-security-for-microsoft-office) (primary). Legitimate use and malicious document tactics

## Android ships more new code in memory-safe languages

Record: `memory-safe-language-transition`. 2022–2024.

- [Secure by Design: Google’s Perspective on Memory Safety](https://security.googleblog.com/2024/03/secure-by-design-googles-perspective-on.html) (engineering policy statement). Strategic direction and explicit limits of migrating a large C++ base.
- [Deploying Rust in Existing Firmware Codebases](https://security.googleblog.com/2024/09/deploying-rust-in-existing-firmware.html) (engineering implementation report). Concrete incremental Android firmware practice.
- [Safer with Google: Advancing Memory Safety](https://security.googleblog.com/2024/10/safer-with-google-advancing-memory.html) (engineering strategy report). Ongoing language transition and legacy-hardening approach.
- [Memory Safe Languages in Android 13](https://security.googleblog.com/2022/12/memory-safe-languages-in-android-13.html?hl=cs) (primary). Documents measured Android 13 code composition and shipped Rust components.

## GitHub began requiring two-factor sign-in for contributors

Record: `github-contributor-mandatory-2fa`. 2023–24.

- [Raising the bar for software security: GitHub 2FA begins March 13](https://github.blog/news-insights/product-news/raising-the-bar-for-software-security-github-2fa-begins-march-13/) (platform rollout notice). Scope, phased roll-out, and account takeover rationale.
- [Securing millions of developers through 2FA](https://github.blog/security/supply-chain-security/securing-millions-of-developers-through-2fa/) (platform adoption report). Enrollment and adoption results, with platform-specific scope.

## Google began offering passkeys first

Record: `passkeys-default-signin`. 2023–24.

- [Passkeys week is here](https://developers.googleblog.com/en/passkeys-week-is-here/) (vendor product announcement). Default sign-in prompt date and supported-device condition.
- [Passkeys, Cross-Account Protection and new ways we’re protecting your accounts](https://blog.google/innovation-and-ai/technology/safety-security/google-passkeys-update-april-2024/) (vendor usage report). Reported usage totals and Google-account-specific prevalence.

## New S3 buckets got an extra guard against going public

Record: `s3-public-access`. 2018–2023.

- [AWS’s guard and completed rollout](https://aws.amazon.com/blogs/aws/amazon-s3-block-public-access-another-layer-of-protection-for-your-accounts-and-buckets/) (primary). Original privacy, rationale, completion
- [AWS rollout announcement](https://aws.amazon.com/about-aws/whats-new/2023/04/amazon-s3-two-security-best-practices-buckets-default/) (primary). Default changes and new-bucket scope

## Gmail began enforcing new rules for incoming mail

Record: `gmail-sender-requirements`. 2024–25.

- [New Gmail protections for a safer, less spammy inbox](https://blog.google/products-and-platforms/products/gmail/gmail-security-authentication-spam-protection/) (platform announcement). Threat rationale, 2024 obligations and Google-reported reduction in unauthenticated mail.
- [Email sender guidelines](https://support.google.com/mail/answer/81126) (current service policy). Active requirements and bulk-sender threshold.
- [Email sender guidelines FAQ](https://support.google.com/mail/answer/14229414) (current enforcement notice). November 2025 rejection ramp; temporary and permanent rejection scope.

## Office began leaving ActiveX controls switched off

Record: `office-activex-default-disabled`. 2024 onward.

- [ActiveX controls are disabled by default in Microsoft 365 and Office 2024](https://support.microsoft.com/en-us/office/vba/activex-controls-are-disabled-by-default-in-microsoft-365-and-office-2024) (product security documentation). Current default, impact and override steps.
- [Add or register an ActiveX control](https://support.microsoft.com/en-us/excel/add-or-register-an-activex-control) (product documentation). Legacy feature status and current Office version applicability.
- [Overview of Office LTSC 2024](https://learn.microsoft.com/en-us/office/ltsc/2024/overview) (primary). Confirms the disabled default in the LTSC 2024 release.

## PyPI required a second factor to manage or publish packages

Record: `pypi-mandatory-2fa`. 2024.

- [2FA Requirement for PyPI begins 2024-01-01](https://blog.pypi.org/posts/2023-12-13-2fa-enforcement/) (registry policy announcement). Effective date and distinction between accounts and package consumers.
- [Security and Internals](https://docs.pypi.org/about/security-and-internals/) (registry security documentation). Current state that PyPI mandates 2FA for all users.

## npm revoked its old publishing tokens

Record: `npm-classic-token-revocation`. 2025–2026.

- [Strengthening npm security: Important changes to authentication and token management](https://github.blog/changelog/2025-09-29-strengthening-npm-security-important-changes-to-authentication-and-token-management/) (registry security rollout notice). Announced token lifetime caps, 2FA defaults and classic token sunset.
- [npm security update: Classic token creation disabled and granular token changes](https://github.blog/changelog/2025-11-05-npm-security-update-classic-token-creation-disabled-and-granular-token-changes/) (registry change notice). Actual disabled creation and new token constraints.
- [npm classic tokens revoked, session-based auth and CLI token management now available](https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/) (registry completion notice). Completed revocation and actual two-hour session behavior.
- [Restricting npm bypass-2FA granular access tokens](https://github.blog/changelog/2026-07-31-restricting-npm-bypass-2fa-granular-access-tokens/) (registry enforcement notice). Completed governance-action restriction and future direct-publish plan.

## Chrome began asking before opening a public HTTP site

Record: `http-permission`. 2026.

- [Chrome’s completed rollout](https://blog.google/security/chrome-now-warns-before-insecure-http-connections/) (primary). Actual rollout, exceptions and warning rates
- [The preceding HTTPS plan](https://blog.google/security/https-by-defau/) (primary). Earlier behavior, threat and announced scope
