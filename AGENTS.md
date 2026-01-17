# Documentation Agents & Responsibilities

This document defines the roles, expectations, and boundaries for humans and automated agents contributing to the Guestbook documentation site.

Its purpose is to preserve clarity, consistency, and intent as the documentation grows.

This file is normative.

---

## Core Principle

The documentation site is part of the product.

Clarity beats completeness.
Structure beats cleverness.
Design beats accretion.

Any contribution that violates these principles should be revised or rejected.

---

## Audience Model (Hard Boundary)

All documentation content MUST belong to exactly one of the following audiences:

- Users
- Administrators
- Developers & Integrators

If a page cannot be clearly assigned to one audience, it does not belong in the site yet.

Cross-audience references are allowed, but implicit cross-audience assumptions are not.

---

## Human Contributors

### Responsibilities
- Place new content in the correct audience silo.
- Ensure each page clearly states who it is for.
- Maintain consistent page anatomy and tone.
- Avoid introducing mixed-audience explanations.
- Prefer explicit links over duplicated explanations.

### Constraints
- Do not reorganize navigation casually.
- Do not add top-level sections without reviewing the design model.
- Do not introduce “miscellaneous” or “catch-all” pages.

---

## AI / Automation Agents

Automation agents (including scaffolding tools, LLMs, and static generators) are allowed to:

- Scaffold page structure within an existing audience silo.
- Expand outlines into draft content.
- Normalize formatting and headings.
- Generate navigation trees that follow the silo model.

Automation agents must NOT:

- Invent new audiences or collapse existing ones.
- Move content across audience boundaries without explicit instruction.
- Generate pages that rely on unstated knowledge from another silo.
- Optimize for cleverness or novelty over clarity.

When uncertain, agents should prefer omission over invention.

---

## Page Anatomy Contract

Every page must include:
1. A clear page title
2. A short contextual summary explaining why the page exists
3. Scoped sections appropriate to the audience
4. Minimal nesting depth
5. No assumed cross-audience knowledge

Automation agents should treat this structure as mandatory.

---

## Navigation Rules

- Audience sections are the primary navigation axis.
- Only one audience section should be expanded at a time.
- Audience landing pages are mandatory and may not be removed.
- New pages must fit naturally into the existing hierarchy or trigger review.

Agents should not “flatten” or auto-generate navigation based solely on file structure.

---

## Review Triggers

The following conditions require human review:

- A page references multiple audiences without explicit labeling.
- A page introduces new terminology without context.
- A page feels applicable “to everyone.”
- A page exists primarily to link elsewhere without adding clarity.

---

## Longevity Clause

This document exists to outlive the first version of the site.

When in doubt, preserve intent over convenience.
