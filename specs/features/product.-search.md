# Product Search Feature Specification

## 1. Purpose

Provide a frontend experience for searching product-related knowledge through the existing AI API.

---

# 2. Search Flow

```text
User query
    ↓
Frontend
    ↓
NestJS Gateway
    ↓
AI / RAG
    ↓
Response
    ↓
Frontend
```

---

# 3. Frontend Responsibility

Frontend handles:

* search input
* loading
* results
* empty state
* errors
* result selection
* source display

Backend handles:

* search
* retrieval
* ranking
* AI reasoning

---

# 4. Result Model

The actual model must follow the API contract.

Potential conceptual fields:

```typescript
interface ProductSearchResult {
  id: string;
  name: string;
  description?: string;
  sources?: Source[];
}
```

Do not assume these fields exist until confirmed by the backend.
