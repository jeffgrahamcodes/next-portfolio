# Jeff Graham – Developer Portfolio

This is the codebase behind [jeffgraham.codes](https://www.jeffgraham.codes) — a minimalist, component-driven developer portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It’s designed to showcase full-stack projects, highlight technical strengths, and provide a clean, modern user experience.

---

## Features

- Branded monogram with animated border (`<JG />`)
<!-- - Light/dark mode support (theme-aware) -->
- Modular layout with reusable sections (`Hero`, `ProjectCard`, `TechStack`, etc.)
- Fully responsive on all screen sizes
- Projects dynamically displayed with icons + links
- Fast, static-generated pages via Next.js
- Styled with Tailwind CSS + some MUI components

---

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **React Icons** (tech stack icons)
- **MUI (Material UI)** – selective use for layout or accessibility
- **Vercel** – deployed and hosted live

---

## Live Site

[https://www.jeffgraham.codes](https://www.jeffgraham.codes)

---

## Folder Structure (Simplified)

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About section route
│   ├── contact/
│   │   └── page.tsx          # Contact form/page route
│   ├── projects/
│   │   └── page.tsx          # Project portfolio route
│   ├── globals.css           # Global CSS and base styles
│   ├── layout.tsx            # Shared layout component
│   └── page.tsx              # Homepage
├── components/
│   ├── AboutPreview.tsx      # Summary about the developer
│   ├── ContactCTA.tsx        # Contact call-to-action
│   ├── FeaturedProjects.tsx  # Featured work/projects section
│   ├── ProjectCard.tsx       # Individual project card
│   ├── TechStack.tsx         # Technologies & tools used
│   ├── hero.tsx              # Hero/banner section
│   └── header.tsx            # Navigation/header bar
```

---

## Featured Projects

- **Hall-Waze** – A full-stack student hall pass tracker (React + Firebase)
- **Microblog** – A minimalist blog app using Flask + MongoDB

Each project is loaded via a `ProjectCard` component and linked to GitHub + live demos.

---

## Local Development

```bash
git clone https://github.com/jeffgrahamcodes/portfolio.git
cd portfolio

npm install
npm run dev
```

Access the site at: http://localhost:3000

---

## Deployment

This project is deployed on Vercel with automatic CI from GitHub.

To build manually:

```
npm run build
npm start
```

---

## Future Improvements

- Add scroll-based animations (Framer Motion)
- Filter or sort projects by stack or type
- Add blog section powered by MDX or Notion API
- Dynamic Open Graph images for project previews
- Lighthouse optimization for mobile performance

---

## Created By

**Jeff Graham**
Full-Stack Cloud Developer & Educator
[LinkedIn](https://linkedin.com/in/jeffgrahamcodes)
[GitHub](https://github.com/jeffgrahamcodes)
[jeffgraham.codes](https://jeffgraham.codes)
