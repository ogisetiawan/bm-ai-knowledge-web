# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).

The major version is `0` because the application is still in initial development (SemVer item 4). **`package.json` stays at `0.1.0` until the first intentional release** (deploy, tag, or integrated Gateway milestone). Until then, record work under `[Unreleased]` only.

When you cut a release, bump version using:

- **PATCH** — polish or fix in an existing screen
- **MINOR** — new UI area or major slice (plan **1.0.0** for first production-ready integrated release)
- **MINOR** (pre-1.0) — breaking UI or structure changes before integration

## How to update this file

### Project phase (current)

The app is **pre-deploy UI foundation**: landing, workspace shell, sidebar, chat UI/demo, and placeholders. **No NestJS Gateway integration yet.** Changelog entries describe **shipped UI and behavior in the repo**, not backlog items in `FEATURE.md`.

You do **not** need a new version number on every commit or push.

### Day-to-day (recommended)

1. **Default — “update changelog”:** append bullets under `[Unreleased]` only. Do **not** change `package.json` / `package-lock.json`.
2. **Cut a version — “release changelog” / “bump version”:** move `[Unreleased]` into `## [x.y.z] - YYYY-MM-DD`, apply semver, set `version` in `package.json` and the root entries in `package-lock.json`, then commit (optional `git tag vx.y.z`).
3. **Cadence:** cut a version when a **UI milestone** is done or before staging/production deploy — not per commit.

### What to include or skip

**Include:** routes and pages users can open, layout/navigation, chat/landing components, design-token changes that affect the app, fixes to UI behavior.

**Skip:** Cursor skills, `.cursor/` rules, internal specs-only edits, agent tooling, refactors with no visible change, items still only listed in `FEATURE.md`.

Group bullets by area (`landing`, `auth UI`, `workspace`, `chat`) when helpful.

### Agent prompt (copy when asking the AI)

```text
Update CHANGELOG.md for bm-ai-knowledge-web.

Phase: pre-deploy UI only, no Backend/Gateway integration yet.

Rules:
- Read git commits (and diff) since the latest version in CHANGELOG.md / package.json.
- Add user-facing notes under [Unreleased] only, unless I explicitly say "release", "bump version", or "cut release".
- If cutting a release: semver 2.0.0 on 0.x, move [Unreleased] to a dated section, bump package.json + package-lock.json root version.
- Do not log FEATURE.md backlog unless it was implemented.
- Write changelog bullets in English; keep them short and outcome-focused.
```

Commit `CHANGELOG.md` with the codebase so the next agent run can diff from the last recorded version.

## [Unreleased]

### Added

#### Landing

- Landing page with site navigation, hero, typewriter prompt preview, and landing content configuration.
- Responsive site menu with sign-in entry points and updated hero copy.

#### Auth UI

- Sign-in dialog and form with client-side validation, error handling, and auth service boundary for the API Gateway (UI only; not wired to live auth).

#### Workspace

- Workspace shell, sidebar, account section, and navigation for chat, dashboard, knowledge placeholders, and account routes.
- Shared design tokens and global styles aligned across landing, workspace, and chat surfaces.
- Brand and document-type icons for marketing and chat attachment UI.

#### Chat

- Workspace chat page with prompt input, messages, markdown, code blocks, suggestions, and source display.
- Chat input action buttons and chat-actions input pattern; shared `ChatPrompt` component.
- Conversation history UI with grouped sessions, sample data, chat history route, and demo routes.
- Assistant message actions (copy, feedback), chain-of-thought / thinking UI, system messages, AI disclaimer patterns, and improved source citations on the chat demo flow.

### Changed

- Replaced the Create Next App starter with the landing-first layout and workspace layout structure.
- Refactored the former app-shell into workspace-specific shell and sidebar components.

## [0.1.0] - 2026-09-13

### Added

- Initialized the Next.js application with TypeScript, Tailwind CSS, and ESLint.

[0.1.0]: https://github.com/ogisetiawan/bm-ai-knowledge-chat/commit/94f3ffd
