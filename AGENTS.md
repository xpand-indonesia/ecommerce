<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Specifics & Custom Constraints

## 1. Project Directory Structure
All client-facing code, components, and views are strictly placed inside the `src/` directory. Do not place root components outside `src/`.
- `src/app/` - Next.js App Router files (page.tsx, layout.tsx, loading.tsx). Keep routing files thin.
- `src/features/` - Each Page utilities. 
- `src/features/components` - Each Page UI sections/components. 
- `src/components/` - Global reusable UI components. 
- `src/components/ui/` - Atomic/primitive elements (buttons, inputs, cards).
- `src/lib/` - Shared utility scripts, clients, and configurations.

## 2. Styling Style Guide: Tailwind CSS v4
This project utilizes **Tailwind CSS v4**. Do not generate legacy v3 configuration options.
- **No `tailwind.config.js`**: All theme configurations, custom colors, fonts, and utilities must be declared via CSS variables utilizing `@theme` inside the primary global CSS file (`src/app/globals.css`).
- **Imports**: Utilize `@import "tailwindcss";` instead of legacy `@tailwind base;` directives.
- **Utility Handling**: Prioritize modern arbitrary properties and v4 features like dynamic utilities (e.g., fluid sizing values or native container queries where appropriate).
- **Component Styling**: Keep components modular; combine Tailwind classes cleanly within TSX code blocks. Avoid heavy `@apply` abstraction layers unless formatting shared, cross-cutting HTML element primitives.

## 3. Tech Stack Rules & Coding Patterns
- **TypeScript**: Enforce strict type definitions. Avoid using `any`. Write explicit interfaces/types for all new component properties.
- **React Components**: Default to React Server Components (RSC) for routing shells. Only inject `"use client"` if managing interactive element state (`useState`, `useEffect`) or listening to browser-level events.
- **Component Exports**: Use named exports exclusively for components inside `src/components/` to facilitate explicit IDE auto-imports and strict module traceability.

## 4. Operational Commands
Execute verification processes locally via terminal wrappers before declaring tasks complete:
- Dev Server: `pnpm dev`
- Build Process: `pnpm build`
- Type Check: `pnpm exec tsc --noEmit`
- Linter Check: `pnpm lint`

## 5. Figma-to-Code Workflow Guidelines
When building components from Figma via MCP links:
- **Inspect First:** Always use the Figma MCP server to fetch node properties, autolayout rules, and design tokens *before* writing code.
- **Tailwind v4 Integration:** Map colors, typography, and spacing tokens to the CSS `@theme` variables in `src/app/globals.css`. Never hardcode arbitrary hex codes unless it's a one-off asset color.
- **Atomic Placement:** Place structural UI components inside `src/components/ui/` if they are primitive elements, or `src/components/` if they are composite domain blocks.
- **Props Mapping:** Design components with explicit TypeScript interfaces anticipating dynamic data fetched from your backend API endpoints.