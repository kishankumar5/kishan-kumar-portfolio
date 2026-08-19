# Project preview images

Drop an image in this folder and it shows up on the matching project card.
No code changes needed.

## How to add one

Name the file after the project's `slug` (see `src/constants/index.js`):

| Project                                | Filename          |
| -------------------------------------- | ----------------- |
| ReuseDepot — iPad Kiosk App            | `reusedepot.png`  |
| ChipTable                              | `chiptable.png`   |
| Multimodal Fashion Outfit Recommendation | `fashion.png`   |
| Realtor — Real Estate Mobile App       | `realtor.png`     |
| Flight Route Optimizer                 | `flight.png`      |

Then restart the dev server (Vite only scans this folder at startup).

Any of `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif` works. Names are matched
case-insensitively, so `ChipTable.PNG` is fine. A project with no matching
file keeps the gradient "Preview coming soon" placeholder, so it is safe to
add these one at a time.

## What makes a good image

The card image area is **360 × 230 CSS px**, and images are fitted with
`object-contain` on a dark background — the whole screenshot is always
visible, letterboxed rather than cropped. So the aspect ratio does not have
to match; it just affects how much letterboxing shows.

- **Landscape fills the slot best.** Roughly 3:2 leaves almost no bars. Wider
  (2:1 screenshots) or squarer (4:3) both work, just with thin bars. A tall
  portrait screenshot will render as a narrow sliver in the middle — for
  mobile apps, capture in landscape if you can.
- **Aim for ~1080 px on the long edge** so it stays sharp on retina displays.
  Larger than that is wasted bytes at this display size.
- **Keep it under ~300 KB.** These ship in the main JS bundle. A full-res
  screenshot is often 1–3 MB, so downscale first:

  ```bash
  sips -Z 1080 shot.png --out chiptable.png
  ```

  If it is still large, convert to JPEG (fine at this display size):

  ```bash
  sips -Z 1080 -s format jpeg -s formatOptions 82 shot.png --out chiptable.jpg
  ```

- **Show the app doing something.** A screen with real results reads better
  than an empty form.

## Adding a new project

Add an entry to the `projects` array in `src/constants/index.js` with a
`slug`, then name your image to match. `source_code_link` and
`live_demo_link` are both optional — each button is hidden when its URL is
absent.
