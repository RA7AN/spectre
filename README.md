# Temporal Video Grounding Web Application
# Created by Abdul Jawwad <rayyan20161@gmail.com> and Akil Krishna <krsna.akil@gmail.com>

This is a Next.js web application with TypeScript and Tailwind CSS for temporal video grounding.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [pnpm](https://pnpm.io/) (v8.0.0 or higher)

## Setup Instructions

### 1. Install Node.js

1. Visit [Node.js official website](https://nodejs.org/)
2. Download and install the LTS (Long Term Support) version
3. Verify the installation by running:
   ```bash
   node --version
   ```

### 2. Install pnpm

1. Open your terminal and run:
   ```bash
   npm install -g pnpm
   ```
2. Verify the installation by running:
   ```bash
   pnpm --version
   ```

### 3. Clone and Setup the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd temporal-video-grounding
   ```

2. Install project dependencies:
   ```bash
   pnpm install
   ```

### 4. Run the Development Server

1. Start the development server:
   ```bash
   pnpm dev
   ```

2. Open your browser and navigate to:
   - Local: http://localhost:3000
   - Network: http://[your-local-ip]:3000 (for accessing from other devices on your network)

## Tech Stack

### Core Technologies
- **Next.js 15.1.0**: React framework for production-grade applications
  - Server-side rendering and static site generation
  - API routes and middleware support
  - Built-in routing and image optimization
  - App Router architecture

- **React 19.1.0**: UI library for building user interfaces
  - Component-based architecture
  - Virtual DOM for efficient rendering
  - Hooks for state management and side effects

- **TypeScript**: Typed JavaScript superset
  - Static type checking
  - Enhanced IDE support
  - Better code maintainability and reliability

### Styling and UI
- **Tailwind CSS**: Utility-first CSS framework
  - Responsive design utilities
  - Custom component styling
  - Dark mode support with next-themes
  - JIT (Just-In-Time) compilation
  - CSS variables for theme customization
  - Seamless light/dark mode transitions

- **Radix UI**: Unstyled, accessible component primitives
  - Accessible form controls
  - Modal dialogs and alerts
  - Dropdowns and menus
  - Navigation components
  - Form elements (checkbox, radio, select, etc.)
  - Toggle and switch components

- **Class Variance Authority**: Dynamic class generation
  - Type-safe component variants
  - Conditional styling
  - Theme-aware components

- **Tailwind Merge**: Utility for merging Tailwind CSS classes
  - Handles class conflicts
  - Conditional class application

### Theme System
- **next-themes**: Comprehensive theme management
  - System theme detection
  - Persistent theme preferences
  - Smooth theme transitions
  - CSS variable-based theming
  - Light and dark mode support

### Development Tools
- **ESLint**: Code linting and style enforcement
  - TypeScript support
  - Next.js specific rules
  - Code quality checks

- **Prettier**: Code formatting
  - Consistent code style
  - Automatic formatting

### Package Management
- **pnpm**: Fast and disk space efficient package manager
  - Strict dependency management
  - Monorepo support
  - Workspace features

### Additional Libraries
- **date-fns**: Modern JavaScript date utility library
- **lucide-react**: Beautiful and consistent icon set
- **react-hook-form**: Form handling and validation
- **zod**: TypeScript-first schema validation
- **sonner**: Toast notifications
- **recharts**: Composable charting library

## Project Structure

```
temporal-video-grounding/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   └── globals.css     # Global styles and theme variables
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── theme-provider.tsx  # Theme context provider
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and shared code
├── public/             # Static assets
├── styles/             # Global styles
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Theme Customization

The application uses a CSS variable-based theme system that supports both light and dark modes. Theme colors are defined in `app/globals.css` and can be customized by modifying the CSS variables:

```css
:root {
  /* Light mode variables */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other variables ... */
}

.dark {
  /* Dark mode variables */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other variables ... */
}
```

## Troubleshooting

If you encounter any issues:

1. **Node.js Version**: Ensure you're using Node.js v18.0.0 or higher
2. **Dependencies**: Try removing the `node_modules` folder and `pnpm-lock.yaml`, then run `pnpm install` again
3. **Port Conflicts**: If port 3000 is already in use, you can specify a different port:
   ```bash
   pnpm dev -- -p 3001
   ```
4. **Theme Issues**: If theme switching isn't working:
   - Clear browser cache and local storage
   - Ensure JavaScript is enabled
   - Check for CSS variable conflicts

## Support

For any questions or issues, please refer to the project documentation or create an issue in the repository. 
