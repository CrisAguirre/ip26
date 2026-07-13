# ip26 — Galería de Innovaciones Didácticas (IND169 Actividad 2)

## Stack
Angular 16 · TypeScript · CSS Animations · Tesseract OCR

## Build Command
```powershell
cd "C:\Users\USUARIO\Documents\My Proyects\Edulabs\Inovación didáctica I\ip26\ip26"
npm run build
```

## Budget (angular.json)
- anyComponentStyle: maxWarning 80kb / maxError 95kb

## Project Structure (relevant files)

### Core
- `src/app/models/experience.model.ts` — Experience interface with theme union `'space'|'puzzle'|'game'|'gear'`
- `src/app/services/gallery.service.ts` — 4 experiences: InnGenius (space), Biobots (puzzle), Eutopía (game), InnGenius—Investigación (gear)
- `src/app/app-routing.module.ts` — routes: `/` → GalleryList, `/experiencia/:id` → ExperienceDetail
- `src/app/app.module.ts` — declares IntroComponent, GalleryListComponent, GalleryCardComponent, ExperienceDetailComponent

### Gallery Card (main view)
- `src/app/components/gallery-card/gallery-card.component.ts` — 12 getters for per-theme CSS figures, mouse tracking, click ripple
- `src/app/components/gallery-card/gallery-card.component.html` — theme-bg + card-figures scene + card-info + card-back
- `src/app/components/gallery-card/gallery-card.component.css` — ~33kB per-theme animations
- `src/app/components/gallery-list/gallery-list.component.html` — featured card at top, 3 cards below
- `src/app/components/gallery-list/gallery-list.component.css` — `.featured` spans full-width, 3-column grid

### Experience Detail (piece gallery + modal viewer)
- `src/app/components/experience-detail/experience-detail.component.ts` — `getGalleryPieces()` returns 7 pieces per experience keyed by `experience.title`; `getContentFigureClass(i)` returns 28 unique gallery+piece-specific figure names

  Figure mapping by gallery:
  - InnGenius → `['fig-inn-school','fig-inn-brain','fig-inn-rocket','fig-inn-satellite','fig-inn-star','fig-inn-globe','fig-inn-timeline']`
  - Biobots → `['fig-bio-house','fig-bio-puzzle-brain','fig-bio-board','fig-bio-pc','fig-bio-trophy','fig-bio-medal','fig-bio-graph']`
  - Eutopía → `['fig-eut-school','fig-eut-flow','fig-eut-village','fig-eut-cloud','fig-eut-crown','fig-eut-levelup','fig-eut-chest']`
  - InnGenius—Investigación → `['fig-inv-brain-gear','fig-inv-diamond','fig-inv-cogs','fig-inv-loop','fig-inv-network','fig-inv-system','fig-inv-book']`

- `src/app/components/experience-detail/experience-detail.component.html` — gal-piece grid (7 per gallery) + modal viewer with side-by-side text+figure layout (flexbox, figure on right)
- `src/app/components/experience-detail/experience-detail.component.css` — all 28 figures with unique CSS drawings + animations

## Key Design Decisions

### Layout
- Gallery grid: `repeat(auto-fill, minmax(300px, 1fr))`
- Featured card (InnGenius) spans `grid-column: 1 / -1` with `max-width: 600px` centered
- Card height: 500px
- Modal: text on left (`.va-content-body`), figure on right (`.va-content-figure`, 130x130px)
- Responsive breakpoints: 1024px, 768px, 640px

### Visual Style
- All figures are pure CSS (no external images) — clip-path, pseudo-elements, gradients, transforms, conic-gradient
- Figures use `--accent` CSS custom property for theme color consistency
- Card 3D tilt (15°), mouse-follow glow, border glow, click ripple
- Each gallery has its own color scheme via CSS theme classes (`.theme-space`, `.theme-puzzle`, `.theme-game`, `.theme-gear`)
- Modal viewer backdrop: orbiting rings + floating particles
- Theme-specific viewer backgrounds: nebula (space), circuit grid (puzzle), CRT scanline (game), mechanoid radial (gear)

