# Documentation Site – Implementation Plan

## Goal

Implement a durable, audience-scoped documentation site that enforces the design model at build time, scales cleanly, and resists structural drift.

This plan prioritizes **structure and enforcement first**, content second.

---

## Phase 1: Foundation & Constraints

### 1. Project Setup
- Initialize the documentation site using Next.js with MDX support.
- Maintain a single documentation application (no per-audience sites).
- Decide deployment target early (Vercel or static export) to avoid routing rewrites later.

### 2. Canonical Sources
- Treat `projectDesignModel.md` as the authoritative design reference.
- Treat `AGENTS.md` as normative for contributors and automation.
- Keep design/spec documents separate from publishable documentation content.

---

## Phase 2: Content Model & Contracts

### 3. Required Frontmatter Schema
All documentation pages must include the following frontmatter fields:

- `title` – Page title
- `audience` – One of: `users`, `administrators`, `developers`
- `summary` – Short explanation of why the page exists
- `url_prefix` – Derived from audience (`/docs/users`, `/docs/admin`, `/docs/developers`)
- `nav_order` – Explicit ordering within the audience navigation

The build must fail if any required field is missing.

---

### 4. Page Anatomy Enforcement
The base MDX layout must render content in the following order:

1. Page title
2. Summary block (from frontmatter)
3. Audience label
4. Page content

Pages may not omit, reorder, or override this structure.

---

## Phase 3: Navigation & Layout

### 5. Global Layout
- Persistent top navigation containing:
  - Project identity
  - Search placeholder (non-functional acceptable for MVP)
- Left-hand sidebar as the primary navigation surface
- Central content pane for documentation pages

The layout must support deep hierarchies without visual clutter.

---

### 6. Audience-Scoped Sidebar
- Sidebar navigation is generated from frontmatter, not file order.
- Top-level navigation sections are exactly:
  - Users
  - Administrators
  - Developers & Integrators
- Sidebar uses accordion behavior:
  - Only one audience section may be expanded at a time
  - Expanding one section collapses the others

Audience landing pages are mandatory and pinned to the top of each section.

---

## Phase 4: Content Scaffolding

### 7. Audience Landing Pages
Create one landing page per audience that:

- Clearly states who the section is for
- Defines scope and assumptions
- Explicitly redirects non-target readers

Landing pages must exist before adding subpages.

---

### 8. Initial Page Set
Scaffold a minimal but coherent set of pages per audience:

- Landing page
- Overview or getting-started page
- One operational or conceptual page

Avoid completeness. Focus on validating structure and guardrails.

---

## Phase 5: Guardrails & Validation

### 9. Audience Boundary Enforcement
Add lightweight validation rules:

- Every page must declare exactly one audience
- Cross-audience links must be explicit and labeled
- Pages that attempt to serve multiple audiences trigger review

Enforcement should be structural rather than heuristic.

---

### 10. Build-Time Checks
Fail the build if:

- Required frontmatter fields are missing
- A page is not reachable from its audience navigation tree
- An audience silo lacks a landing page

Emit warnings (not failures) for:

- Excessive nesting depth
- Orphaned pages

---

## Phase 6: UX Refinement (MVP Scope)

### 11. Visual Restraint
- Clean typography
- Minimal UI
- No decorative chrome
- Subtle audience indicators only

The UI should feel familiar to users of mature open-source documentation sites.

---

### 12. Search Placeholder
- Render a search input in the top navigation
- Non-functional behavior is acceptable initially
- Layout and keyboard focus must be stable

---

## Phase 7: Deployment & Verification

### 13. Preview Deployment
- Deploy an internal preview build
- Validate:
  - Navigation behavior
  - Audience boundary enforcement
  - Page anatomy consistency

---

## Definition of Done (MVP)

- Three audience landing pages exist
- Sidebar enforces one-open-at-a-time accordion behavior
- Every page renders title, summary, and audience label
- Build fails on missing required frontmatter
- No page serves mixed audiences
- Deployed preview is accessible

---

## Guiding Principle

This site is not just documentation.

It is part of the product experience.

**Clarity beats completeness.**
**Structure beats cleverness.**
**Design beats accretion.**
