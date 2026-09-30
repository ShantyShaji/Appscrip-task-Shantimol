# Appscrip Task - Shantimol

A responsive Product Listing Page (PLP) developed as part of the Appscrip frontend development assignment.

## Live Demo

🔗 Live Website:  [https://appscrip-plp-shantimol.netlify.app/]

## GitHub Repository

🔗 GitHub:  [https://github.com/ShantyShaji/Appscrip-task-Shantimol]

## Design Reference

The page was implemented based on the provided Figma design.

🔗 [Figma Design](https://www.figma.com/design/N0Tv7yYLf3kfMLQjUncUlx/Design-Task---PLP?node-id=0-1&p=f&t=O7Hxdcbk5z9jdUPY-0)

## Tech Stack

- Next.js
- React.js
- TypeScript
- HTML5
- CSS3
- Next.js Server Components
- Client Components

## Features

- Responsive Product Listing Page
- Desktop, tablet, and mobile layouts
- Responsive navigation
- Mobile navigation drawer
- Product grid
- Product filtering UI
- Filter drawer for tablet and mobile
- Product sorting dropdown
- Wishlist/heart interaction
- Responsive footer
- SEO metadata
- JSON-LD structured data
- Semantic HTML
- Image alt text
- Local mock product data

## Server-Side Rendering

The project uses Next.js Server Components for the main page structure and product content.

Client Components are used only where browser-side interactivity is required, including:

- Filtering
- Sorting
- Wishlist interaction
- Mobile navigation

## Mock Data

The product listing uses local mock product data.

The Fake Store API was considered for the product data, but local mock data was used to ensure reliable rendering and evaluation of the page.

## SEO

The project includes:

- Page title
- Meta description
- Semantic H1 and H2 headings
- Image alt text
- JSON-LD structured data
- SEO-friendly page structure

## Project Structure

```text
app/
├── components/
│   ├── AnnouncementBar.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── FilterBar.tsx
│   ├── FilterSidebar.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   └── Footer.tsx
│
├── data/
│   └── products.ts
│
├── types/
│   └── product.ts
│
├── globals.css
├── layout.tsx
└── page.tsx