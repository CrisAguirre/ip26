# LIDER de Sesión — Galería de Innovaciones Didácticas

> **Fecha:** Julio 2026  
> **Curso:**  — Actividad 2  
> **Stack:** Angular 16 · TypeScript · CSS Animations · Tesseract OCR  
> **Proyecto:** `C:\Users\USUARIO\Desktop\IP26\ip26`

---

## ✔️ Completado

### 1. Investigación Base
- Escaneo OCR de 2 imágenes (`enunciado1.jpg`, `enunciado2.jpg`) + `1.png`
- Documento de investigación consolidado: `investigacion-innovacion-didactica.md`
- 3 experiencias reales documentadas con 5 pilares cada una en `galeria-piezas.md`

### 2. Proyecto Angular
- `ng new ip26` con routing + SCSS
- Componentes creados:
  - `intro` — Splash animado con partículas CSS
  - `gallery-list` — Página principal con grid de 3 cards
  - `gallery-card` — Cards con flip 3D y temas visuales
  - `experience-detail` — Galería interactiva con grid + visor modal + navegación prev/next
- Service: `gallery.service.ts` con datos de las 3 experiencias
- Model: `experience.model.ts` con interfaz completa
- Routing: `/` → galería, `/experiencia/:id` → detalle

### 3. Temas Visuales
| Experiencia | Tema | Color | Efectos |
|---|---|---|---|
| **InnGenius** | `space` | `#6366f1` | Estrellas, órbitas, gradiente púrpura |
| **Biobots** | `puzzle` | `#f59e0b` | Dots flotantes, líneas de cuadrícula, shake |
| **Eutopía** | `game` | `#10b981` | Pixeles, scanlines, bounce |

### 4. Contenido por Experiencia
Cada una tiene 7 piezas: contexto, enfoque, metodología, TIC, aportes innovadores + impacto/crecimiento/premios/inversión.

---

## 📁 Archivos Relevantes

| Archivo | Propósito |
|---|---|
| `src/app/components/experience-detail/*` | Galería interactiva (HTML/TS/CSS) |
| `src/app/components/gallery-list/*` | Página principal con 3 cards |
| `src/app/components/gallery-card/*` | Card con flip 3D y temas |
| `src/app/components/intro/*` | Splash animado de entrada |
| `src/app/services/gallery.service.ts` | Datos de experiencias |
| `src/app/models/experience.model.ts` | Interface Experience |
| `src/assets/gallery-data.md` | Documentación de datos |
| `src/assets/galeria-piezas.md` | Contenido completo de 5 pilares |
| `investigacion-innovacion-didactica.md` | Investigación base |

---

## ⚙️ Comandos

```bash
# Iniciar servidor
cd C:\Users\USUARIO\Desktop\IP26\ip26 && npm start

# Build producción
cd C:\Users\USUARIO\Desktop\IP26\ip26 && npm run build

# El servidor corre en http://localhost:4200
```

---

## 🎯 Próximos Pasos Pendientes

- [ ] Verificar visualmente las 3 galerías en el navegador
- [ ] Ajustar detalles visuales si es necesario (espaciado, colores, animaciones)
- [ ] Confirmar si se requiere contenido adicional o nuevas funcionalidades
- [ ] Publicar/desplegar si es necesario

---

## 🧠 Decisiones Tomadas

1. **Arquitectura**: Cada experiencia es una galería interactiva independiente con ruta propia
2. **5 pilares** se representan como piezas de galería en grid + visor modal con flechas
3. **Temas** (space/puzzle/game) dan identidad visual única a cada experiencia
4. **Datos inline** en `getGalleryPieces()` dentro del componente (no externalizados)
5. **CSS budget** ajustado a 24kb warning / 32kb error

---

## 📐 Responsive Design Aplicado

| Breakpoint | Comportamiento |
|---|---|
| > 1024px | Grid 3 columnas, layout completo |
| 768–1024px | Grid 2 columnas, padding reducido |
| 640–768px | Grid 2 columnas, stats wrapping |
| < 640px | Grid 1 columna, todo apilado, fuente reducida |
| < 480px | Intro compacto, botones pequeños |

---

## 🔍 Notas Técnicas

- El build de producción pasa sin errores
- Tesseract OCR instalado en `C:\Program Files\Tesseract-OCR`
- Solo idioma `eng` disponible para OCR (no `spa`)
- Angular 16 con ViewEncapsulation predeterminado
- Sin dependencias externas de UI (todo CSS nativo)