### Content Figures (28 unique)
Each piece in each gallery has its own CSS-drawn figure with unique animation:
- **InnGenius**: Rocket-school hybrid, constellation brain, multi-stage rocket, satellite, supernova, globe+6 orbiters, timeline nodes
- **Biobots**: Puzzle-piece house, 4-piece brain puzzle, board game path, puzzle-screen monitor, trophy, medal+ribbon, graph+puzzle pieces
- **Eutopía**: Pixel-art school, flow state meter, village buildings, cloud+data, crown, XP level-up bar, treasure chest+coins
- **InnGenius—Investigación**: Brain+gear, double diamond, interlocking cogs, feedback loop+arrows, network nodes, gear system, book+gear

## Content Mapping

### InnGenius (theme: space, color: #6366f1)
1. Contexto educativo — Bogotá, Colegio Santa Francisca Romana, 6 países
2. Enfoque pedagógico — Aprendizaje experiencial + constructivismo + Ausubel + Design Thinking
3. Metodología activa — Design Thinking 5 etapas (empatizar→testear)
4. Uso de TIC — Plataformas colaborativas, adaptable a baja conectividad
5. Aportes innovadores — Metodología colombiana global, InnGenius Challenge Chile
6. Impacto global — 100+ instituciones, 50.000+ estudiantes
7. Línea de tiempo — 2021→2025, de piloto a 6 países

### Biobots (theme: puzzle, color: #f59e0b)
1. Contexto educativo — Zonas rurales Colombia, sin internet
2. Enfoque pedagógico — Construccionismo (Papert), gamificación analógica
3. Metodología activa — Juego de mesa 5 fases, programación con fichas
4. Uso de TIC — No requiere TIC, funciona offline (paradoja)
5. Aportes innovadores — Baja tecnología/alto impacto, modelo replicable
6. Premios 2025 — GamiCon48V USA (Best Overall + Best Low-Tech)
7. Impacto en cifras — 700 docentes, 14.000 estudiantes, política pública TIC

### Eutopía (theme: game, color: #10b981)
1. Contexto educativo — Sistema educativo español, LOMLOE, 40+ centros
2. Enfoque pedagógico — Gamificación + ABP + Flow (Csikszentmihalyi)
3. Metodología activa — Videojuego simulación aldea virtual, misiones ODS
4. Uso de TIC — Cloud + Big Data + Learning Analytics, 500+ situaciones
5. Aportes innovadores — Evaluación automatizada, 15h semanales recuperadas
6. Crecimiento — 2022→2025, 5 a 40+ colegios, 300%
7. Inversión — Lanzadera (Juan Roig), 500.000€+ acumulado

### InnGenius — Investigación (theme: gear, color: #8b5cf6)
1. Pensamiento Creativo — Menchen (2001), PISA 2022
2. Design Thinking 1-2 — Empatizar + Definir
3. Design Thinking 3-4 — Idear + Prototipar
4. Design Thinking 5 — Evaluar/Testear, ciclo continuo
5. Conectivismo y TIC — Siemens (2006), constructivismo
6. Aportes Innovadores — Engranaje de innovación K-12
7. Reflexión y Prospectiva — Docente facilitador, pensamiento divergente

## Session History
- Initial scaffold: 3 galleries (InnGenius space, Biobots puzzle, Eutopía game)
- Added 4th gallery "InnGenius — Investigación" (gear theme) from `textos.docx`
- Added 'gear' to theme union type
- Featured card layout (full width at top)
- Per-theme CSS figures on cards (stars, comets, planets, puzzle pieces, gears, etc.)
- 7 gallery pieces per experience (28 total) with alternating per-piece figures
- Modal viewer with theme backgrounds, floating rings, particles
- Text animations (reveal, shine, staggered entrance)
- 28 gallery-specific content figures with unique animations side-by-side with text

## Report Generation
- `crear-docx.ps1` in workspace root generates `informe-galerias-innovacion.docx` via Word COM
- Run from workspace: `powershell -ExecutionPolicy Bypass -File ".\crear-docx.ps1"`

## Constraints
- All figures must be pure CSS (no external images or SVGs)
- Figures must relate to each piece's specific content
- Build must pass with no errors
- Budget limits: 80kb warning / 95kb error for anyComponentStyle
