# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Alec Chamberland, built with React, TypeScript, and Vite, and hosted on GitHub Pages. The site features a dark midnight blue theme and showcases two projects: ListKeeper and Pixel Farm.

## Commands

### Development
- `npm run dev` - Start development server with hot module replacement (HMR)
- `npm run build` - Compile TypeScript and build for production (outputs to `docs/` directory)
- `npm run preview` - Preview production build locally

### Important Notes
- The build output goes to `docs/` directory (not `dist/`) as configured in vite.config.js - this is required for GitHub Pages deployment
- Build minification is disabled (`minify: false` in vite.config.js)
- Entry point is `/src/main.jsx` (referenced in index.html), but the actual source uses TypeScript files in src/

## Architecture

### Routing & Navigation
- Uses `react-router-dom` v7 with `BrowserRouter`
- Single-page application with client-side routing
- Main routes defined in `src/App.tsx`:
  - `/` - Home page
  - `/listkeeper` - ListKeeper project page
  - `/pixelfarm` - Pixel Farm project page
- Navigation component (`src/components/Navbar.tsx`) provides consistent header across all pages

### Project Structure
- `src/pages/` - Page components (Home, ListKeeper, PixelFarm)
- `src/components/` - Reusable components (currently just Navbar)
- `src/data/` - Static data (project metadata in `projects.ts`)
- `src/styles/` - Global CSS
- `docs/` - Production build output for GitHub Pages
- `public/` - Static assets

### Data Layer
Project information is stored in `src/data/projects.ts` as typed objects with the `Project` interface, containing:
- id, title, description
- features (array)
- technicalDetails (key-value pairs)
- screenshots (array of paths)

### Styling
- Mix of global CSS and component-specific CSS files
- Custom CSS in `src/styles/globals.css` and `src/components/Navbar.css`
- No Tailwind CSS configuration file found, but it's installed as a dependency
- Dark theme with midnight blue (#0F172A) as primary color
- Uses Lucide React icons (`lucide-react` package)

### TypeScript Configuration
- Target: ES2020
- Strict mode enabled
- `noUnusedLocals` is disabled
- JSX mode: react-jsx
- Bundler module resolution

## Development Guidelines

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx` if needed

### Adding New Projects
1. Define project data in `src/data/projects.ts` following the `Project` interface
2. Create corresponding page component in `src/pages/`
3. Add route and navigation link

### Build Configuration
The Vite build is configured with custom output naming (no hashes in filenames) for consistency:
- Entry files: `assets/[name].js`
- Chunks: `assets/[name].js`
- Assets: `assets/[name][extname]`
