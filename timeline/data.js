/* ============================================================================
 * Career timeline data — THIS IS THE FILE YOU EDIT TO ADD MILESTONES.
 *
 * Each milestone is one object in the window.TIMELINE array below.
 * To add one: copy an existing object, give it a UNIQUE `id`, fill the fields,
 * set `sortKey` (higher = newer = shown higher on the page), and pick a `domain`
 * (must be exactly one of: academia | iot | automotive | quantum).
 *
 * Photos: put optimized images in  img/<id>/  and list them in `images`.
 * Until you have real photos, point them at the shared placeholder (see below).
 * See CLAUDE.md → "Career timeline" for the full add-milestone / add-photo recipe.
 * ==========================================================================*/

/* Shared placeholder used until real photos are added. */
var PLACEHOLDER = { thumb: "img/_placeholder/photo.svg", full: "img/_placeholder/photo.svg", alt: "Photo coming soon" };

window.TIMELINE = [

  {
    id: "qbird",
    title: "Embedded Software Team Lead",
    org: "Q*Bird",
    dateLabel: "Mar 2023 – Present",
    sortKey: 2023.2,               // newest chapter — keep this the highest
    domain: "quantum",
    blurb: "Leading embedded software at a quantum technology company in Delft.",
    description: "At Q*Bird (Delft, Netherlands) I work on embedded software for quantum-secure communication. I joined as a Senior Embedded Software Engineer in March 2023 and stepped up to Embedded Software Team Lead in September 2023. More detail on the achievements coming soon.",
    achievements: [
      "Senior Embedded Software Engineer — Mar 2023 to Sep 2023",
      "Embedded Software Team Lead — Sep 2023 to present"
    ],
    images: [
      Object.assign({}, PLACEHOLDER, { alt: "Placeholder — add a photo from your Q*Bird work" })
    ]
  },

  {
    id: "lightyear",
    title: "Embedded Systems Engineer",
    org: "Lightyear",
    dateLabel: "Dec 2021 – Mar 2023",
    sortKey: 2021.92,
    domain: "automotive",
    blurb: "Reigniting clean mobility — firmware for the inverter of the first solar-powered electric car.",
    description: "On the Drivetrain (inverter) team at Lightyear, building reliable, safety-critical CAN communication and diagnostics for a long-range, energy-efficient solar electric vehicle.",
    achievements: [
      "Built reliable CAN communication between the inverter and other sub-systems",
      "Implemented AUTOSAR functional-safety requirements over CAN",
      "Integrated the Catch2 (v3) unit-testing framework to raise inverter software quality",
      "Added CAN driver support for statically allocated FIFO queues and ISO 11898 interfaces",
      "Integrated UDS (ISO 14229) and CAN-TP (ISO 15765) diagnostics stacks",
      "Implemented diagnostics services (RDID, WDID, Routine Control) and AES secure access",
      "Implemented inverter firmware updates over CAN and supported Telematics with OTA updates"
    ],
    images: [
      { thumb: "img/lightyear/01-thumb.jpg", full: "img/lightyear/01.jpg", alt: "Ahmed's journey at Lightyear" },
      { thumb: "img/lightyear/02-thumb.jpg", full: "img/lightyear/02.jpg", alt: "Ahmed's journey at Lightyear" },
      { thumb: "img/lightyear/03-thumb.jpg", full: "img/lightyear/03.jpg", alt: "Ahmed's journey at Lightyear" },
      { thumb: "img/lightyear/04-thumb.jpg", full: "img/lightyear/04.jpg", alt: "Ahmed's journey at Lightyear" },
      { thumb: "img/lightyear/05-thumb.jpg", full: "img/lightyear/05.jpg", alt: "Ahmed's journey at Lightyear" },
      { thumb: "img/lightyear/06-thumb.jpg", full: "img/lightyear/06.jpg", alt: "Ahmed's journey at Lightyear" }
    ]
  },

  {
    id: "ttn-generic-node",
    title: "Lead Embedded Systems Engineer",
    org: "The Things Network",
    dateLabel: "Jan 2019 – Nov 2021",
    sortKey: 2019.0,
    domain: "iot",
    blurb: "Open-source LoRaWAN firmware at one of the most innovative companies in IoT.",
    description: "Led firmware for the Generic Node — an open-source, low-power LoRaWAN reference device — built in close collaboration with ARM, Semtech, Microchip and STMicroelectronics.",
    achievements: [
      "Built reference-design low-power LoRaWAN devices (Generic Node) with ARM, Semtech, Microchip & ST",
      "Integrated Microchip ATECC608A secure elements into multiple LoRaWAN stacks",
      "Designed firmware-update-over-the-air (bootloader + update client) for Microchip SAMR34 and ST STM32WL",
      "Wrote OS and bare-metal sensor drivers (qtouch, accelerometer, temperature, humidity, time-of-flight)",
      "Ported the board support package across Mbed OS, Azure RTOS (ThreadX) and FreeRTOS"
    ],
    images: [
      Object.assign({}, PLACEHOLDER, { alt: "Placeholder — add a photo of the Generic Node / TTN work" })
    ]
  },

  {
    id: "msc-turku",
    title: "MSc, Embedded Computing",
    org: "University of Turku (UTU), Finland",
    dateLabel: "2018 – 2019",
    sortKey: 2018.6,
    domain: "academia",
    blurb: "Second half of the EIT Digital double-degree master's.",
    description: "The University of Turku half of a two-university double-degree master's in embedded systems. Add your favourite courses, the thesis topic, and project work here.",
    achievements: [
      "Graduated with grade 3.53",
      "TODO: thesis topic / standout project"
    ],
    images: [
      Object.assign({}, PLACEHOLDER, { alt: "Placeholder — add a photo from Turku" })
    ]
  },

  {
    id: "msc-tu-berlin",
    title: "MSc, Embedded Systems (ICT Innovation)",
    org: "Technical University of Berlin (TUB), Germany",
    dateLabel: "2017 – 2018",
    sortKey: 2017.6,
    domain: "academia",
    blurb: "First half of the EIT Digital double-degree master's.",
    description: "The TU Berlin half of the double-degree master's. Add the courses, projects, and any TUB/EIT Digital highlights here.",
    achievements: [
      "Graduated with grade 2.72",
      "TODO: standout project / coursework"
    ],
    images: [
      Object.assign({}, PLACEHOLDER, { alt: "Placeholder — add a photo from TU Berlin" })
    ]
  },

  {
    id: "valeo",
    title: "Embedded Systems Engineer",
    org: "Valeo",
    dateLabel: "Jun 2015 – Aug 2017",
    sortKey: 2015.5,
    domain: "automotive",
    blurb: "Started my professional career at one of the best automotive suppliers.",
    description: "Early-career automotive embedded work: validating ADAS sensors for production cars and building hardware-in-the-loop test benches for driving-assistance products.",
    achievements: [
      "Requirements validation of Valeo radar sensors in Geely and Volvo production cars",
      "Hardware-in-the-loop (HIL) test-bench firmware for Valeo driving-assistance products",
      "Worked with GM, Audi and Daimler on HIL test-bench firmware",
      "Performance optimization for CAN, FlexRay, SPI and Ethernet drivers",
      "Developed quad-core-compatible firmware (~30% performance gain)"
    ],
    images: [
      Object.assign({}, PLACEHOLDER, { alt: "Placeholder — add a photo from your Valeo work" })
    ]
  },

  {
    id: "foundations",
    title: "Foundations — early projects",
    org: "ITI & B.Sc., Egypt",
    dateLabel: "2013 – 2015",
    sortKey: 2014.0,
    domain: "academia",
    blurb: "Where it started: robotics, hackathons and a graduation CNC build.",
    description: "The student projects that set the direction: an autonomous-vehicle concept, a wireless hackathon build, and a Raspberry-Pi-controlled CNC machine.",
    achievements: [
      "Autonomous Vehicle Concept 'WALL-E' (ITI graduation) — SLAM, OpenCV, BeagleBone Black",
      "WIMS 'Ayn Ashya'y' (Cairo Maker Hackathon) — low-cost wireless item-reminder tags",
      "Raspberry-Pi-controlled CNC machine (B.Sc. graduation) — replaced the USB interface to cut production cost"
    ],
    images: [
      Object.assign({}, PLACEHOLDER, { alt: "Placeholder — add a photo from your early projects" })
    ]
  }

];
