# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

A single-page personal resume/CV website for Ahmed Elsalahy (Embedded Systems
Engineer). It is a static site deployed via **GitHub Pages** at the custom
domain in `CNAME` (`www.ahmedelsalahy.com`).

Files:
- `index.html` — the entire resume page. Markup **and** CSS live inline in this
  one file (the `<style>` block is in `<head>`). There is no build step, no
  framework, and no JavaScript bundler.
- `photo.png` — profile photo referenced by `index.html`.
- `timeline/` — a SECOND page: a visual career timeline served at
  `www.ahmedelsalahy.com/timeline/`. See the "Career timeline" section below.
- `projects/` — a THIRD page: a free-form projects showcase served at
  `www.ahmedelsalahy.com/projects/`. See the "Projects page" section below.
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

## Career timeline (`/timeline/`)

A second, standalone page that tells Ahmed's career story as a vertical timeline
of milestones (academia → IoT → automotive → quantum), each expandable to show
details, achievements, and a photo gallery with a lightbox. The resume links to
it via the orange "View my career journey" button after `.main-summary`.

It is the same kind of static site (push = deploy). Structure:
- `timeline/index.html` — the page shell, all CSS, and all JS (render +
  lightbox). You rarely need to touch this — only for styling or a new domain.
- `timeline/data.js` — **THE EDIT SURFACE.** A `window.TIMELINE` array of
  milestone objects. Adding/changing a milestone = editing this file. The page
  renders newest-first by each object's numeric `sortKey` (higher = newer/top).
- `timeline/img/<milestone-id>/` — optimized photos for that milestone.
- `timeline/img/_placeholder/photo.svg` — neutral placeholder shown until real
  photos are added (referenced via the `PLACEHOLDER` var in `data.js`).

Paths are all **relative** (no leading `/`): the resume links down with
`href="timeline/"`, and the timeline links back with `href="../"`.

### Recipe: add or edit a milestone
1. Open `timeline/data.js`. Copy an existing object in `window.TIMELINE`.
2. Give it a **unique** `id` (lowercase-hyphen slug; also used as the image
   folder name and the `#anchor`).
3. Set `title`, optional `org`, `dateLabel` (free text), and `sortKey` (a number;
   make it higher than its neighbours to place it nearer the top).
4. Set `domain` to **exactly one of**: `academia | iot | automotive | quantum`
   (controls the accent color + chip; an unknown value logs a console warning).
5. Write `blurb` (one line, always visible), `description`, and the
   `achievements` array (bullets shown when expanded).
6. Add photos (recipe below) or leave `images` pointing at the placeholder.
7. Commit + push to `origin/master`.

To add a brand-new domain/color, add a `.tl-item[data-domain="x"]` rule (accent
+ tint) and a legend entry in `timeline/index.html`, then use that domain string.

### Recipe: add photos to a milestone
1. **Optimize first — this is mandatory.** Never commit raw phone/HEIC files;
   they bloat git history permanently. Convert HEIC→JPEG, then resize to two
   sizes per photo:
   - thumbnail `NN-thumb.jpg` (~320px long edge, target < 40 KB)
   - full `NN.jpg` (~1600px long edge, target < 250 KB)
   (`NN` = zero-padded order: `01`, `02`, …). On a Mac, `sips` works, e.g.
   `sips -Z 1600 -s format jpeg -s formatOptions 80 in.heic --out 01.jpg`.
2. Put them in `timeline/img/<milestone-id>/` (matching the milestone `id`).
3. In that milestone's `images` array, add one entry per photo:
   `{ thumb: "img/<id>/01-thumb.jpg", full: "img/<id>/01.jpg", alt: "..." }`.
   **`alt` is required** — describe the photo (missing alt logs a warning).
4. Commit the images **and** the `data.js` edit together; push.

### Featured photo
The **first non-placeholder image** in a milestone's `images` array is shown as
a "featured" hero thumbnail on the collapsed card, with a photo-count badge and a
"See N photos" cue that invites expansion. So order each milestone's `images`
with the most eye-catching shot first. Milestones that still use the placeholder
show no hero (the card just says "See details") — keeping the timeline clean
until real photos are added.

### Gotchas
- Relative paths only; back-link is `../`.
- Keep every `id` unique (used for the anchor and the image folder).
- Images must be pre-optimized before commit.

## Projects page (`/projects/`)

A third, standalone page: a free-form **projects showcase** — side projects,
degree projects, experiments — independent of the timeline (a project does NOT
belong to a milestone). It's a responsive grid of project cards; clicking a card
opens a detail popup with the description, an optional embedded video, external
links, and a photo gallery (with the same lightbox as the timeline). Linked from
the résumé's "Browse my projects" button and from the timeline's top nav.

Same static, push-to-deploy model. Structure mirrors the timeline:
- `projects/index.html` — page shell, all CSS + JS (grid, detail popup, video
  embed, lightbox). Rarely needs editing.
- `projects/data.js` — **THE EDIT SURFACE.** A `window.PROJECTS` array. The file
  header documents every field; it also contains a commented-out TEMPLATE block
  to copy. Cards render in array order (no sortKey — reorder by moving objects).
- `projects/img/<project-id>/` — optimized photos for that project.
- `projects/img/_placeholder/photo.svg` — placeholder cover until real photos.

### Recipe: add a project
1. Open `projects/data.js`. Copy the commented TEMPLATE block (or an existing
   object) into `window.PROJECTS`.
2. Give it a **unique** `id` (slug; also the image folder name and `#anchor`).
3. Fill `title`, optional `category` (badge) and `dateLabel`, `tags` (chips),
   `blurb` (card teaser), `description`, optional `highlights` and `links`.
4. Add photos (recipe below) — **the first image is the card cover.**
5. Commit + push.

### Recipe: add a video
Set the project's `video` to a **YouTube or Vimeo URL** (any common form, e.g.
`https://youtu.be/ID`, `https://www.youtube.com/watch?v=ID`, `https://vimeo.com/ID`).
It renders a click-to-play embedded player in the detail popup (privacy-friendly:
nothing loads from the video host until the viewer clicks Play). Any other URL
becomes a simple "Watch video" button instead. Leave `""` for no video.

### Recipe: add photos to a project
Same as the timeline: optimize first (thumb ~320px `NN-thumb.jpg` < 40 KB, full
~1500px `NN.jpg` < 250 KB, JPEG; convert HEIC→JPEG; e.g.
`sips -Z 1500 -s format jpeg -s formatOptions 80 in.jpg --out 01.jpg` and rotate
sideways shots with `sips -r 90`). Put them in `projects/img/<project-id>/` and
add `{ thumb, full, alt }` entries to that project's `images` (first = cover).
`alt` is required.
