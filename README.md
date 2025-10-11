# Offline Labs Website

A modern, privacy-first website for Offline Labs - a project creating free, open source, ad-free alternatives for everyday apps.

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Privacy First**: No tracking, no analytics, no data collection
- **Offline Ready**: Works perfectly without internet connection
- **Performance Optimized**: Fast loading, smooth animations
- **Accessible**: WCAG compliant, keyboard navigation
- **Responsive**: Works on all devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + Orbitron (OCR A Extended fallback)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── WhatIsIt.tsx      # What is it section
│   ├── WhoWeAre.tsx      # Who we are section
│   ├── Manifesto.tsx     # Manifesto section
│   ├── Products.tsx       # Products section
│   ├── HowToCollaborate.tsx # Collaboration section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── lib/                   # Utility functions
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Deployment

This website is designed to be deployed on GitHub Pages. The build process creates a static site that can be served from any static hosting provider.

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is open source and available under the [MIT License](LICENSE).