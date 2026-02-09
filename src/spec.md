# Specification

## Summary
**Goal:** Republish the existing CallCraftAI marketing frontend so it reliably serves from the intended production domain (callcraftai.caffeine.xyz) and add a simple on-page way to confirm which hostname is serving the build.

**Planned changes:**
- Republish/reconfigure deployment so callcraftai.caffeine.xyz serves the current React SPA (not a placeholder) and is not dependent on the draft/temporary URL.
- Add a lightweight footer indicator that displays `window.location.hostname` (e.g., “Domain: <current-hostname>”) and ensure it remains unobtrusive on mobile and desktop.

**User-visible outcome:** Visiting and sharing callcraftai.caffeine.xyz consistently loads the live CallCraftAI site, and the footer shows the current domain to verify which URL is serving the page.
