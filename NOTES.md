# Content Notes — What's Real vs. Placeholder

This file tracks exactly what needs to be swapped out before the site goes live with real
content. All 5 build phases are complete — this is the full picture.

## ✅ Real content already in use (from the agent, safe as-is)

Stored in [`src/data/agent.json`](src/data/agent.json):
- Business/page name: Smart Property Guide
- Agent name: Carolyn Mendoza
- Title: Assistant Vice President of Sales, Vista Land International Premier
- Tagline: "Your Trusted Partner in Smart Real Estate Decisions"
- Phone: 0927 918 0332
- Email: carolynmendoza.brittany@gmail.com
- WhatsApp link (built from phone number): https://wa.me/639279180332
- Instagram handle: @yourrealtor.carolyn

## ⚠️ Placeholder fields that still need real info

All in [`src/data/agent.json`](src/data/agent.json) — editable directly through the CMS under
**Site Profile & Settings** (see AGENT-GUIDE.md Section 2), no code changes needed:

| Field | Current placeholder | What's needed |
|---|---|---|
| `serviceAreas` | Metro Manila, Cavite, Laguna, Quezon City | Confirm/adjust to areas she actually serves |
| `profileImage` / `coverImage` | Empty — site falls back to an icon placeholder / stock photos | Her real headshot + a cover photo, uploaded via the CMS |
| `yearsExperienceDisplay` | "X+ Years in Real Estate (placeholder)" | Her actual years of experience |
| `bioParagraphs` | 3 AI-generated placeholder paragraphs (About page "Her Story" section) | Her real background/story — see note below |
| `specialties` | Pre-Selling House & Lot, Condo/High-Rise, Rent-to-Own Guidance, First-Time Buyer Support | Confirm these match what she actually focuses on |

**PRC license number**: removed from the site entirely for now (was showing an obviously fake
placeholder number on the live About page and homepage) — add it back once she has a real
number to disclose, in both `src/pages/about.astro` (`credentials` array) and
`src/pages/index.astro` (`valueProps` array), plus re-add the `prcLicenseDisplay` field to
`agent.json` and `public/admin/config.yml`.

**`messengerUrl`**: confirmed real — `https://m.me/SmartPropertyGuidee`.

**About page bio**: `agent.bioParagraphs` in `agent.json` is entirely AI-generated placeholder
text (flagged `bioIsPlaceholder: true`). It does not reflect her actual career history — replace
it with her real story before launch. The About page also shows a small on-page disclaimer next
to the bio as a safety net in case this gets missed.

## 🏗️ Sample "Featured Developments" — 100% fictional, for layout/demo only

Stored as individual files in [`src/content/projects/`](src/content/projects/) (one Markdown
file per development — this is what Carolyn edits through the CMS). **None of these are real
project names, prices, or locations** — they're generic stand-ins inspired by the *types* of
developments she sells (CrownAsia-style house-and-lot, Vista Residences-style condo), created
specifically so as not to reuse real developer names, copy, or photos without a license:

1. **Emerald Grove Estates** — House & Lot, Cavite (placeholder)
2. **Maple Hills Community** — House & Lot, Laguna (placeholder)
3. **Willow Park Residences** — House & Lot, Cavite (placeholder, includes rent-to-own sample)
4. **Metro Skyline Residences** — Condominium, Mandaluyong (placeholder, includes rent-to-own sample)
5. **Riverside Heights Taft** — Condominium, Manila/Taft (placeholder, includes rent-to-own sample)
6. **Northview Pine Residences** — Condominium, Quezon City (placeholder, shown as "Sold Out" to demo that state)

Every entry has `isSample: true` in its frontmatter so it's programmatically identifiable, and
the Projects/Blog listing pages both show an on-page notice that sample content is present.

