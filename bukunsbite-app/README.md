# Bukun's Bite E-Commerce Platform

A modern e-commerce platform for Bukun's Bite, built with React, TypeScript, and Firebase.

## Features

- Customer-facing storefront with product catalog
- Shopping cart functionality
- Secure checkout process
- Admin dashboard for order management
- Real-time order updates
- Responsive design for all devices

## Tech Stack

- React 18
- TypeScript
- Vite
- Firebase (Authentication, Firestore)
- React Router v6

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account and project

## Getting Started

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd bukunsbite-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env`
   - Fill in your Firebase configuration details

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure

```
src/
├── assets/              # Static assets
│   ├── images/          # Product images, logos, icons
│   └── styles/          # Global styles, variables, mixins
├── components/          # Shared components
│   ├── common/          # Basic UI components
│   ├── layout/          # Layout components
│   └── products/        # Product-related components
├── features/            # Feature-specific components
│   ├── cart/           # Shopping cart related
│   ├── checkout/       # Checkout process
│   └── orders/         # Order management
├── pages/              # Page components
│   ├── customer/       # Customer-facing pages
│   └── admin/          # Admin dashboard pages
├── services/           # API and external service integrations
├── hooks/              # Custom React hooks
├── context/            # React context providers
├── utils/              # Helper functions and constants
└── types/              # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

This project is private and confidential. All rights reserved.