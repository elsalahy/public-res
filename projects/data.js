/* ============================================================================
 * Projects data — THIS IS THE FILE YOU EDIT TO ADD PROJECTS.
 *
 * The projects page is a free-form showcase (side projects, degree projects,
 * anything) — it is NOT tied to the career timeline. Each project is one object
 * in the window.PROJECTS array below.
 *
 * To add a project: copy an existing object, give it a UNIQUE `id`, fill the
 * fields, and drop optimized photos in  img/<id>/ .
 * See CLAUDE.md → "Projects page" for the full add-project / add-photo / video
 * recipe.
 *
 * FIELD REFERENCE
 *   id          unique slug (also the image folder name and #anchor)
 *   title       project name
 *   category    short label shown as a badge, e.g. "Side project",
 *               "Graduation project", "Hackathon" (optional)
 *   dateLabel   free-text date / context, e.g. "2014 · ITI" (optional)
 *   tags        array of keyword chips (optional)
 *   blurb       one-line teaser shown on the card
 *   description longer text shown in the detail popup
 *   highlights  array of bullet points shown in the detail popup (optional)
 *   links       array of { label, url } external links (optional)
 *   video       a YouTube or Vimeo URL — embeds a click-to-play player in the
 *               detail popup. Any other URL becomes a "Watch video" button.
 *               Leave "" for no video. (optional)
 *   images      array of { thumb, full, alt }. The FIRST image is the card
 *               cover. Use the placeholder below until you have real photos.
 * ==========================================================================*/

var PLACEHOLDER = { thumb: "img/_placeholder/photo.svg", full: "img/_placeholder/photo.svg", alt: "Photo coming soon" };

window.PROJECTS = [

  {
    id: "wall-e-autonomous-vehicle",
    title: "Autonomous Vehicle Concept “WALL-E”",
    category: "Graduation project",
    dateLabel: "2014 · ITI",
    tags: ["SLAM", "OpenCV", "Robotics", "BeagleBone Black", "PWM", "UART", "Ultrasonic"],
    blurb: "A self-driving robot car combining computer vision, robotics and sensor fusion.",
    description: "My ITI graduation project: a fully autonomous vehicle concept that brings together AI, robotics, image processing, communication protocols and module integration. It uses SLAM for mapping and localisation, OpenCV for vision, and a BeagleBone Black coordinating servo motors and ultrasonic sensors over PWM and UART.",
    highlights: [
      "Implemented SLAM for mapping and self-localisation",
      "Real-time obstacle detection with OpenCV and ultrasonic sensors",
      "Motor control via PWM and module integration over UART"
    ],
    links: [
      // { label: "GitHub", url: "https://github.com/your/repo" }
    ],
    video: "",   // e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX"  (embeds a player)
    images: [
      Object.assign({}, PLACEHOLDER, { alt: "Placeholder — add a photo of the WALL-E robot car" }),
      Object.assign({}, PLACEHOLDER, { alt: "Placeholder — add another WALL-E photo" })
    ]
  }

  /* ----------------------------------------------------------------------
   * TEMPLATE — copy this block (uncomment it), give it a unique id, and fill
   * it in to add another project. Shows every field, including a video.
   * ----------------------------------------------------------------------
  ,{
    id: "my-next-project",
    title: "My Next Project",
    category: "Side project",
    dateLabel: "2025",
    tags: ["C++", "ESP32", "BLE"],
    blurb: "One-line teaser shown on the project card.",
    description: "A longer description shown when the card is opened.",
    highlights: [
      "Something I built or learned",
      "Another highlight"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/your/repo" },
      { label: "Write-up", url: "https://example.com/post" }
    ],
    video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    images: [
      { thumb: "img/my-next-project/01-thumb.jpg", full: "img/my-next-project/01.jpg", alt: "Describe the photo" }
    ]
  }
  */

];
