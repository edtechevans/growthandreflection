# AISG Reflect — Demo Prototype

AISG Reflect is a browser-first, AI-supported professional reflection prototype for teachers. It is designed around a simple principle: **reflection, not rating; evidence, not judgement; growth, not compliance.**

## Live prototype

https://edtechevans.github.io/growthandreflection/

The prototype is a static GitHub Pages site. No packages or build step are required.

## Product experience

The current prototype is designed primarily as a professional web application for laptop use, with a fast companion experience on mobile.

Teachers can begin a reflection from:

- classroom video
- voice reflection / audio
- unit, lesson, assessment, PDF, DOCX, PPTX, image or text file
- written or pasted evidence

The core flow is intentionally simple:

**Bring evidence → add an optional wondering → reflect → decide what matters next.**

The demo AI then separates observable evidence from interpretation and possible next moves, connecting only the AISG frameworks that genuinely help make sense of the evidence.

## Key prototype features

- persistent desktop navigation and mobile bottom navigation
- evidence-first reflection workflow
- local classroom-video selection and preview
- browser voice recording with audio-upload fallback
- file evidence upload UI
- optional wondering and quick reflection prompts
- simulated AI processing and framework-grounded responses
- Evidence / Interpretation / Possibility distinction
- Connected Practice across TLF, Teacher Growth, UDL and MTSS / Tier 1
- **My Goal** with TLF facet, Growth domain and evidence to watch for
- **goal-aware, not goal-forced** reflection logic
- My Growth evidence/reflection timeline without scores or percentages
- follow-up reflection coach, including the ability to challenge an AI interpretation
- source-of-truth view for AISG frameworks
- responsive layouts for desktop, tablet and mobile
- keyboard focus states, reduced-motion support and accessibility-minded semantics

## My Goal model

The prototype currently simulates a teacher goal. A production version can pull the teacher's selected annual goal from AISG's Growth & Reflection platform.

The intended model is:

**Professional Goal → TLF Facet → Growth Domain → Evidence I'm Watching For → Reflections + Evidence → Experiments / Next Moves → Learning over time**

There is deliberately no percentage complete, traffic-light status, performance score or AI rating.

## AI and privacy

This remains a **demo**. AI responses are seeded and files are kept in the local browser experience; the prototype does not upload evidence to a live AI service.

A production implementation will require private authenticated storage, explicit retention/deletion controls, secure transcription and multimodal processing, framework retrieval, source/version metadata, prompt-injection safeguards, and clear sharing controls.

The product should remain teacher-controlled and private by default. Classroom video is framed as evidence a teacher chooses to revisit, not surveillance.

## Source material represented in the demo

Primary AISG sources include:

- TLF Learning Engagement Indicators
- Teacher Growth & Reflection Framework
- WASC Action Plan
- AISG MTSS / strong inclusive Tier 1 direction

Supporting research lenses include CAST UDL Guidelines and authoritative MTSS guidance.

## Repository structure

The prototype keeps a lightweight static architecture compatible with GitHub Pages:

- `index.html` — page shell and asset loading
- `partials/` — page markup sections
- `styles1.css` to `styles4.css` — design system, responsive layouts and component styling
- `app.js` + `app-parts/` — interaction layer and seeded reflection logic
- `logo1.js` to `logo5.js` — supplied transparent AISG logo asset
- `AI_INTEGRATION.md` — notes for moving from demo responses to a live grounded-AI architecture

## Current design direction

The interface aims for a calm, credible educational experience: strong hierarchy and restraint, predictable interactions, educator-centered language, serious learning design, useful interaction feedback, and clear scaffolding — while remaining recognisably AISG rather than imitating another product.
