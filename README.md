# Portfolio Website

A modern, animated personal portfolio built with React and Vite.

It includes smooth section transitions, dark/light theme support with persistence, responsive navigation, custom motion effects, project filtering, and a data-driven content layer for easy updates.

## Tech Stack

- React
- Vite
- Framer Motion
- Lucide React
- ESLint

## Features

- Responsive single-page layout with sections for Hero, About, Skills, Projects, Journey, and Contact.
- Animated UI elements and scroll-based reveal effects.
- Dark/light theme toggle saved in local storage.
- Active-section navigation highlight and smooth scrolling.
- Project category filtering.
- Custom cursor, scroll progress indicator, and page loader.
- Centralized portfolio content through a single data file.

## Project Structure

```
.
|- public/
|- src/
|  |- assets/
|  |- components/
|  |- data/
|  |  \- portfolioData.js
|  |- hooks/
|  |- styles/
|  |- App.jsx
|  \- main.jsx
|- index.html
|- package.json
\- vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Customization

Update your content in:

- `src/data/portfolioData.js`

You can edit:

- Personal details (name, role, email, location, resume path, avatar)
- Social links
- About cards
- Skills and proficiency values
- Project list and categories
- Timeline entries
- Navbar section labels

## Notes

- The contact form is currently UI-only and shows a success message locally.
- Resume download expects the file to exist in `public/` at the configured path.

## Deployment

You can deploy this project to platforms like Vercel, Netlify, or GitHub Pages.

Typical flow:

1. Push the repository to GitHub.
2. Import the repository into your hosting provider.
3. Use the build command: `npm run build`.
4. Use the output directory: `dist`.

## Author

Mihir Sawant
