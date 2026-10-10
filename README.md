# RM Portfolio — Rishikesh Munnaluri

A highly interactive, single-page portfolio for Rishikesh Munnaluri.

The site is intentionally lightweight: plain HTML/CSS/JavaScript with GSAP, ScrollTrigger and Lenis loaded from CDNs. There is no build step and no framework dependency.

## Experience

- animated RM boot mark + loader
- oversized warp-in hero typography
- liquid cursor on pointer devices
- canvas-driven terminal and generative sculpture
- scrolling technology rails
- 3D rotating project ring with detailed project drawer
- laptop-style About / Currently / Location interface
- capabilities + proof sections
- playable Snake interaction
- responsive layout + reduced-motion support

## Selected projects

The project ring is grounded in Rishikesh's public work, including ReturnReview, Skylark Command, Imposter X, NoCodeML, EchoType, Vibify, Axiom Imaging and MostLikely.

## Run locally

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

You can also open `index.html` directly, but serving the folder is recommended.

## Structure

```text
portfolio2/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Notes

- Project and contact content live in `index.html` and the `DATA` object at the top of `app.js`.
- No secrets are required.
- External runtime dependencies are public CDN files for GSAP, ScrollTrigger and Lenis, plus Google Fonts.
- The portfolio is a custom implementation inspired by the interaction language of the visual reference supplied for this rebuild; it is not a copy of that repository's source code.
