# AI Chat Feature Specification

## 1. Purpose

Provide an interactive AI chat experience using the existing NestJS API Gateway.

---

# 2. User Flow

```text
User opens chat
    ↓
User enters question
    ↓
User submits
    ↓
Frontend creates/uses conversation
    ↓
Frontend sends request to API Gateway
    ↓
Gateway returns a complete JSON response (default)
    or an SSE stream (only if the Gateway contract supports it)
    ↓
Assistant message is rendered
    ↓
Sources are displayed when provided
    ↓
Response completes
```

---

# 3. Chat Components

Required reusable components:

```text
Chat
ChatHeader
ChatInput
MessageList
MessageBubble
StreamingMessage (optional, only if Gateway SSE exists)
MessageActions
ChatEmptyState
ChatError
TypingIndicator
```

---

# 4. Message Model

Conceptual model:

```typescript
type MessageRole =
  | "user"
  | "assistant"
  | "system";

interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
}
```

Additional metadata may be added based on the backend contract.

---

# 5. Sending Message

When the user sends a message:

1. Validate input.
2. Add user message to UI.
3. Create assistant loading state.
4. Send request to API Gateway.
5. Consume the Gateway response:
   - default: complete JSON body
   - optional: SSE stream, only if the Gateway contract exposes it
6. Update the assistant message (once for JSON, incrementally for SSE).
7. Process sources when provided.
8. Mark response as complete.

---

# 6. Loading State

The UI must clearly indicate that the assistant is processing.

Example:

```text
User message
      ↓
"AI is thinking..."
      ↓
Complete JSON response (default)
or streaming response (only if Gateway SSE exists)
```

The interface must remain responsive.

---

# 7. Error State

If the request fails:

* preserve the user's message
* stop streaming if SSE is active
* display a friendly error
* allow retry when supported
* clean up the connection if SSE is active

Do not expose internal backend errors.

---

# 8. Streaming (optional)

Implement only when the NestJS API Gateway exposes SSE. Dify SSE does not by itself require a frontend SSE client.

When implemented, streaming must:

* support incremental content
* support partial chunks
* support completion
* support errors
* prevent duplicate content
* clean up connections
* handle cancellation where available

---

# 9. Markdown

Assistant messages may contain Markdown.

Support:

* headings
* lists
* tables
* links
* code blocks
* emphasis

Unsafe HTML must not be rendered directly.

---

# 10. Sources

If the backend returns sources, display them below or alongside the relevant response.

Source information must originate from the backend.

The frontend must not generate citation metadata.

---

# 11. Empty State

When no messages exist, display a useful empty state.

The empty state should be configurable and must not contain business-specific terminology in the reusable component.

---

# 12. Accessibility

Chat must support:

* keyboard input
* accessible labels
* focus management
* readable message hierarchy
* screen-reader friendly status updates where appropriate

---

# 13. Performance

When streaming is implemented, avoid unnecessary re-rendering of the entire conversation.

Streaming updates should update only the relevant assistant message where practical.
