# Pepper Size & Fit Sizing Guide

## Overview
A standalone recreation of the Pepper bra sizing guide modal, designed to be embedded into a return portal. The modal faithfully reproduces the Size & Fit guide from the Pepper website.

## Architecture
- **Frontend-only application** — no database or backend API needed
- Built with React + TypeScript + Vite
- Inline styles used throughout to match the exact Pepper design spec (no Tailwind for the modal itself)

## Structure
```
client/src/
├── pages/
│   └── home.tsx              # Landing page with button to open modal
├── components/
│   ├── size-fit-modal.tsx    # Main modal shell (tabs, header, close, overlay)
│   └── size-fit/
│       ├── size-chart-data.ts          # All size data, conversion data, calculator logic
│       ├── size-chart-tab.tsx          # Tab 1: Size chart grid
│       ├── size-calculator-tab.tsx     # Tab 2: Size calculator with inputs
│       ├── how-to-measure-tab.tsx      # Tab 3: How to measure instructions
│       ├── international-conversion-tab.tsx  # Tab 4: International conversion table
│       └── description-panel.tsx       # Right-side advisory panel
```

## Features
- **4 tabs**: Size Chart, Size Calculator, How to Measure, International Size Conversion
- **IN/CM toggle** on Size Chart and Calculator
- **Size Calculator** accepts band + bust measurements and outputs recommended size
- **International Conversion** table maps US sizes to UK, EU, AUS, FR, ITLY, JP
- **Escape key** closes modal; clicking overlay closes modal
- **Description panel** with fit tips shown on Size Chart and Calculator tabs

## Design Tokens
- Font: DM Sans (Google Fonts substitute for ABCWhyte)
- Colors match Pepper spec: #121212 text, #E1E8F7 blue highlights, #FAF9F8 panel bg, #BFCDC1 step circles
