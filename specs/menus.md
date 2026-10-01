# AI Knowledge Platform — Menu Structure

This document defines the menu hierarchy and features for implementation by a Cursor agent.

## Implementation Guidelines

- Use `Menu > Sub-menu > Feature` as the information hierarchy. Descriptions at the top-level menu are not separate navigation items.
- Show sub-menus marked **Optional** only when the corresponding module is enabled.
- Do not implement menus marked **Future Plan** as active features yet; keep the structure extensible so they can be added later.
- Show `Administration` only to users with administrator permissions. Access to content in `Knowledge Center` and `Chat` must follow each user's authorization.
- `Document Summarization` is accessible through `Chat`; its dedicated page under `Document Intelligence` is a complementary entry point.

## 1. Home / Dashboard

**Purpose:** Provide a platform overview and quick access to frequently used AI knowledge functions and activities.

| Sub-menu | Feature | Description | Status |
| --- | --- | --- | --- |
| Dashboard | Quick Access | Shortcuts to frequently used knowledge, tools, and AI functions. | Core |
| Dashboard | Recent Activity | Recently accessed documents, searches, conversations, and activities. | Optional |
| Dashboard | AI Usage Summary | Overview of AI usage, such as query counts, active users, and AI interactions. | Optional |
| Dashboard | Popular Search | Frequently searched questions, topics, or knowledge areas. | Optional |
| Dashboard | Latest Updates | Newly added or updated documents and knowledge content. | Optional |

## 2. Chat

**Purpose:** Enable conversational AI interactions for searching and understanding enterprise knowledge.

| Sub-menu | Feature | Description | Status |
| --- | --- | --- | --- |
| Chat | AI Knowledge Chat | Ask questions in natural language and receive AI-generated answers based on authorized knowledge sources. | Core |
| History | Conversation History | View and continue previous AI conversations. | Core |
| Saved Answers | Saved AI Responses | Save useful AI-generated answers for future reference. | Core |
| Prompt Library | Prompt Templates | Predefined prompts for common business tasks, so users can complete AI-assisted activities without writing prompts from scratch. | Future Plan |

## 3. Knowledge Center

**Purpose:** Provide structured access to enterprise knowledge, including products, procedures, policies, regulations, and documents.

| Sub-menu | Feature | Description | Status |
| --- | --- | --- | --- |
| Product Knowledge | Product Information Search | Search product information, specifications, technical documents, and related product knowledge. | Core |
| SOP & Policies | Procedure & Policy Search | Search corporate policies, SOPs, guidelines, and business procedures. | Core |
| Regulations | Regulatory Knowledge Search | Access relevant regulatory, compliance, and industry information. | Core |
| Document Repository | Knowledge Document Browser | Browse and open documents according to the user's access permissions. | Core |

## 4. Document Intelligence — Optional

**Purpose:** Offer AI-powered document processing, including summarization, translation, comparison, and data extraction. This entire menu is optional.

| Sub-menu | Feature | Description | Status |
| --- | --- | --- | --- |
| Summarize | Document Summarization | Generate a concise summary of an uploaded or selected document. This capability is already available through Chat; a dedicated page makes it easier to access. | Optional |
| Translate | Document Translation | Translate document content into a selected language while preserving its original context as much as possible. | Optional |
| Compare Documents | Document Comparison | Identify differences, changes, and similarities between two or more documents. | Optional |
| Extract Data | Information Extraction | Extract selected information, fields, tables, or key data from documents into a structured format. | Optional |

## 5. Saved Workspace — Optional

**Purpose:** Provide a personal workspace for saving and organizing searches, answers, documents, and knowledge collections. This entire menu is optional.

| Sub-menu | Feature | Description | Status |
| --- | --- | --- | --- |
| Bookmarks / Library | Knowledge Library | Centralized access to bookmarked documents, answers, and frequently referenced content. | Optional |
| Saved Searches | Saved Search Queries | Save frequently used search queries for quick reuse. | Optional |
| Collections | Personal Collections | Organize saved documents, answers, and searches into personal collections. | Optional |

## 6. Administration

**Purpose:** Allow authorized administrators to manage users, roles, permissions, and knowledge access.

| Sub-menu | Feature | Description | Status |
| --- | --- | --- | --- |
| User Management | User Administration | Create, update, activate, deactivate, and manage platform users. | Core — admin only |
| Role & Permission | Role Management | Define user roles and the permissions assigned to each role. | Core — admin only |
| Access Control | Knowledge Access Control | Control access to knowledge based on organization, country, department, role, or other authorization rules. | Core — admin only |

## 7. Knowledge Management — Future Plan

**Purpose:** Provide administrative capabilities for managing knowledge sources, documents, classification, and the AI knowledge base. This entire menu is planned for a later phase.

| Sub-menu | Feature | Description | Status |
| --- | --- | --- | --- |
| Knowledge Sources | Knowledge Source Management | Manage sources used for AI knowledge retrieval, such as system folders, SharePoint, databases, or other repositories. | Future Plan |
| Document Management | Knowledge Document Administration | Upload, update, archive, classify, and manage documents used by the AI knowledge base. | Future Plan |
| Knowledge Categories | Knowledge Classification | Define and manage categories, subcategories, and metadata used to organize knowledge content. | Future Plan |

## Navigation Hierarchy

```text
Home / Dashboard
└── Dashboard
    ├── Quick Access
    ├── Recent Activity [Optional]
    ├── AI Usage Summary [Optional]
    ├── Popular Search [Optional]
    └── Latest Updates [Optional]
Chat
├── Chat → AI Knowledge Chat
├── History → Conversation History
├── Saved Answers → Saved AI Responses
└── Prompt Library → Prompt Templates [Future Plan]
Knowledge Center
├── Product Knowledge → Product Information Search
├── SOP & Policies → Procedure & Policy Search
├── Regulations → Regulatory Knowledge Search
└── Document Repository → Knowledge Document Browser
Document Intelligence [Optional]
├── Summarize → Document Summarization
├── Translate → Document Translation
├── Compare Documents → Document Comparison
└── Extract Data → Information Extraction
Saved Workspace [Optional]
├── Bookmarks / Library → Knowledge Library
├── Saved Searches → Saved Search Queries
└── Collections → Personal Collections
Administration [Admin only]
├── User Management → User Administration
├── Role & Permission → Role Management
└── Access Control → Knowledge Access Control
Knowledge Management [Future Plan]
├── Knowledge Sources → Knowledge Source Management
├── Document Management → Knowledge Document Administration
└── Knowledge Categories → Knowledge Classification
```
