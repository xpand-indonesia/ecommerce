<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Specifics & Custom Constraints

## 1. Project Directory Structure
All client-facing code, components, and views are strictly placed inside the `src/` directory. Do not place root components outside `src/`.
- `src/app/` - Next.js App Router files (page.tsx, layout.tsx, loading.tsx). Keep routing files thin.
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

## 5. Explicit Boundaries (Do Not Modify)
- Do not modify or add files to the root directory except structural files authorized by project maintainers.
- Do not adjust core dependency layouts inside `package.json` without verification.

## 6. Figma MCP & Design Implementation Rules
- **Tool Usage:** You have access to a Figma MCP connection. When a user provides a Figma link in the chat, proactively use the appropriate MCP tools (e.g., `get-file`, `get-component`) to inspect layouts, spacing, colors, and typography.
- **Design Tokens to Tailwind v4:** Translate Figma design tokens to Tailwind v4 conventions:
  - Do NOT generate custom hex codes directly in components. If a color is a global brand color, instruct the user to add it to `@theme` in `src/app/globals.css`.
  - Translate Figma pixel spacing/padding directly to Tailwind's spacing scale where applicable (e.g., `16px` = `p-4`), or use arbitrary v4 syntax if it's a unique layout requirement.
- **Component Anatomy:** Match the layers and component hierarchy found in the Figma file to the atomic file structure in `src/components/`.