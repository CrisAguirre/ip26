# ip26 — Galería de Innovaciones Didácticas ( Actividad 2)

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
- `src/app/models/experience.model.ts` — Experience interface with theme union `'space'|'puzzle'|'game'`
- `src/app/services/gallery.service.ts` — 3 experiences: InnGenius (space), Biobots (puzzle), Eutopía (game)
- `src/app/app-routing.module.ts` — routes: `/` → GalleryList, `/experiencia/:id` → ExperienceDetail
- `src/app/app.module.ts` — declares IntroComponent, GalleryListComponent, GalleryCardComponent, ExperienceDetailComponent

### Gallery Card (main view)
- `src/app/components/gallery-card/gallery-card.component.ts` — 12 getters for per-theme CSS figures, mouse tracking, click ripple
- `src/app/components/gallery-card/gallery-card.component.html` — theme-bg + card-figures scene + card-info + card-back
- `src/app/components/gallery-card/gallery-card.component.css` — ~33kB per-theme animations
- `src/app/components/gallery-list/gallery-list.component.html` — featured card at top, 3 cards below
- `src/app/components/gallery-list/gallery-list.component.css` — `.featured` spans full-width, 3-column grid

### Experience Detail (piece gallery + modal viewer)
- `src/app/components/experience-detail/experience-detail.component.ts` — `getGalleryPieces()` returns 5 pieces for InnGenius, 7 for Biobots/Eutopía; `getContentFigureClass(i)` returns gallery+piece-specific figure names

  Figure mapping by gallery:
  - InnGenius → `['fig-inn-brain','fig-inn-rocket','fig-inn-satellite','fig-inn-star','fig-inn-globe']`
  - Biobots → `['fig-bio-house','fig-bio-puzzle-brain','fig-bio-board','fig-bio-pc','fig-bio-trophy','fig-bio-medal','fig-bio-graph']`
  - Eutopía → `['fig-eut-school','fig-eut-flow','fig-eut-village','fig-eut-cloud','fig-eut-crown','fig-eut-levelup','fig-eut-chest']`

- `src/app/components/experience-detail/experience-detail.component.html` — gal-piece grid (5-7 per gallery) + modal viewer with side-by-side text+figure layout (flexbox, figure on right)
- `src/app/components/experience-detail/experience-detail.component.css` — 19 figures with unique CSS drawings + animations

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
- Each gallery has its own color scheme via CSS theme classes (`.theme-space`, `.theme-puzzle`, `.theme-game`)
- Modal viewer backdrop: orbiting rings + floating particles
- Theme-specific viewer backgrounds: nebula (space), circuit grid (puzzle), CRT scanline (game)

### Content Figures (19 unique)
Each piece in each gallery has its own CSS-drawn figure with unique animation:
- **InnGenius**: Constellation brain, multi-stage rocket, satellite, supernova, globe+6 orbiters
- **Biobots**: Puzzle-piece house, 4-piece brain puzzle, board game path, puzzle-screen monitor, trophy, medal+ribbon, graph+puzzle pieces
- **Eutopía**: Pixel-art school, flow state meter, village buildings, cloud+data, crown, XP level-up bar, treasure chest+coins

## Content Mapping

### InnGenius (theme: space, color: #6366f1)
1. Enfoque pedagógico — Pensamiento creativo (Menchen 2001, Summo, PISA 2022), Design Thinking
2. Metodología activa — Design Thinking 5 fases completas (empatizar→testear)
3. Uso de las TIC — Conectivismo (Siemens 2006), TIC en cada fase del DT
4. Aportes Innovadores — Pilar cultural institucional, metodología colombiana global K-12
5. Bibliografía — 8 referencias (Brown, OCDE, Siemens, Sánchez-Cabrero, etc.)

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



## Session History
- Initial scaffold: 3 galleries (InnGenius space, Biobots puzzle, Eutopía game)
- Added 4th gallery "InnGenius — Investigación" (gear theme) from `textos.docx` (LATER REMOVED)
- 7 gallery pieces per experience (28 total) with alternating per-piece figures
- Modal viewer with theme backgrounds, floating rings, particles
- 28 gallery-specific content figures with unique animations
- Font optimization disabled in angular.json for offline build support
- Main InnGenius gallery: 7 pieces → 5 pieces based on 5 sections of INNGENIUS.docx (Enfoque, Metodología, TIC, Aportes, Bibliografía)
- InnGenius — Investigación (gear theme) removed entirely — only 3 galleries remain
- Figure mapping: InnGenius reduced to 5 figs, gear theme figures removed

## Report Generation
- `crear-docx.ps1` in workspace root generates `informe-galerias-innovacion.docx` via Word COM
- Run from workspace: `powershell -ExecutionPolicy Bypass -File ".\crear-docx.ps1"`

## Constraints
- All figures must be pure CSS (no external images or SVGs)
- Figures must relate to each piece's specific content
- Build must pass with no errors
- Budget limits: 80kb warning / 95kb error for anyComponentStyle
