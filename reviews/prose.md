# Independent prose review

Reviewed all 46 candidate titles and public summaries in `data/events.json`, including the later additions on PC antivirus and internet-wide scanning. The 43 suggestions in [prose-edits.json](prose-edits.json) are keyed by event ID. Keep the existing open-relay, SSL 3.0 and Flash entries. Their openings already make the old practice easy to picture, and each next sentence adds something the title didn't tell us.

The strongest entries put a reader back in front of a computer: a Word document sends itself to an address book, a PC boots from a floppy, a mail client keeps asking for an account password, or Chrome calls attention to a page that used to open without comment. Start there when the record has that kind of detail. For changes that happen out of sight, such as DNS forgery or certificate logging, use one visible consequence. “The address in your browser still looked right” does more work than an abstract claim about trust.

The repetition is mostly structural. Many entries explain the mechanism, announce a date, and end with a near-identical caveat about limited scope. The proposed edits put the real limit inside the claim where it matters (Chrome, personal Gmail, new buckets, selected EC2 launches). Leave the longer qualifications in the evidence details; retain a short final sentence when the exception affects what readers actually saw, such as AutoRun surviving on CDs. The edits preserve distinctions between a proposal, recommendation, vendor rollout and documented enforcement. The separate factual review should have final say where a claim or timeline changes.

Use the shortest name that identifies the change, and let acronyms appear where a reader needs them. “Outlook put some attachments out of reach” makes a specific promise that the text can explain. Labels such as “Windows makes elevation visible” ask readers to decode the terminology before they know why they should care. Dates belong in the date label unless their sequence makes a difference to the story.

## Suggested introduction

**We used to trust that.**

You could borrow a floppy disk and boot a PC from it. Years later, opening an invoice might mean clicking “Enable Content.” This is a history of things we did at the computer without giving them much thought, and how software changed once the risks became clear.

## Suggested era introductions

Use the breaks that fit the actual display. These are editorial groupings, not dates when one practice disappeared everywhere.

- **1980s and 1990s:** A floppy disk could carry a virus from one PC to the next. On the early internet, a mail server might forward messages for strangers, and a remote login could expose a password to anyone listening on the network.
- **2000–2009:** A Word attachment could mail copies of itself, and a worm could find a Windows PC before anyone had turned on its firewall. Microsoft began putting out security bulletins on a schedule, while browsers started putting limits on what a web page could reach.
- **2010–2019:** Installing a plug-in was once a normal part of visiting a site. As Flash and Java applets lost their place in the browser, HTTPS went from something you checked for at the checkout to something Chrome called out when it was missing.
- **2020–2026:** A phone could take back access from an app you no longer used, and signing in could mean using the same screen lock that opened your device. Changes reached behind the screen, too: package registries tightened publishing credentials, and new cloud storage buckets became harder to expose by accident.