**Images**: all project + blog cover photos are real stock photographs from
[Unsplash](https://unsplash.com) (free under the
[Unsplash License](https://unsplash.com/license) — free for commercial use, no permission or
attribution required, though credited below anyway for traceability). None of these show an
actual CrownAsia/Vista Land property — they're generic "this is the kind of home/condo this
would be" stand-ins. Every project/blog card and detail page also shows a small "Sample Photo"
tag directly on the image itself so visitors can't mistake it for a real listing photo.

**Do not replace these with scraped or downloaded CrownAsia/Vista Land marketing photos** —
those are copyrighted to the developers. Replace with photos Carolyn is actually
licensed/authorized to publish (developer press kits she has access to, or her own site-visit
photos) — she can upload replacements herself through the CMS (see AGENT-GUIDE.md), which will
also remove the "Sample Photo" tag automatically (it's tied to the placeholder frontmatter, not
hardcoded).

| File | Unsplash photo ID |
|---|---|
| `public/images/site/hero-villa.jpg` | photo-1580587771525-78b9dba3b914 |
| `public/images/site/about-arches.jpg` | photo-1524230572899-a752b3835840 |
| `public/images/projects/emerald-grove-estates.jpg` | photo-1600596542815-ffad4c1539a9 |
| `public/images/projects/maple-hills-community.jpg` | photo-1600585154340-be6161a56a0c |
| `public/images/projects/willow-park-residences.jpg` | photo-1523217582562-09d0def993a6 |
| `public/images/projects/metro-skyline-residences.jpg` | photo-1486406146926-c627a92ad1ab |
| `public/images/projects/riverside-heights-taft.jpg` | photo-1545324418-cc1a3fa10c00 |
| `public/images/projects/northview-pine-residences.jpg` | photo-1600210492486-724fe5c67fb0 |
| `public/images/blog/payment-options-guide.jpg` | photo-1560518883-ce09059eeffa |
| `public/images/blog/first-time-buyer-questions.jpg` | photo-1450101499163-c8848c66ca85 |

Before going live, either replace each entry with real project details via the CMS, or delete
the sample entries once real ones are added.

## 👤 Site Profile & Settings is now CMS-editable

`src/data/agent.json` (name, title, bio, contact links, service areas, specialties, and two new
image fields: `profileImage` and `coverImage`) is wired into Decap CMS as a "files" collection
called **Site Profile & Settings**. Both image fields default to an empty string, in which case
the site falls back to a placeholder: an abstract profile icon (About page) and the stock hero
photo (`hero-villa.jpg`) / arches photo (`about-arches.jpg`) for the cover. Once Carolyn or her
team uploads real photos through the CMS, they automatically replace the placeholders
everywhere they're used (homepage hero background, About page cover + circular profile photo,
small avatar in the site header) — no code changes needed.

The About page is now styled like a Facebook profile: a wide cover photo band with a circular
profile picture overlapping the seam, name/title/bio centered below.

## 🎨 Design direction

Redesigned toward a "luxury real estate" feel per request: deep charcoal/near-black +
muted gold palette (replacing the earlier warm teal/terracotta look), Playfair Display serif
for headings paired with Inter for body text, sharp-cornered buttons with uppercase
letter-spaced labels, and a full-bleed photographic hero. Theme tokens live in
[`src/styles/global.css`](src/styles/global.css) (`primary-*` = charcoal shades, `accent-*` =
gold shades) — change values there to retheme the whole site at once.

## 📰 Sample blog posts — general advice, not proprietary

Stored in [`src/content/blog/`](src/content/blog/), both flagged `isSample: true`:
1. **"Spot Cash, Bank Financing, or Rent-to-Own"** — general PH payment-option explainer
2. **"5 Questions to Ask Before Reserving a Pre-Selling Unit"** — general PH buyer-advice piece

Both are original writing (not copied from any developer or third party), safe to leave live as
evergreen content, or replace/supplement with Carolyn's own posts over time.

## 📬 Contact form

The `/contact` page form is wired for **Netlify Forms** (see [DEPLOYMENT.md](DEPLOYMENT.md)) —
it will only actually submit somewhere once deployed to Netlify; that's expected while testing
locally, not a bug. No separate form-service account (e.g. Formspree) is needed since Netlify
Forms is free and built into the hosting we're already using.

## 🖥️ Content management (Decap CMS)

`/admin` on the deployed site gives Carolyn a no-code dashboard to manage both **Featured
Developments** and **Blog Posts** — see [AGENT-GUIDE.md](AGENT-GUIDE.md) for her instructions,
and [DEPLOYMENT.md](DEPLOYMENT.md) for the one-time Netlify Identity/Git Gateway setup needed
before her login works. This was tested locally end-to-end using `decap-server` (a local
git-backed proxy) — confirmed that editing a field through the CMS UI writes directly to the
correct Markdown file.

## ✅ Done — all 5 phases + CMS

- Phase 1: project scaffold + homepage
- Phase 2: Featured Developments listing (with filters) + individual project detail pages
- Phase 3: About / agent profile page (bio, credentials, specialties, service areas)
- Phase 4: Contact page with Netlify Forms lead capture + direct Messenger/WhatsApp/email/call links
- Phase 5: Blog listing + post pages (Astro content collections)
- Decap CMS wired up for both Projects and Blog, with local-backend testing verified
- `AGENT-GUIDE.md` (non-technical, for Carolyn) and `DEPLOYMENT.md` (technical, for Kenneth) written

## 💸 Cost check-in

Nothing built requires a paid plan:
- Astro, Tailwind, Decap CMS — free, open source
- Netlify free tier: hosting, Identity (≤1,000 users), Git Gateway, Forms (≤100 submissions/mo) — all free
- Google Fonts (Inter, Playfair Display) — free, loaded via CDN link, no account needed
- Unsplash stock photos — free under the Unsplash License, no account needed

The only future cost is the domain name itself (a separate purchase, whenever ready) — hosting
it on Netlify afterward remains free. Nothing has been deployed yet; everything has been built
and tested locally only, including a working local test of the CMS's read/write pipeline.
