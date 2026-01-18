# Exotic Peta Atlas

A modern web application built with Astro, Tailwind CSS, and deployed on Cloudflare Pages.

## Technology Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Runtime**: Node.js 20 LTS
- **Deployment**: Cloudflare Pages

## Development

### Prerequisites

- Node.js 20 LTS (see `.nvmrc`)
- npm

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Deployment

This project is automatically deployed to Cloudflare Pages from the `main` branch.

### Cloudflare Pages Configuration

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: 20

### Continuous Integration

GitHub Actions runs build checks on every pull request and push to main.

## Project Structure

```
/
├── src/          # Source files
├── public/       # Static assets
├── dist/         # Build output (generated)
└── package.json  # Dependencies and scripts
```
