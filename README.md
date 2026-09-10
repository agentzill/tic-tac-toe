# Tic-Tac-Toe

**A polished local two-player tic-tac-toe — X vs O, same device, zero backend.**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://PLACEHOLDER.vercel.app)
[![Vercel](https://img.shields.io/badge/deploy-Vercel-black)](https://PLACEHOLDER.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Tap cells. Chase three in a row. Keep score for the session. That’s the whole game — and it looks good doing it.

## Features

- Local two-player on one device (X starts, then O)
- Win and draw detection with highlighted winning cells
- Session scoreboard: X wins / O wins / draws
- Reset board and clear scores without a reload
- Responsive, mobile-friendly UI with a dark glassmorphic vibe
- Pure static site — open `index.html` or host anywhere

## Tech stack

| Layer | Tools |
|-------|--------|
| Markup | HTML5 |
| Style | CSS3 (custom properties, grid, glassmorphism) |
| Logic | Vanilla JavaScript (IIFE, no deps) |
| Hosting | Vercel (static) |

## Quick start

```bash
git clone https://github.com/agentzill/tic-tac-toe.git
cd tic-tac-toe
```

Open `index.html` in a browser, or serve locally:

```bash
npx serve .
# or: python3 -m http.server 8080
```

Then visit the URL your server prints (often http://localhost:3000 or http://localhost:8080).

## Project structure

```
tic-tac-toe/
├── index.html      # Entry point
├── styles.css      # Layout + theme
├── app.js          # Game logic + scoreboard
├── LICENSE         # MIT
└── README.md
```

## Deploy

Import the repo on Vercel (or run `npx vercel --prod`). No build step — root `index.html` is the entry.

Live demo: https://PLACEHOLDER.vercel.app

## License

[MIT](./LICENSE) · Copyright (c) 2026 Agentzill / Zilla Six
