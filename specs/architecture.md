# Frontend Architecture Specification

## 1. Architecture

```text
┌──────────────────────────────┐
│          Browser             │
│                              │
│       Next.js App            │
│                              │
│ ┌──────────────────────────┐ │
│ │ UI Components            │ │
│ └────────────┬─────────────┘ │
│              ↓               │
│ ┌──────────────────────────┐ │
│ │ Feature Layer            │ │
│ │ chat / auth / document   │ │
│ └────────────┬─────────────┘ │
│              ↓               │
│ ┌──────────────────────────┐ │
│ │ Hooks / Application Logic│ │
│ └────────────┬─────────────┘ │
│              ↓               │
│ ┌──────────────────────────┐ │
│ │ Services                 │ │
│ └────────────┬─────────────┘ │
│              ↓               │
│ ┌──────────────────────────┐ │
│ │ API Client               │ │
│ └────────────┬─────────────┘ │
└──────────────┼───────────────┘
               │ HTTP
               │ (SSE optional, only if Gateway exposes it)
               ▼
┌──────────────────────────────┐
│     NestJS API Gateway       │
└──────────────────────────────┘
```

---

# 2. Layer Responsibilities

## UI Layer

Responsible for:

* rendering
* user interaction
* accessibility
* visual states

UI components should not contain API implementation.

---

## Feature Layer

Responsible for feature-specific behavior.

Examples:

```text
features/chat
features/auth
features/conversation
features/product
features/document
```

---

## Hook Layer

Responsible for coordinating UI and application behavior.

Examples:

```text
useChat()
useConversation()
useAuth()
useProductSearch()
```

---

## Service Layer

Responsible for API communication.

Example:

```text
chat.service.ts
auth.service.ts
conversation.service.ts
```

---

## API Client

Provides shared HTTP communication.

Responsibilities:

* base URL
* headers
* authentication
* request handling
* response handling
* common error normalization

---

# 3. AI Chat Architecture

```text
ChatInput
    ↓
useChat()
    ↓
chat.service.ts
    ↓
api-client.ts
    ↓
POST /ai/chat
    ↓
NestJS Gateway
    ↓
Dify
```

Default response path:

```text
POST /ai/chat
    ↓
NestJS Gateway JSON
    ↓
chat.service.ts
    ↓
Chat State
    ↓
MessageBubble
```

Optional streaming path (only if the Gateway contract exposes SSE):

```text
NestJS Gateway SSE
    ↓
SSE Client
    ↓
SSE Parser
    ↓
Chat State
    ↓
StreamingMessage
```

---

# 4. Provider Independence

The frontend must remain independent of the AI provider.

The frontend should know:

```text
AI Gateway
```

not:

```text
Dify
OpenAI
Anthropic
Gemini
Ollama
```

Provider-specific details belong to the backend.

This allows the backend to change AI providers without requiring frontend architectural changes.

---

# 5. Folder Architecture

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── login/
│   └── chat/
│
├── components/
│   ├── ui/
│   └── ai/
│
├── features/
│   ├── auth/
│   ├── chat/
│   ├── conversation/
│   ├── product/
│   └── document/
│
├── services/
│   ├── api/
│   │   ├── client.ts
│   │   └── errors.ts
│   │
│   └── ai/
│       └── chat.service.ts
│
├── hooks/
├── lib/
├── schemas/
├── types/
└── config/
```

---

# 6. Feature Internal Structure

Example:

```text
features/chat/
├── components/
│   ├── Chat.tsx
│   ├── ChatHeader.tsx
│   ├── ChatInput.tsx
│   ├── MessageList.tsx
│   ├── MessageBubble.tsx
│   ├── StreamingMessage.tsx   # optional, only if Gateway SSE exists
│   ├── MessageActions.tsx
│   └── ChatEmptyState.tsx
│
├── hooks/
│   └── useChat.ts
│
├── services/
│   └── chat.service.ts
│
├── parsers/
│   └── sse.parser.ts          # optional, only if Gateway SSE exists
│
├── schemas/
│   └── chat.schema.ts
│
├── types/
│   └── chat.types.ts
│
└── index.ts
```

---

# 7. Dependency Direction

Preferred dependency direction:

```text
app
 ↓
features
 ↓
services
 ↓
API Gateway
```

Generic components should not depend on business-specific features.

---

# 8. Server vs Client Components

Use Server Components by default.

Use Client Components only when interaction requires:

* React state
* event handlers
* browser APIs
* streaming when SSE is implemented
* interactive forms
* client-side hooks

AI chat interaction will generally require Client Components.

Do not mark the entire application with `"use client"` unnecessarily.
