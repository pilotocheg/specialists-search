# Specialists Search

A web app for searching and browsing specialists (psychologists) with filters and pagination. Built with React, TypeScript, and Vite.

## Features

- **Search & filters** — Filter by sex, age range, topic (subject), qualification (consultant / sexologist / coach), and rating
- **URL-driven state** — Filter values are synced with URL search params so results are shareable and bookmarkable
- **Specialist cards** — Photo, name, rating, subject, online status, last activity
- **Pagination** — Loads specialists in pages of 12; empty state when no results

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (Rolldown)
- **Redux Toolkit** — specialists and subjects data
- **React Router 7** — routing and search params
- **React Hook Form** — filter form
- **styled-components** — styling
- **Axios** — API client
- **date-fns** — date formatting
- **react-hot-toast** — notifications

## Getting started

### Prerequisites

- Node.js (recommended: LTS)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server (HMR)   |
| `npm run build`   | Type-check and build     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## API

The app uses a backend API (default base URL: `https://specialists-search-api.onrender.com/api`):

- `GET /specialists` — paginated specialists with optional filter query params
- `GET /subjects` — list of topics/subjects for the filter

Note: The API is hosted on Render.com and may take up to 1 minute to respond.

## Project structure

```
src/
├── api/              # API client and types
├── components/       # UI components
│   ├── commons/     # Button, Select, Loader
│   ├── empty-state/
│   ├── filters/     # Search filters form
│   └── specialists-list/
├── constants/
├── helpers/          # URL/search params helpers
├── pages/search/     # Main search page
├── store/            # Redux slices (specialists, subjects)
├── styles/           # Global styles and theme
└── routes.tsx
```

## License

Private project.
