# Datos de la Galería de Innovaciones Didácticas

## Estructura de datos

Cada experiencia educativa en la galería sigue la siguiente estructura:

```typescript
interface Experience {
  id: number;                    // Identificador único
  title: string;                 // Nombre de la experiencia
  origin: string;                // País y lugar de origen
  scope: string;                 // Alcance (nacional/internacional)
  methodology: string;           // Metodología educativa utilizada
  summary: string;               // Resumen breve (1-2 oraciones)
  fullDescription: string;       // Descripción completa
  results: string[];             // Lista de resultados destacados
  keySuccess: string[];          // Lista de claves del éxito
  institution: string;           // Institución responsable
  year: string;                  // Período de implementación
  reference: string;             // Referencia bibliográfica
  color: string;                 // Color hexadecimal para la card
  icon: string;                  // Emoji representativo
}
```

---

## Experiencia 1: InnGenius

| Campo | Valor |
|-------|-------|
| **ID** | 1 |
| **Título** | InnGenius |
| **Origen** | Colombia (Bogotá) → 6 países |
| **Alcance** | Nacional e Internacional |
| **Metodología** | Design Thinking |
| **Institución** | Colegio Santa Francisca Romana / Red Cognita |
| **Período** | 2023 - 2025 |
| **Color** | `#6366f1` |
| **Icono** | 🚀 |

### Resumen

Metodología educativa colombiana basada en Design Thinking que nació en el Colegio Santa Francisca Romana de Bogotá y fue exportada a más de 100 instituciones en Brasil, Reino Unido, Dubái, España, India y México.

### Descripción completa

InnGenius abarca desde preescolar hasta bachillerato a través de etapas lúdicas y reflexivas que culminan en presentaciones de proyectos con impacto social. Su enfoque flexible permite que cada comunidad educativa adapte la metodología a su contexto cultural, manteniendo los principios fundamentales. El método se basa en Design Thinking e integra pensamiento crítico, creatividad y liderazgo como ejes transversales del aprendizaje.

### Resultados

1. Resultados sobresalientes en pensamiento crítico, creatividad y liderazgo
2. Implementada en más de 100 instituciones de la red Cognita mundial
3. Presencia en Brasil, Reino Unido, Dubái, España, India y México
4. Lanzamiento del InnGenius Challenge Chile en 2025

### Claves del éxito

1. Enfoque flexible y adaptable a cada contexto cultural
2. Formación docente acompañada y continua
3. Basado en retos reales con impacto social
4. Integración curricular transversal desde preescolar hasta bachillerato

### Referencia

Canal Trece. (2025). *Colombia exporta metodología educativa innovadora a seis países tras conferencia global*. https://canaltrece.com.co/noticias/colombia-metodologia-educativa-seis-paises-inngenius/

---

## Experiencia 2: Biobots

| Campo | Valor |
|-------|-------|
| **ID** | 2 |
| **Título** | Biobots |
| **Origen** | Colombia (reconocimiento internacional) |
| **Alcance** | Nacional con proyección global |
| **Metodología** | Gamificación analógica |
| **Institución** | Ministerio TIC Colombia / British Council |
| **Período** | 2024 - 2025 |
| **Color** | `#f59e0b` |
| **Icono** | 🧩 |

### Resumen

Juego analógico diseñado para fomentar el pensamiento computacional en zonas rurales de Colombia. Ganó el premio Mejor Uso General de Gamificación en los GamiCon48V (Estados Unidos), la competencia internacional más prestigiosa en aprendizaje basado en el juego.

### Descripción completa

Biobots es una estrategia de la iniciativa Colombia Programa del Ministerio TIC y el British Council. Fue diseñado para funcionar sin conexión a internet, permitiendo su implementación en entornos con acceso limitado a tecnología. Su metodología innovadora, basada en la resolución de problemas y el aprendizaje activo, ha demostrado mejoras significativas en habilidades como lateralidad, razonamiento lógico y adquisición de lenguaje desde las primeras sesiones de juego.

### Resultados

1. Premio Mejor Uso General de Gamificación (Best Overall Use of Gamification) — GamiCon48V
2. Premio del público: Mejor Uso de Gamificación con Baja Tecnología
3. Beneficiando a 700 docentes y 14.000 estudiantes en zonas rurales
4. 150 docentes del Pacífico colombiano formados en 2025

### Claves del éxito

1. No requiere conectividad a internet ni dispositivos costosos
2. Diseñado específicamente para contextos de baja tecnología
3. Metodología basada en resolución de problemas y aprendizaje activo
4. Materiales didácticos y pedagógicos de acompañamiento

### Referencia

Ministerio TIC. (2025). *Biobots, el juego del Ministerio TIC que promueve el pensamiento computacional en los estudiantes, recibió dos premios en Estados Unidos*. https://mintic.gov.co/colombiaprograma/847/w3-article-400587.html

---

## Experiencia 3: Eutopía

| Campo | Valor |
|-------|-------|
| **ID** | 3 |
| **Título** | Eutopía |
| **Origen** | España (Valencia) |
| **Alcance** | Nacional (expansión internacional) |
| **Metodología** | Gamificación + ABP + Evaluación competencial |
| **Institución** | Zynergic (Lanzadera, Marina de Empresas) |
| **Período** | 2022 - 2025 |
| **Color** | `#10b981` |
| **Icono** | 🎮 |

### Resumen

Videojuego educativo desarrollado por la startup valenciana Zynergic que transforma la evaluación competencial en un proceso automático, objetivo y motivador. Presente en más de 40 colegios en España con un crecimiento del 300% en el último año.

### Descripción completa

Eutopía permite a los estudiantes construir y gestionar su propia aldea virtual mientras el sistema recoge más de mil datos por hora de cada estudiante, generando informes alineados con el currículo oficial. La plataforma combina aprendizaje y evaluación en un mismo proceso, fomentando la motivación y liberando a los docentes de hasta 15 horas semanales de carga burocrática relacionada con la evaluación.

### Resultados

1. Presencia en más de 40 centros educativos en España
2. Los docentes recuperan hasta 15 horas semanales de carga evaluativa
3. Más de 500 situaciones de aprendizaje desarrolladas
4. Ronda de inversión de 250.000 € en 2025

### Claves del éxito

1. Automatización de la evaluación sin perder rigor pedagógico
2. Gamificación inmersiva que motiva a los estudiantes
3. Contenido alineado con la LOMLOE y los ODS
4. Libera carga burocrática docente, devolviendo tiempo a la enseñanza

### Referencia

Magisnet. (2025). *Eutopía: el videojuego educativo que arrasa en más de 40 colegios de España*. https://www.magisnet.com/2025/09/eutopia-un-videojuego-educativo-que-arrasa-en-mas-de-40-colegios-de-espana/

---

## Vista general de la galería

| ID | Experiencia | Origen | Metodología | Resultado clave |
|----|-------------|--------|-------------|-----------------|
| 1 | InnGenius | Colombia → 6 países | Design Thinking | Exportada a Brasil, UK, Dubái, España, India, México |
| 2 | Biobots | Colombia | Gamificación analógica | Premio internacional GamiCon48V (USA) |
| 3 | Eutopía | España | Gamificación + ABP | 40+ colegios, 500+ situaciones de aprendizaje |

---

*Documentación generada el 10 de julio de 2026 para la Actividad 2: Galería de Innovaciones Didácticas.*
