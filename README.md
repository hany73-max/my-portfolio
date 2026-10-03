# Hany El34ry — Portfolio

A single-page cyberpunk / sci-fi HUD portfolio built with React, Three.js and Tailwind CSS.
Everything lives in one `index.html` file. There is no build step.

## Project structure

```
.
├── index.html            # the entire site (code, styles, embedded images)
├── Hany_Elashry_CV.pdf   # CV linked from the Credentials section
└── README.md
```

## Tech stack

- **React 18** (UMD build) with in-browser **Babel**
- **Three.js r128** for the 3D elements
- **Tailwind CSS** via CDN
- **Google Fonts:** Rajdhani, Share Tech Mono

All libraries load from CDNs, so visitors need an internet connection.
No `assets/` folder is required: images are embedded in `index.html`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 3000
```

## Deploy on Vercel

1. Put `index.html` and `Hany_Elashry_CV.pdf` in the same folder (project root).
2. Push to GitHub and import the repo in Vercel, **or** run `vercel` in the folder.
3. Framework preset: **Other**. No build command and no output directory needed.

The CV will be served at `https://<your-site>.vercel.app/Hany_Elashry_CV.pdf`.
The filename is case-sensitive.

## Common edits

All edits are in `index.html`.

| What | Where |
| --- | --- |
| CV file path | `CV_URL` constant near the Credentials section |
| Education entries | `EDU` array |
| Certifications | `CERTS` array and the JSX block, currently commented out. Uncomment both when you have certificates, and restore `mt-8` on the "CURRICULUM VITAE" heading. |
| Projects | `PROJECTS` array (title, status, description, link, tags) |
| Contact email / links | `EMAIL` constant and the `ch` array inside `Contact()` |

## Notes

- The contact form opens the visitor's mail app (`mailto:`) rather than sending through a server.
- Tailwind CDN and in-browser Babel are intended for development. They work fine here, but for faster first loads you can later move to a precompiled build (e.g. Vite).
- 3D model credit: Meshy AI.

## Contact

- Email: hanyelashry323@gmail.com
- GitHub: [hany73-max](https://github.com/hany73-max)
- LinkedIn: [hany-34ry](https://www.linkedin.com/in/hany-34ry/)
