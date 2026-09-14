# Conversation Feature Specification

## 1. Purpose

Manage AI conversation state and history.

---

# 2. Capabilities

Where supported by the backend:

* create conversation
* list conversations
* load conversation
* switch conversation
* rename conversation
* delete conversation
* start new conversation

Only implement capabilities supported by the actual API.

---

# 3. UI

Reusable components:

```text
ConversationList
ConversationItem
ConversationHeader
NewConversationButton
```

---

# 4. State

Conversation state should be separated from UI state.

Example:

```text
Conversation
    ↓
Messages
    ↓
Chat UI
```

---

# 5. Persistence

Conversation persistence is owned by the backend.

The frontend should not create its own persistent conversation database.

Local persistence should only be used if explicitly required.
