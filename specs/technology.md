# Frontend Technology Specification

## Framework

Next.js with App Router.

Use TypeScript.

---

## UI

### Tailwind CSS

Used for styling and layout.

### shadcn/ui

Used for reusable application UI primitives.

### Radix UI

Used through shadcn/ui or directly where required for accessible primitives.

### Lucide React

Used for application icons.

---

## Forms

Use:

```text
React Hook Form
+
Zod
```

for complex forms and validation.

---

## Server State

Use TanStack Query for:

* API queries
* mutations
* caching
* request lifecycle
* server state synchronization
* the default AI chat request–response (complete JSON)

Do not use TanStack Query as the primary mechanism for a long-lived SSE stream.

---

## AI Responses

The default AI response mode is a complete JSON response from the NestJS API Gateway.

Use a dedicated SSE/streaming implementation only when the Gateway contract explicitly exposes SSE.

The implementation must be compatible with the NestJS contract.

Do not assume Dify-specific event structures.

Do not add streaming utilities solely because Dify supports SSE.

---

## Markdown

Use:

```text
react-markdown
remark-gfm
```

for AI response rendering.

Markdown rendering must be safe against XSS.

---

## Testing

### Unit

Vitest.

### Component

React Testing Library.

### End-to-End

Playwright.

---

## Code Quality

Use:

* ESLint
* Prettier
* strict TypeScript

---

## Dependency Principle

Do not install a dependency simply because it is popular.

A dependency must have a clear purpose.

Prefer existing project dependencies before introducing new libraries.
