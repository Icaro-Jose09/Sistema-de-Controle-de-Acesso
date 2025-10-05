# Access Control System

## Overview

This is a user authentication and access control web application built with a modern full-stack architecture. The system provides user registration, login functionality, and a personalized home page for authenticated users. The application features a Material Design 3-inspired UI with comprehensive form validation and a responsive layout that works across desktop and mobile devices.

The system is designed as a utility-focused authentication platform prioritizing clear information hierarchy, excellent form usability, and professional credibility. It implements client-side authentication flows with form validation and user data persistence via local storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack React Query for server state management
- React Hook Form with Zod for form validation and schema-based validation

**UI Component System:**
- Shadcn/ui component library based on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Material Design 3 principles applied through custom CSS variables
- Comprehensive dark/light mode support via CSS custom properties

**Design System:**
- Custom color palette with HSL-based theming
- Typography using Inter (UI) and JetBrains Mono (monospace) fonts
- Spacing system based on Tailwind's spacing scale (2, 4, 6, 8, 12, 16)
- Border radius customization (lg: 9px, md: 6px, sm: 3px)

**Application Structure:**
- Page-based routing with Login, Cadastro (Registration), and Home pages
- Reusable form components (LoginForm, CadastroForm)
- Shared layout component (AuthLayout) for authentication pages
- UserDisplay component for authenticated user interface

**State Management:**
- Local storage for user session persistence
- Client-side authentication state (no server-side sessions currently implemented)
- Form state managed via React Hook Form
- Toast notifications for user feedback

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- TypeScript for type safety across server code
- Custom middleware for request logging and error handling

**API Design:**
- RESTful endpoints for user operations:
  - POST `/api/usuarios` - User registration
  - POST `/api/login` - User authentication
- JSON request/response format
- Zod schema validation on API endpoints

**Data Storage:**
- In-memory storage implementation (MemStorage class)
- Database-ready architecture with Drizzle ORM schema defined
- PostgreSQL schema configured for future database integration
- Storage interface (IStorage) allows easy swapping between in-memory and database implementations

**Database Schema (Configured for PostgreSQL):**
- `usuarios` table with fields:
  - id (UUID primary key, auto-generated)
  - nome (text, not null) - Full name
  - nomeUsuario (text, unique, not null) - Username
  - email (text, unique, not null) - Email address

**Validation Strategy:**
- Shared Zod schemas between client and server (`@shared/schema.ts`)
- Server-side validation with detailed error messages
- Client-side validation using the same schemas for consistency

### External Dependencies

**Database (Configured but Not Yet Connected):**
- Neon PostgreSQL serverless database configured via `@neondatabase/serverless`
- Drizzle ORM for type-safe database queries and migrations
- Connection configured through `DATABASE_URL` environment variable
- Migration system set up via Drizzle Kit

**UI Component Libraries:**
- Radix UI primitives for accessible, unstyled components
- Extensive component coverage (accordion, alert-dialog, avatar, badge, button, calendar, card, carousel, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, label, menubar, navigation-menu, pagination, popover, progress, radio-group, scroll-area, select, separator, sheet, sidebar, skeleton, slider, switch, table, tabs, textarea, toast, toggle, tooltip)

**Form Management:**
- React Hook Form for performant form state management
- @hookform/resolvers for Zod schema integration
- Zod for runtime type validation and schema definition
- drizzle-zod for generating Zod schemas from Drizzle ORM schemas

**Styling & Theming:**
- Tailwind CSS with PostCSS for processing
- class-variance-authority for component variant management
- clsx and tailwind-merge for conditional className handling

**Development Tools:**
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- ESBuild for production server bundling
- TypeScript compiler for type checking
- Custom Vite configuration for path aliases and server proxy

**Fonts:**
- Google Fonts: Inter and JetBrains Mono loaded via CDN

**Utility Libraries:**
- date-fns for date manipulation
- nanoid for unique ID generation
- lucide-react for icon components
- cmdk for command palette functionality
- embla-carousel-react for carousel components

**Session Management (Configured but Not Active):**
- connect-pg-simple for PostgreSQL session storage (configured but not currently used)
- Application currently uses client-side localStorage instead of server-side sessions