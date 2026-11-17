# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Recruiters hiring for junior or internship frontend roles, and small clients looking for a freelance web developer. They skim: they want to see real work quickly, then reach Juan or download a CV.

## Product Purpose
Personal portfolio of Juan Llanos, a frontend developer and Systems Engineering student at Universidad del Magdalena. It shows projects, background and skills, and converts visits into contact messages or CV downloads. Success is a recruiter or client contacting him or opening a project demo.

## Positioning
A student's first-hand frontend work, shipped as live demos, in Spanish and English.

## Capabilities and Constraints
- Astro 5 + Tailwind 3 static site, deployed to Firebase Hosting.
- Bilingual: Spanish (default, root routes) and English (`/en`). Pages: home, about, projects, contact.
- Contact form posts to formsubmit.co.
- Content stays as is for the redesign (texts, projects, CV, links); only typos get fixed.
- The university Java project has no real name, description or link yet (placeholder card).

## Evidence on Hand
- Four live project demos with previews in `/public/*.webp`.
- CVs: `/public/CV-JUANLLANOS-ES.pdf` and `/public/CV-JUANLLANOS-EN.pdf`.
- GitHub and LinkedIn profiles. No testimonials, clients or metrics: do not fabricate.

## Product Principles
- Work first: projects and contact are never more than one click away.
- Honest: show only real projects and claims.
- Equal ES/EN experience.
- Fast and light: no heavy libraries for effects.

## Accessibility & Inclusion
Target WCAG AA contrast; respect `prefers-color-scheme` and `prefers-reduced-motion`.
