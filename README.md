# Sicura website prototype

A full redesign of [sicura.in](https://sicura.in/home) — the public site of **Amit Gramodyog Sansthan**, Kanpur.

This is a **clickable prototype**, not a replacement of the live GoDaddy site. Copy, SKUs, certifications, address, and leadership come from the current pages. Duplicate catalogue rows, leftover “security guard” placeholder text, and the empty Police & Army menu were rebuilt.

## Run it

```bash
cd prototypes/sicura-website
npm install
npm run dev
```

Opens at [http://localhost:5174](http://localhost:5174).

## Pages

| Route | Replaces |
| --- | --- |
| `/` | Home gallery |
| `/footwear` | Safety shoes dump |
| `/footwear/:id` | Missing product detail |
| `/oem` | OEM page |
| `/defence` | Police & Army (was a 404 / stock security photos) |
| `/about` | About + History + Blog + Events |
| `/standards` | Certifications |
| `/contact` | Contact form |

## What still needs real assets

Product photography on the live site is incomplete (many 1×1 GIF placeholders). Generated studio shots fill those gaps so the grid is usable. Swap them for plant photography before any production publish.
