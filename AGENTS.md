# AGENTS.md

## Project Overview

`starterkit-ai` is a reusable frontend foundation for AI-powered applications built with Next.js.

The project provides a standardized frontend architecture for applications that consume an existing backend API Gateway responsible for authentication, AI orchestration, RAG, and integration with AI providers.

The frontend MUST NOT implement backend AI orchestration or communicate directly with Dify.

---

# 1. Architecture Boundary

The frontend architecture is:

```text
User
  ↓
Next.js Frontend
  ↓
NestJS API Gateway
  ↓
Dify / AI Backend
  ↓
Knowledge Base / RAG
```

The frontend communicates ONLY with the existing NestJS API Gateway.

The frontend MUST NOT:

* call Dify directly
* contain Dify API keys
* contain LLM provider API keys
* implement RAG
* implement embeddings
* implement vector database access
* implement document ingestion
* implement document chunking
* implement AI provider authentication
* access internal backend services directly

The NestJS API Gateway is the only backend boundary exposed to the frontend.

---

# 2. Primary Objective

Build a reusable AI frontend foundation that can support multiple applications such as:

* AI Knowledge Search
* Enterprise Knowledge Assistant
* Document Q&A
* Technical Document Assistant
* Customer Support AI
* Internal Company Copilot
* Product Knowledge Assistant

Business-specific terminology and behavior MUST NOT be hardcoded into reusable components.

---

# 3. Technology Stack

The frontend uses:

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Radix UI
* Lucide React
* Zod
* React Hook Form
* TanStack Query
* AI streaming utilities only if the NestJS API Gateway exposes SSE
* react-markdown
* remark-gfm
* Vitest
* React Testing Library
* Playwright
* ESLint
* Prettier

Use TypeScript strictly.

Avoid `any` unless there is a documented technical reason.

---

# 4. Architecture Principles

## 4.1 Feature-Based Architecture

Organize application logic by feature rather than by technical type alone.

Preferred:

```text
features/
├── chat/
├── conversation/
├── auth/
├── product/
└── document/
```

Avoid putting business logic into generic global folders.

---

## 4.2 Separation of Concerns

Use the following flow:

```text
UI Component
    ↓
Feature Hook
    ↓
Feature Service
    ↓
API Client
    ↓
NestJS API Gateway
```

Example:

```text
ChatInput
    ↓
useChat()
    ↓
chat.service.ts
    ↓
api-client.ts
    ↓
NestJS Gateway
```

Components should not contain complex API communication logic.

---

# 5. API Gateway Rule

The frontend MUST treat the NestJS API Gateway as the source of truth for backend behavior.

Do not assume undocumented endpoints.

Do not invent API fields.

Do not invent response structures.

When an API contract is unclear:

1. Check `specs/api-contract.md`
2. Check existing frontend API implementation
3. Ask for clarification if necessary
4. Never silently invent a contract

---

# 6. AI Integration

AI functionality must be implemented through the API Gateway.

Correct:

```text
Chat UI
 ↓
useChat()
 ↓
chat.service.ts
 ↓
API Client
 ↓
NestJS Gateway
```

Incorrect:

```text
Chat UI
 ↓
Dify API
```

Never write code such as:

```typescript
fetch("https://api.dify.ai/...")
```

inside the frontend application.

---

# 7. Response Delivery (JSON default, SSE optional)

The frontend MUST follow the response mode exposed by the NestJS API Gateway.

Default (NestJS request–response):

```text
Chat UI
 ↓
useChat()
 ↓
chat.service.ts
 ↓
API Client
 ↓
NestJS Gateway (JSON response)
 ↓
Chat State
 ↓
UI
```

SSE / streaming is optional. Implement it only when the NestJS API Gateway contract explicitly exposes a streaming endpoint or SSE response.

Optional streaming architecture (only if the Gateway supports it):

```text
NestJS Gateway SSE
 ↓
Frontend SSE Client
 ↓
Chat State
 ↓
Streaming UI
```

The frontend MUST NOT:

* assume Dify's internal SSE format
* enable SSE only because Dify supports streaming
* invent a streaming contract when the Gateway returns a complete JSON response

When SSE is supported by the Gateway, the frontend is responsible for:

* opening the stream
* sending the user request
* parsing backend-defined SSE events
* incrementally updating assistant content
* handling completion
* handling errors
* handling cancellation when supported
* cleaning up connections
* preventing duplicated content
* preventing state updates after unmount

When SSE is not supported, the frontend MUST use the complete JSON response from NestJS and MUST NOT add a client-side streaming layer.

---

# 8. Authentication

Authentication is handled by the existing backend system.

