# Future AI Integration — Architecture Notes

## Core principle

The live AI should not answer from general model knowledge first. It should retrieve approved framework evidence first, then reason over the teacher's artifact and question.

## Intended request flow

1. Teacher creates a reflection.
2. Teacher adds evidence (text, file, voice transcript, video transcript/segments).
3. Teacher adds a wondering and optionally selects a lens.
4. System extracts and normalizes the evidence.
5. Retrieval layer searches approved sources:
   - AISG TLF
   - AISG Teacher Growth & Reflection Framework
   - AISG MTSS / Tier 1 guidance
   - AISG strategic / WASC sources
   - CAST UDL 3.0
   - MTSS Center
6. AI receives:
   - teacher evidence
   - teacher question
   - selected lens
   - retrieved source passages + metadata
   - response schema / coaching principles
7. AI returns structured fields:
   - evidence noticed
   - interpretation
   - framework connections
   - why the connection was made
   - reflective questions
   - one small next step
   - optional deeper possibilities
   - source references
8. UI renders these fields and lets the teacher challenge, edit, save, or ignore them.

## Critical safeguards

- Never create an overall teacher score.
- Distinguish evidence from interpretation.
- Never claim video evidence that was not actually detected.
- Source significant framework claims.
- If evidence is insufficient, say so.
- Teacher controls sharing.
- Uploaded documents are untrusted input; isolate them from system instructions and defend against prompt injection.
- Keep API keys server-side.

## Suggested later implementation

- Frontend: Next.js + TypeScript
- Data/Auth/Storage: Supabase/Postgres with row-level security
- Retrieval: Postgres full-text + pgvector (hybrid)
- AI provider interface: `DemoAIProvider` -> `LiveAIProvider`
- Speech-to-text: dedicated provider abstraction
- Video: asynchronous upload -> transcript -> timestamp segmentation -> optional frame analysis -> grounded reflection
