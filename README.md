# Portfolio 2026

A basic personal portfolio built with React and Vite.

## Run locally

1. Install dependencies:

	```bash
	npm install
	```

2. Start the dev server:

	```bash
	npm run dev
	```

## Build for production

```bash
npm run build
```

## Deploy (GitHub Pages)

This repo includes an automatic deploy workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

1. Push to `main`.
2. In GitHub repo settings, go to **Pages** and set **Source** to **GitHub Actions** (one-time setup).
3. The workflow builds and publishes the `dist/` output.
