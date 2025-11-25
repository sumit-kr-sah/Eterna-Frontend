# Axiom Clone


## ✨ Features

- **Real-time Token Tracking** - Monitor multiple cryptocurrency tokens with live price updates
- **Comprehensive Market Data** - Track market cap, liquidity, volume, and price changes
- **Transaction Analytics** - View buy/sell ratios and transaction counts
- **Token Metrics** - Analyze holder percentages, tax rates, and distribution data
- **Responsive Design** - Beautiful, modern UI optimized for all screen sizes
- **Dark Theme** - Eye-friendly dark interface for extended use
- **Search Functionality** - Quickly find tokens with built-in search
- **Interactive Charts** - Visual representation of token performance

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Code Quality:** ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Eterna-Frontend/frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 🏃 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Main navigation header
│   ├── SecondaryNav.tsx   # Secondary navigation
│   ├── TokenTable.tsx     # Token list table
│   ├── TokenTableRow.tsx  # Individual token row
│   ├── SearchPopup.tsx    # Search functionality
│   ├── Footer.tsx         # Footer component
│   └── ui/                # Reusable UI components
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Icon.tsx
│       └── MiniChart.tsx
├── data/                  # Data and mock data
│   └── mockTokens.ts      # Sample token data
├── types/                 # TypeScript type definitions
│   └── index.ts
└── public/                # Static assets
```

## 🎨 Key Components

### TokenTable
Displays a scrollable table of token pairs with comprehensive market data.

### Header
Main navigation with branding, search functionality, and user actions.

### SecondaryNav
Category navigation for filtering different token types.

### TokenTableRow
Individual token row displaying name, metrics, charts, and transaction data.

## 📊 Data Structure

The application uses a `TokenPair` interface that includes:
- Basic token info (name, description, icon)
- Market data (market cap, liquidity, volume)
- Transaction metrics (buys, sells, total)
- Holder and tax information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🚀 Building for Production

Build the application for production:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```


## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<img width="1919" height="973" alt="Screenshot 2025-11-25 145341" src="https://github.com/user-attachments/assets/3d17f148-8502-4c23-a42f-73d5af0a5b6e" />

<img width="1919" height="968" alt="image" src="https://github.com/user-attachments/assets/b9697171-6606-4006-b912-96fd9d727181" />