The frontend is responsible for:

* login UI if required
* maintaining authentication state
* sending required authentication information to the API Gateway
* handling unauthorized responses
* redirecting unauthenticated users where appropriate
* logout UI

The frontend MUST NOT:

* implement authentication rules independently
* trust client-side authorization
* expose authentication secrets
* bypass backend authorization

Backend authorization is always authoritative.

---

# 9. Environment Variables

Public variables may use:

```text
NEXT_PUBLIC_*
```

Only non-sensitive configuration may be exposed to the browser.

Example:

```env
NEXT_PUBLIC_APP_NAME=StarterKit AI
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

Never expose:

* Dify API keys
* LLM API keys
* backend service secrets
* database credentials
* internal authentication secrets

Do not put secrets in `NEXT_PUBLIC_*`.

---

# 10. UI Principles

All reusable UI should prioritize:

* accessibility
* responsive behavior
* keyboard navigation
* clear loading states
* clear error states
* reusable composition
* consistent spacing
* consistent typography
* consistent interaction patterns

Use shadcn/ui for standard UI primitives whenever appropriate.

Use Lucide React for icons.

Do not introduce another UI library without a clear reason.

---

# 11. AI Chat UI

The chat system should support:

* user messages
* assistant messages
* streaming assistant messages when the Gateway supports SSE
* markdown
* GFM
* code blocks
* loading state
* error state
* empty state
* retry where supported
* stop generation where supported
* source citations
* message actions
* conversation history where supported

AI responses should be rendered safely.

Never render untrusted HTML directly.

---

# 12. State Management

Use the simplest appropriate state solution.

Use:

* React state for local UI state
* React Context only for genuinely shared application state
* TanStack Query for server state
* dedicated feature hooks for feature-level state

Do not introduce Redux or another global state library unless explicitly required by the project specification.

---

# 13. Validation

Use Zod for runtime validation of external data where appropriate.

API responses should not be blindly trusted when validation is required.

Prefer:

```text
API Response
 ↓
Validation
 ↓
Typed Data
 ↓
Application
```

---

# 14. Error Handling

Errors must be handled explicitly.

The UI should distinguish between:

* validation errors
* authentication errors
* authorization errors
* API errors
* network errors
* streaming errors when SSE is implemented
* unknown errors

Never expose raw internal backend errors to users unless the API contract explicitly defines them as safe.

---

# 15. Security

Always consider:

* XSS
* unsafe markdown rendering
* token exposure
* sensitive data exposure
* API endpoint exposure
* authentication state
* unauthorized requests
* SSE lifecycle when SSE is implemented
* error information leakage

Never trust client-side checks as authorization.

---

# 16. Code Quality

Follow:

* strict TypeScript
* ESLint
* Prettier
* single responsibility
* composability
* predictable naming
* small focused components
* reusable hooks
* typed API contracts

Avoid:

* duplicated business logic
* giant components
* deeply coupled components
* unnecessary abstractions
* premature optimization
* undocumented magic values

---

# 17. Specification-Driven Development

Before implementing a feature:

1. Read `AGENTS.md`
2. Read the relevant feature specification
3. Read the API contract
4. Inspect existing implementation
5. Identify dependencies
6. Create an implementation plan
7. Implement the smallest required change
8. Run tests
9. Run lint/type checking
10. Review the diff

Do not implement behavior that is not defined by the specification unless explicitly requested.

---

# 18. Reusability

The starter kit must remain business-agnostic.

Avoid hardcoding:

```text
TDS
SDS
Chemical
Behn Meyer
Product X
```

inside generic components.

Business-specific configuration should live in application configuration or feature-level implementations.

---

# 19. Testing

Every important feature should have appropriate tests.

Unit tests:

* utilities
* parsers
* validation
* hooks
* state transformations

Integration tests:

* API services
* SSE handling when the Gateway contract includes SSE
* feature integration

E2E tests:

* authentication flow
* chat flow
* streaming response when the Gateway contract includes SSE
* conversation flow
* critical user journeys

---

# 20. Definition of Done

A feature is considered complete when:

* it follows the relevant specification
* it follows the architecture
* API contracts are respected
* TypeScript passes
* ESLint passes
* tests pass
* loading/error states are handled
* security requirements are satisfied
* no secrets are exposed
* no unrelated files are modified
* code is reusable where appropriate
* implementation does not introduce unnecessary dependencies

---

# 21. Important Rule

When requirements conflict with existing implementation:

Do not silently redesign the architecture.

Explain:

1. the conflict
2. the impact
3. the recommended solution

Then wait for explicit approval if the change affects architecture or API contracts.
