# Initial lead-research pass

These anchors establish the selection logic before Luna omission research. Dates below represent different kinds of milestones, not a universal start date. Further verification and complementary sources are required before publication.

| Candidate | Evidence and interpretation |
| --- | --- |
| Morris worm and coordinated response | FBI's 2018 retrospective connects the 1988 worm to creation of the emergency response team. Full FBI fetch timed out; recover or replace before publication. https://www.fbi.gov/news/stories/morris-worm-30-years-since-first-major-attack-on-internet-110218 |
| Open SMTP relays | RFC 2505 (1999), section 2.1, requires relay refusal controls and describes resource theft, forged sender fields and blocking consequences. Standardization evidence, not a measured adoption date. https://www.rfc-editor.org/rfc/rfc2505.html |
| Windows firewall | Microsoft's 2004 partner presentation explicitly connects on-by-default XP SP2 firewall to stopping Blaster/Sasser. API reference does not substantiate default state. https://news.microsoft.com/speeches/will-poole-microsoft-worldwide-partner-conference-2004/ |
| SHA-1 certificates | Mozilla's February 2017 account says rollout began before the practical collision announcement, with less than 0.1% of traffic still affected. Do not claim SHAttered initiated retirement. https://blog.mozilla.org/security/2017/02/23/the-end-of-sha-1-on-the-public-web/ |
| Flash | Adobe distinguishes 2020 support end from January 12, 2021 execution block; standardization and platform changes also mattered. https://www.adobe.com/support/flashplayer/ |
| Internet macros | Microsoft's deployment document explicitly connects VBA malware/ransomware to changed defaults. Windows origin marks, trusted locations and rollout channels matter. https://learn.microsoft.com/en-us/microsoft-365-apps/security/internet-macros-blocked |
| USB AutoRun | Microsoft's April 2009 explanation connects removable-media abuse and Conficker to Windows 7 default changes. Optical media exceptions matter. https://www.microsoft.com/en-us/msrc/blog/2009/04/autorun-changes-in-windows-7/ |
| SSH | Creator's company history connects SSH in 1995 to password sniffing. OpenSSH history documents 1999 distribution. https://www.ssh.com/academy/ssh https://www.openssh.org/history.html |
| DES | EFF's original cracker record documents practical 56-bit key search in 1998. Need NIST withdrawal/replacement evidence, not merely the demonstration. https://w2.eff.org/Privacy/Crypto/Crypto_misc/DESCracker/ |
| HTTP warnings | Google's February 2018 announcement specifies Chrome 68 warnings for all HTTP pages, with deployment measurements. Warning is not blocking. https://security.googleblog.com/2018/02/a-secure-web-is-here-to-stay.html |
| NPAPI | Chromium identifies security, stability and complexity costs in 2013, then schedules final removal for September 2015. https://blog.chromium.org/2013/09/saying-goodbye-to-our-old-friend-npapi.html https://blog.chromium.org/2014/11/the-final-countdown-for-npapi.html |
| S3 public access | AWS records April 2023 enablement of Block Public Access and disabled ACLs for new buckets. Existing buckets were not automatically rewritten. https://aws.amazon.com/about-aws/whats-new/2023/04/amazon-s3-two-security-best-practices-buckets-default/ |
| MFA enrollment | Google reports enrolling 150 million people in 2021 and fewer account compromises in February 2022. Vendor population, not global adoption. https://blog.google/innovation-and-ai/technology/safety-security/safer-internet-day-2022/ |
| Internet-wide scanning | ZMap's 2013 research reports a single-port public IPv4 scan in under 45 minutes. This supports scale, not attribution of all later mass exploitation to ZMap. https://www.usenix.org/conference/usenixsecurity13/technical-sessions/paper/durumeric |
