# AISG Reflect — Demo Prototype

A standalone, clickable prototype for an AI-supported teacher reflection and professional growth platform.

## Open the prototype

Open `index.html` directly in a modern browser. For a presentation, you can also serve the folder locally with a simple static web server.

No packages, build step, API key, database, or internet connection are required for the demo.

## What works in the prototype

- AISG-inspired teacher dashboard
- Start Reflection 3-step flow
- Local file-selection UI (files are not uploaded anywhere)
- “What are you wondering?” prompt
- Framework-lens selection
- Simulated AI processing flow
- Framework-grounded reflection screen
- Evidence / interpretation / possibility distinction
- Connected Practice across TLF, UDL, MTSS/Tier 1, and Teacher Growth Continuum
- AI Coach demo conversation
- Adapt This before/after experience
- Voice reflection demo
- Classroom-video upload and reflection demo with timestamped evidence
- My Growth timeline
- Framework Library and source-of-truth model
- Responsive desktop/tablet/mobile layout

## Important

This is a **prototype**. The AI responses are seeded demo content. The app does not send files or text to any server.

The intended next architecture step is to replace the simulated AI service with a live provider while retaining the same user experience.

## Source material represented in the demo

Primary AISG sources:

- `TLF Learning Engagement Indicators (2).pdf`
- `TEACHER Growth and Reflection Framework 2627 (6).pdf`
- `WASC Action Plan 070126(Being).csv`
- AISG internal MTSS/Tier 1 direction from `Leading the Conditions for Engagement for All v.2.pdf`

Supporting authoritative research sources:

- CAST UDL Guidelines 3.0
- MTSS Center Essential Components

## Privacy model represented in the UX

The prototype intentionally treats teacher evidence as private by default and avoids teacher scoring, ranking, compliance percentages, or surveillance-oriented language.

## Prototype v0.3

- Uses the supplied AISG logo with a transparent background in the application header.
- Includes a dedicated classroom-video upload space on the Video Reflection screen.
- Uploaded videos are previewed locally in the browser for prototype demonstrations.
- Includes an optional reflection focus for future AI video analysis.
- Includes a simulated video-analysis action showing how timestamped evidence and AISG framework-grounded feedback can appear once a live AI/video pipeline is connected.

In this prototype, selected classroom videos are not sent to a server. A production implementation must use private storage, explicit retention controls, consent/privacy safeguards, transcription, and secure multimodal processing.

## GitHub Pages

This repository is intentionally structured as a static site: `index.html` is at the repository root and the logo is under `assets/`. Once GitHub Pages is enabled for the `main` branch, the prototype can be shared as a normal web link.
