# AGENTS.md

## Project Overview

`bm-ai-knowledge-web` is a project provides a standardized frontend architecture for applications that consume an existing backend API Gateway responsible for authentication, AI orchestration, RAG, and integration with AI providers.

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

Build a AI frontend foundation that can support multiple applications such as:

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

# 6. Response Delivery (JSON default, SSE optional)

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

# 7. Authentication

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

# 8. UI Principles

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

# 9. AI Chat UI

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

# 10. Validation

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

# 11. Error Handling

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

# 12. Security

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

# 13. Code Quality

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

# 14. Specification-Driven Development AI Agent

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

# 15. Testing

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

# 16. Validation Execution Policy

By default, the AI Agent MUST NOT automatically run expensive validation commands after every code change.

The following commands should be skipped unless explicitly requested:

- ESLint
- TypeScript type checking
- Production build
- Headless browser tests
- Full test suite


Default behavior after implementation:

- Review changed files
- Check code consistency
- Explain expected validation steps


Run validation commands only when:

- explicitly requested by the user
- preparing a final implementation review
- debugging related issues
- verifying a critical change
- required by the project workflow


Examples:

User:
"Implement login page"

Agent:
- modify code
- review affected files
- do not automatically run lint/build


User:
"Implement login page and verify"

Agent:
- modify code
- run required validation
- report results

---