# Frontend Security Specification

## 1. Security Boundary

The frontend is an untrusted client.

All authorization decisions must be enforced by the backend.

---

# 2. Secrets

Never expose:

* Dify API keys
* LLM API keys
* backend service credentials
* database credentials
* private tokens
* internal API credentials

Never put secrets inside:

```text
NEXT_PUBLIC_*
```

---

# 3. Dify

The frontend must never communicate directly with Dify.

Forbidden:

```text
Browser → Dify
```

Required:

```text
Browser → NestJS Gateway → Dify
```

---

# 4. Authentication

Authentication state must be handled according to the existing API Gateway authentication contract.

The frontend must:

* handle expired authentication
* handle unauthorized responses
* redirect when required
* clear client authentication state when required

The frontend must not implement its own authorization logic.

---

# 5. XSS

AI-generated content must be considered untrusted.

Do not render arbitrary HTML directly.

Markdown rendering must use safe configuration.

---

# 6. API Errors

Do not expose internal errors such as:

```text
stack traces
database errors
internal service URLs
Dify credentials
internal infrastructure information
```

to end users.

---

# 7. SSE Security (optional)

Apply this section only when the NestJS API Gateway exposes SSE.

SSE implementation must:

* terminate connections correctly
* handle authentication failures
* handle network errors
* handle malformed events
* prevent duplicate messages
* clean up on component unmount
* support cancellation where available

If the Gateway uses request–response JSON, these stream-lifecycle rules do not apply.

---

# 8. Sensitive Information

Do not unnecessarily store AI conversations or backend responses in:

* localStorage
* sessionStorage
* URL parameters
* browser logs

unless explicitly required by the specification.
