# LLM Renderer

A one-URL-at-a-time inspection tool for exploring what a webpage exposes to automated readers.

> **Prototype status:** the current interface is a front-end demo. It uses clearly labelled sample data and does not yet fetch or analyse live URLs.

## Product principles
- Inspect one URL per run; no bulk crawling.
- Separate observable HTML/content from content that may require JavaScript rendering.
- Report evidence and gaps without claiming to reproduce the private behaviour of ChatGPT or any other model.
- Treat fetched page content as untrusted input.

## Run locally
Requirements: Node.js 20+

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Next implementation step
Connect the URL form to a server-side analysis endpoint. Before deploying a fetcher, implement URL validation, DNS/IP checks, redirect re-validation, response-size limits, timeouts and safe content handling to reduce SSRF risk. Do not send cookies, credentials or private headers to target sites.

## Stack
React, TypeScript and Vite.
