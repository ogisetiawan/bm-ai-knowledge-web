# Source Citation Feature Specification

## 1. Purpose

Display supporting documents returned by the AI backend.

---

# 2. Source Data

Potential fields may include:

```typescript
interface Source {
  id: string;
  title: string;
  documentName?: string;
  section?: string;
  page?: number;
  relevance?: number;
}
```

These fields are conceptual.

The actual structure MUST follow the NestJS API contract.

---

# 3. UI Components

```text
SourceList
SourceCard
Citation
```

---

# 4. Rules

The frontend must:

* display backend-provided source data
* preserve source ordering where meaningful
* support expandable source details
* handle missing optional fields

The frontend must NOT:

* invent page numbers
* invent document names
* invent citations
* calculate unsupported relevance scores
* modify source content

---

# 5. Empty Source State

If no source information is returned:

Do not create fake citations.

The UI may simply omit the source section.
