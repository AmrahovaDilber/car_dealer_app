// README.md

# Vehicle Model Finder

A Next.js application for finding vehicle models by make and year using the NHTSA API.

## Features

- Vehicle make selection from NHTSA database
- Year selection (2015-present)
- Dynamic model lookup
- Responsive design
- Server-side rendering
- Static page generation

## Tech Stack

- Next.js 13+
- React
- Tailwind CSS
- NHTSA Vehicle API

## Setup

1. Install dependencies:

```bash
npm install
```

2. Install dev dependencies:

```bash
npm install --save-dev eslint prettier eslint-config-prettier
```

3. Run development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
npm start
```

## Performance

- Implements React Suspense
- Uses static page generation
- Client-side data fetching for dynamic updates
