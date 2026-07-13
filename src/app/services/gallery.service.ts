import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  private experiences: Experience[] = [
    {
      id: 1,
      title: 'InnGenius',
      origin: 'Colombia (Bogotá) → 6 países',
      scope: 'Nacional e Internacional',
      methodology: 'Design Thinking',
      summary: 'Metodología educativa colombiana basada en Design Thinking que nació en el Colegio Santa Francisca Romana de Bogotá y fue exportada a más de 100 instituciones en Brasil, Reino Unido, Dubái, España, India y México.',
      fullDescription: 'InnGenius es una metodología educativa que abarca desde preescolar hasta bachillerato a través de etapas lúdicas y reflexivas que culminan en presentaciones de proyectos con impacto social. Su enfoque flexible permite que cada comunidad educativa adapte la metodología a su contexto cultural, manteniendo los principios fundamentales. El método se basa en Design Thinking e integra pensamiento crítico, creatividad y liderazgo como ejes transversales del aprendizaje.',
      results: [
        'Resultados sobresalientes en pensamiento crítico, creatividad y liderazgo',
        'Implementada en más de 100 instituciones de la red Cognita mundial',
        'Presencia en Brasil, Reino Unido, Dubái, España, India y México',
        'Lanzamiento del InnGenius Challenge Chile en 2025'
      ],
      keySuccess: [
        'Enfoque flexible y adaptable a cada contexto cultural',
        'Formación docente acompañada y continua',
        'Basado en retos reales con impacto social',
        'Integración curricular transversal desde preescolar hasta bachillerato'
      ],
      institution: 'Colegio Santa Francisca Romana / Red Cognita',
      year: '2023 - 2025',
      reference: 'Canal Trece. (2025). Colombia exporta metodología educativa innovadora a seis países.',
      color: '#6366f1',
      colorSecondary: '#a855f7',
      icon: '🚀',
      theme: 'space',
      gradient: 'linear-gradient(145deg, #1e1b4b, #312e81)'
    },
    {
      id: 2,
      title: 'Biobots',
      origin: 'Colombia (reconocimiento internacional)',
      scope: 'Nacional con proyección global',
      methodology: 'Gamificación analógica',
      summary: 'Juego analógico diseñado para fomentar el pensamiento computacional en zonas rurales de Colombia. Ganó el premio Mejor Uso General de Gamificación en los GamiCon48V (Estados Unidos), la competencia internacional más prestigiosa en aprendizaje basado en el juego.',
      fullDescription: 'Biobots es una estrategia de la iniciativa Colombia Programa del Ministerio TIC y el British Council. Fue diseñado para funcionar sin conexión a internet, permitiendo su implementación en entornos con acceso limitado a tecnología. Su metodología innovadora, basada en la resolución de problemas y el aprendizaje activo, ha demostrado mejoras significativas en habilidades como lateralidad, razonamiento lógico y adquisición de lenguaje desde las primeras sesiones de juego.',
      results: [
        'Premio Mejor Uso General de Gamificación — GamiCon48V (USA)',
        'Premio del público: Mejor Uso de Gamificación con Baja Tecnología',
        'Beneficiando a 700 docentes y 14.000 estudiantes en zonas rurales',
        '150 docentes del Pacífico colombiano formados en 2025'
      ],
      keySuccess: [
        'No requiere conectividad a internet ni dispositivos costosos',
        'Diseñado específicamente para contextos de baja tecnología',
        'Metodología basada en resolución de problemas y aprendizaje activo',
        'Materiales didácticos y pedagógicos de acompañamiento'
      ],
      institution: 'Ministerio TIC Colombia / British Council',
      year: '2024 - 2025',
      reference: 'Ministerio TIC. (2025). Biobots recibió dos premios en Estados Unidos.',
      color: '#f59e0b',
      colorSecondary: '#ef4444',
      icon: '🧩',
      theme: 'puzzle',
      gradient: 'linear-gradient(145deg, #1c1917, #292524)'
    },
    {
      id: 3,
      title: 'Eutopía',
      origin: 'España (Valencia)',
      scope: 'Nacional (expansión internacional)',
      methodology: 'Gamificación + ABP',
      summary: 'Videojuego educativo desarrollado por la startup valenciana Zynergic que transforma la evaluación competencial en un proceso automático, objetivo y motivador. Presente en más de 40 colegios en España con un crecimiento del 300% en el último año.',
      fullDescription: 'Eutopía permite a los estudiantes construir y gestionar su propia aldea virtual mientras el sistema recoge más de mil datos por hora de cada estudiante, generando informes alineados con el currículo oficial. La plataforma combina aprendizaje y evaluación en un mismo proceso, fomentando la motivación y liberando a los docentes de hasta 15 horas semanales de carga burocrática relacionada con la evaluación.',
      results: [
        'Presencia en más de 40 centros educativos en España',
        'Los docentes recuperan hasta 15 horas semanales de carga evaluativa',
        'Más de 500 situaciones de aprendizaje desarrolladas',
        'Ronda de inversión de 250.000 € en 2025'
      ],
      keySuccess: [
        'Automatización de la evaluación sin perder rigor pedagógico',
        'Gamificación inmersiva que motiva a los estudiantes',
        'Contenido alineado con la LOMLOE y los ODS',
        'Libera carga burocrática docente, devolviendo tiempo a la enseñanza'
      ],
      institution: 'Zynergic (Lanzadera, Marina de Empresas)',
      year: '2022 - 2025',
      reference: 'Magisnet. (2025). Eutopía: el videojuego educativo que arrasa en más de 40 colegios de España.',
      color: '#10b981',
      colorSecondary: '#3b82f6',
      icon: '🎮',
      theme: 'game',
      gradient: 'linear-gradient(145deg, #022c22, #064e3b)'
    },
    {
      id: 4,
      title: 'InnGenius — Investigación',
      origin: 'Colombia (Bogotá) — Marco Teórico',
      scope: 'Fundamentos Pedagógicos',
      methodology: 'Design Thinking + Conectivismo',
      summary: 'Profundización en los fundamentos teóricos de InnGenius: pensamiento creativo (Menchen, 2001; PISA 2022), Design Thinking en 5 fases (Brown, 2019), conectivismo (Siemens, 2006) y la integración estratégica de TIC para potenciar el aprendizaje.',
      fullDescription: 'Esta investigación explora los pilares teóricos que sostienen InnGenius: el pensamiento creativo como habilidad innata y potenciable, el Design Thinking como metodología activa estructurada en 5 fases que promueve la resolución creativa de problemas, el conectivismo y el uso estratégico de las TIC en cada etapa del proceso. Se analiza cómo la creatividad, el trabajo colaborativo y la integración de tecnologías digitales se articulan para formar estudiantes preparados para un futuro incierto lleno de desafíos y oportunidades.',
      results: [
        'Creatividad innata potenciable: fundamento teórico sólido desde Menchen y PISA 2022',
        'Design Thinking en 5 fases: aprendizaje significativo, colaborativo y orientado a problemas reales',
        'Conectivismo + TIC integradas en cada etapa del proceso educativo',
        'Metodología colombiana consolidada como pilar de cultura institucional'
      ],
      keySuccess: [
        'Pensamiento creativo como habilidad natural y básica de la mente humana',
        'Design Thinking transversal: empatizar, definir, idear, prototipar y evaluar',
        'TIC como medios que facilitan construcción, conexión y distribución del conocimiento',
        'Estudiantes equipados para brillar en un mundo de creatividad e innovación'
      ],
      institution: 'Colegio Santa Francisca Romana / Red Cognita',
      year: '2021 - 2025',
      reference: 'Colegio Santa Francisca Romana. (2026). InnGenius. https://csfr.edu.co/es/curriculos-internacionales/inngenius/',
      color: '#8b5cf6',
      colorSecondary: '#06b6d4',
      icon: '⚙️',
      theme: 'gear',
      gradient: 'linear-gradient(145deg, #0f0f1e, #1e1040, #0f172a)'
    }
  ];

  getAll(): Experience[] {
    return this.experiences;
  }

  getById(id: number): Experience | undefined {
    return this.experiences.find(e => e.id === id);
  }
}
