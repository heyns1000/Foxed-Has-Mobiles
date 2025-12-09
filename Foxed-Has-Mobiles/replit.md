# Overview

This is a full-stack web application for the "Foxed Has Mobiles™ Master Competition Suite" - a creative design competition platform featuring multiple specialized categories including 1/1 apparel designs, Olympic threads, brand creations, and chaos cartography. The application serves as a dashboard and information portal for participants to learn about competition categories, view pricing packages, and understand submission requirements.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI elements
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with custom styling via class-variance-authority

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: Hot module reloading via Vite in development mode
- **Storage Interface**: Abstract storage layer with in-memory implementation for development

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Connection**: Neon serverless PostgreSQL using connection pooling
- **Schema**: User management with UUID primary keys
- **Migrations**: Drizzle Kit for database migrations and schema management

## Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not yet implemented
- **Planned**: Session-based authentication with PostgreSQL session storage via connect-pg-simple

## Project Structure
- **Monorepo Layout**: Client, server, and shared code in separate directories
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Development**: Single development server with HMR and middleware integration
- **Static Assets**: Vite handles static file serving in development, Express in production

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with WebSocket connections
- **Drizzle ORM**: Type-safe database queries and schema management

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Radix UI**: Headless UI primitives for accessibility
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library for UI elements

## Development Tools
- **Replit Integration**: Development environment with runtime error overlay and cartographer plugin
- **Vite Plugins**: React support, error handling, and development tooling
- **TanStack Query**: Server state management and caching

## Build and Deployment
- **Build Tools**: Vite (frontend), esbuild (backend)
- **TypeScript**: Full type safety across frontend, backend, and shared code
- **PostCSS**: CSS processing with Tailwind and Autoprefixer