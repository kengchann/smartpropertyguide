# Deployment Checklist (for Kenneth)

Technical, one-time setup steps to get this site live on Netlify's free tier, with the contact
form and Decap CMS both working. Carolyn does not need to do any of this — see
[AGENT-GUIDE.md](AGENT-GUIDE.md) for her side.

## 1. Push the repo to GitHub

```bash
git add -A
git commit -m "Initial site"
```

Create an empty repo on GitHub (no README/license), then:

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

Netlify deploys from a git repo, so this has to happen first.

## 2. Create the Netlify site

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing
   project** → connect GitHub → select this repo.
2. Build settings should auto-detect from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy. You'll get a free `random-name-1234.netlify.app` URL — rename it under **Site
   settings → General → Site details → Change site name** to something like
   `smart-property-guide.netlify.app`.

This step alone is free — no credit card required for the free tier.

## 3. Enable Netlify Identity (for CMS login)

1. In the site dashboard: **Site configuration → Identity → Enable Identity**.
2. Under **Registration preferences**, set to **Invite only** (so random people can't sign
   themselves up as CMS editors).
3. Under **Identity → Services → Git Gateway**, click **Enable Git Gateway**. This lets the
   CMS commit changes to the repo on Carolyn's behalf without her needing a GitHub account or
   git knowledge.

## 4. Invite Carolyn as a CMS user

1. **Identity → Invite users** → enter her email
   (`carolynmendoza.brittany@gmail.com`) → send invite.
2. She'll get an email to set her password — that's the login flow described in
   [AGENT-GUIDE.md](AGENT-GUIDE.md) Section 1.
3. Once she's logged in once, `/admin` on the live site is her permanent dashboard.

## 5. Confirm Netlify Forms picked up the contact form

Netlify scans the deployed HTML for `<form data-netlify="true">` at build time — no extra
config needed. After the first deploy, check **Site configuration → Forms** in the dashboard;
you should see a `contact-inquiry` form listed. Submit a real test through the live `/contact`
page to confirm it appears under **Forms → contact-inquiry submissions**, and consider turning
on an email notification there (Forms → Settings → add a notification) so Carolyn/you get
pinged per submission.

Free tier includes 100 form submissions/month — plenty for this site's expected volume. If it's
ever exceeded, Netlify just stops accepting new submissions until the next month rather than
charging automatically, so no surprise costs.

## 6. When the domain is ready

**Site configuration → Domain management → Add a domain**, then update the DNS records at
whatever registrar the domain is bought from (Netlify shows exact values to enter). Domain
registration itself costs money (that's on you, separate from hosting) but attaching it to
Netlify hosting is free.

## Cost summary

| Item | Cost |
|---|---|
| Netlify hosting (this site's traffic level) | Free |
| Netlify Identity (up to 1,000 users) | Free |
| Netlify Forms (up to 100 submissions/month) | Free |
| Git Gateway | Free |
| Domain name | Paid — separate purchase, whenever you're ready |

Nothing here auto-upgrades to a paid plan; Netlify's free tier just stops/limits usage rather
than billing you if a limit is hit.
