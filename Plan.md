# React App Plan: Alec Chamberland Portfolio Website (GitHub Pages)

## Overview
Create a stylish, professional, dark-themed static website for Alec Chamberland, hosted on GitHub Pages. The site will have a single entrypoint with multiple pages for different projects. The design will use midnight blue as the primary color and Lucide icons for visual elements.

## Goals
- Single entrypoint React app (no routing via multiple HTML files)
- Dark theme with midnight blue as primary color
- Navigation menu with "Home" and "Apps" (dropdown on hover)
 - Three pages: Home, ListKeeper, Pixel Farm
- Responsive design
- Optimized for GitHub Pages hosting
- Clean, modern, professional aesthetic

## Step-by-Step Implementation Plan

### 3. Set Up Project Structure
- [ ] Create `src/` directory structure:
  - `src/pages/` - individual page components
  - `src/components/` - reusable components (Navbar, Footer, etc.)
  - `src/assets/` - images, icons, etc.
  - `src/styles/` - global styles and variables
  - `src/App.tsx` - main app component
  - `src/main.tsx` - entry point
- [ ] Add `public/` directory for static assets

### 4. Implement Global Styling & Theme
- [ ] Create `src/styles/globals.css` with dark theme foundation
- [ ] Define CSS variables for midnight blue theme
- [ ] Set up reset styles (normalize.css or similar)
- [ ] Apply global styles in `main.tsx`

### 5. Build Navigation System
- [ ] Create `Navbar.tsx` component
- [ ] Implement top menu with "Home" and "Apps" links
- [ ] Add dropdown menu for "Apps" with hover effect
- [ ] Style navigation with midnight blue accents
- [ ] Use Lucide icons for navigation items
- [ ] Ensure responsive mobile design

### 6. Create Page Components
- [ ] Create `Home.tsx` page:
  - Biography section for Alec Chamberland
  - Career highlights
  - Aspirations and future goals
  - Professional image
- [ ] Create `ListKeeper.tsx` page:
  - Project overview
  - Features and benefits
  - Screenshots or demo
- [ ] Create `PixelFarm.tsx` page:
  - Project overview
  - Features and benefits
  - Screenshots or demo

### 7. Integrate Lucide Icons
- [ ] Install `lucide-react` package
- [ ] Create icon utility component
- [ ] Use icons in navigation and throughout the site
- [ ] Ensure icons are responsive and properly sized

### 8. Implement Routing
- [ ] Install `react-router-dom`
- [ ] Set up `BrowserRouter` in `App.tsx`
- [ ] Define routes for Home, ListKeeper, PixelFarm
- [ ] Ensure navigation links work properly

### 9. Add Project Data & Content
- [ ] Create `data/projects.ts` with project metadata
- [ ] Populate with content for ListKeeper and PixelFarm
- [ ] Use data in respective pages


### 11. Finalize Design & Polish
- [ ] Add subtle animations and transitions
- [ ] Ensure consistent spacing and typography
- [ ] Test on multiple screen sizes
- [ ] Validate accessibility (a11y)
- [ ] Optimize images and assets

## Theme Specifications
- **Primary Color**: Midnight Blue (`#0F172A` or similar dark blue)
- **Secondary Colors**: Light gray (`#E2E8F0`) for text, dark gray (`#1E293B`) for backgrounds
- **Accent**: Soft blue highlights (`#38BDF8` for interactive elements)
- **Typography**: Clean, modern sans-serif (e.g., Inter, system-ui)
- **Spacing**: Consistent 1rem/1.5rem/2rem spacing units
- **Animations**: Subtle transitions for hover states and page transitions

## Final Deliverables
- Working React app
- Deployed website on GitHub Pages
- All features implemented as per plan
- Responsive, accessible, and performant
