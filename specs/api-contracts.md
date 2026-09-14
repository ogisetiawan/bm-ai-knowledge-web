# Frontend API Contract

## 1. Purpose

This document defines the API contract required by the frontend.

The backend implementation is owned by the existing NestJS API Gateway.

This specification must reflect the actual backend contract.

The frontend must not invent undocumented API behavior.

---

# 2. Base URL

Configured using:

```env
NEXT_PUBLIC_API_BASE_URL=
```

Example:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

---

# 3. Authentication

Authentication endpoints are provided by the existing API Gateway.

Frontend requirements:

* login
* logout
* authentication state
* unauthorized handling
* session expiration handling

The exact endpoint and payload must follow the existing backend contract.

---

# 4. AI Chat

The frontend requires an AI chat endpoint exposed by the API Gateway.

Conceptual request:

```http
POST /ai/chat
```

Example payload:

```json
{
  "conversationId": "conversation-id",
  "message": "What is Product X?"
}
```

The actual endpoint and request schema MUST match the existing NestJS implementation.

---

# 5. Response Modes

The default response mode is a complete JSON response from the NestJS API Gateway.

Conceptual flow (default):

```text
POST /ai/chat
        ↓
JSON response
        ↓
Validation
        ↓
Chat state
        ↓
UI
```

SSE / streaming is optional.

Implement a streaming client only when the existing NestJS API Gateway contract explicitly returns an SSE stream.

Optional flow (only if the Gateway supports SSE):

```text
POST /ai/chat
        ↓
SSE response
        ↓
Frontend SSE parser
        ↓
Chat state
        ↓
UI
```

The exact response schema, including any SSE event schema, MUST be taken from the existing API Gateway.

The frontend must not assume Dify's original event structure.

Do not invent a streaming contract when the Gateway returns a complete JSON body.

---

# 6. Event Handling

If the Gateway uses request–response JSON, handle the complete payload. Do not invent incremental events.

If the Gateway exposes SSE, support only the backend-defined event categories. Example names (not a contract):

```text
message/content
source
completion
error
```

The implementation MUST use the actual event contract.

---

# 7. Error Contract

The frontend requires a normalized backend error structure.

If the existing API provides:

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

the frontend should map this to the appropriate UI behavior.

Internal backend errors must not be exposed directly.

---

# 8. Contract Change Policy

If the backend API changes:

1. Update this specification.
2. Update TypeScript types.
3. Update validation schemas.
4. Update API services.
5. Update affected features.
6. Update tests.

Do not create compatibility hacks without documenting them.
