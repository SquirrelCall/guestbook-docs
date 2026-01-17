# Guestbook Documentation Site

This repository contains the public documentation site for the Guestbook platform.

It defines how the system is understood, operated, and extended by different audiences, and is considered part of the product itself.

---

## What This Site Is

A single, structured documentation site designed to serve:

- End users interacting with Guestbook kiosks
- Administrators deploying and managing Guestbook
- Developers and integrators extending or integrating with Guestbook

All audiences share the same site, but not the same mental model.

---

## What This Site Is Not

- Three separate documentation sites
- A dumping ground for internal notes
- A component-by-component reference
- An auto-generated API catalog pretending to be documentation

Clarity and intent take precedence over exhaustiveness.

---

## Documentation Model

The site is organized by **audience**, not by technical layer.

Top-level silos:
- Users
- Administrators
- Developers & Integrators

Each silo has:
- A required landing page
- Its own navigation subtree
- Clear assumptions about reader knowledge

Audience boundaries are intentional and enforced.

---

## Design Principles

- Familiar over novel
  The layout should feel immediately recognizable to users of mature open-source projects.

- Explicit over implicit
  Cross-audience references must be labeled and intentional.

- Structured over clever
  The navigation model is a guardrail, not a suggestion.

- Scalable over complete
  The structure must support future growth without reorganization.

---

## Navigation & Layout

- Persistent top navigation with project identity and search
- Left-hand sidebar as the primary navigation surface
- Audience-scoped accordion navigation
- Central content pane with consistent page anatomy

The layout is designed to support deep hierarchies without visual or cognitive clutter.

---

## Contribution Guidelines (High Level)

Before adding or modifying content, contributors should ask:

- Who is this for?
- Where does it live?
- What problem does it solve?
- Does it introduce assumptions from another audience?

If those questions don’t have clean answers, stop and reassess.

Detailed contributor rules live in `AGENTS.md`.

---

## Future-Facing by Design

The site is designed to support, without restructuring:

- Versioned documentation
- API reference sections
- Architecture and concepts sections
- Release notes and advisories

These are anticipated, not pre-emptively scaffolded.

---

## Motto

**Clarity beats completeness.**
**Structure beats cleverness.**
**Design beats accretion.**

This is not just documentation.
It is part of the Guestbook platform.
