# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

A single-page personal resume/CV website for Ahmed Elsalahy (Embedded Systems
Engineer). It is a static site deployed via **GitHub Pages** at the custom
domain in `CNAME` (`www.ahmedelsalahy.com`).

Files:
- `index.html` — the entire site. Markup **and** CSS live inline in this one
  file (the `<style>` block is in `<head>`). There is no build step, no
  framework, and no JavaScript bundler.
- `photo.png` — profile photo referenced by `index.html`.
- `CNAME` — custom domain for GitHub Pages. Do not change unless asked.
- `README.md` — short project description.

## Deploying = pushing

There is no build or deploy command. Committing and pushing to `origin/master`
publishes the site — GitHub Pages serves `index.html` from `master`
automatically. Changes are typically live within a minute or two.

## Remote-update workflow (vacation mode)

The owner is away and will request edits remotely. When asked to make a change:

1. Make the edit in `index.html` (or the relevant file).
2. Verify the HTML is still well-formed — match the surrounding indentation and
   inline-CSS style. Keep the change scoped; don't reformat unrelated markup.
3. Commit with a clear message describing the change.
4. **Push to `origin/master`** — this is the deploy step, so always push unless
   told otherwise. The repo's remote is `git@github.com:elsalahy/public-res.git`.
5. Report the commit hash and confirm the push succeeded.

Because each push goes live on the public site immediately, double-check
user-facing text (name, title, dates, contact info, employer names) before
pushing.

## Editing the resume content

`index.html` is organized into `<section>` blocks. Key landmarks:
- Header / name / title / contact links — around the top of `<body>`.
- `Skills` section — `<section id="skills">`, a list of `.item` blocks.
- `Work Experience` — `<section id="work">`, `.work-item` blocks. The heading
  carries a `(N)` count span — keep it in sync if you add/remove a job.
- Education and other sections follow the same `.section` / `.item` pattern.

When adding an entry, copy an existing sibling block as a template so the
styling stays consistent.

## Edit recipes

Concrete examples for the most common requests. Always finish with a commit +
push to `origin/master`.

### Update contact info
The contact block is `<div id="contact">`. Each row has a Font Awesome icon
`<span>` plus an `<a>`. Edit both the visible link text and the `href`:
- Email: `<a href="mailto:...">...</a>` in `.email`.
- Phone: `<a href="tel:...">...</a>` in `.phone` (keep `tel:` href and display
  text in sync).
- Website: the `<a href>` in `.website`.

### Add a job
1. In `<section id="work">`, copy a whole existing `<section class="work-item">`
   block as a template.
2. Bump its `<input id="work-item-N">` and matching `<label for="work-item-N">`
   to the next unused number so the collapse toggle keeps working.
3. Fill in `.position`, `.company`, `.startDate`, `.endDate`, the optional
   `.website` link, the `.summary` paragraph, and the `.highlights` `<li>` items.
4. Increment the `(N)` count in the `Work Experience` section title.
5. Newest job goes first (top of the section).

### Update the current job's end date
Find the relevant `.work-item` and edit its `<span class="endDate">`. The
current role uses `- Current`.

### Add or edit a skill
In `<section id="skills">`, copy an existing `.item` block and edit its
`<h3 class="name">` and the listed keywords.

### Edit the summary / title
- Job title under the name: `<h2 class="label">`.
- Intro paragraph: the `.main-summary` section near the top of `<body>`.
