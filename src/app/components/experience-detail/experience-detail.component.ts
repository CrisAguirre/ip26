import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';
import { Experience } from '../../models/experience.model';

interface GalleryPiece {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  content: string;
  highlights?: string[];
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent {
  experience!: Experience;
  isVisible = false;
  selectedPiece: GalleryPiece | null = null;
  showViewer = false;
  currentIndex = 0;
  enterDir = 'next';

  pieces: GalleryPiece[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const exp = this.galleryService.getById(id);
    if (!exp) { this.router.navigate(['/']); return; }
    this.experience = exp;
    this.pieces = this.getGalleryPieces();
    setTimeout(() => { this.isVisible = true; }, 100);
  }

  goBack() { this.router.navigate(['/']); }

  getPieceColor(i: number): string {
    const colors = ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
    return colors[i % colors.length];
  }

  openPiece(piece: GalleryPiece, index: number) {
    this.currentIndex = index;
    this.selectedPiece = piece;
    this.showViewer = true;
    document.body.style.overflow = 'hidden';
  }

  closeViewer() {
    this.showViewer = false;
    document.body.style.overflow = '';
  }

  prevPiece() {
    if (this.currentIndex > 0) {
      this.enterDir = 'prev';
      this.currentIndex--;
      this.selectedPiece = this.pieces[this.currentIndex];
    }
  }

  nextPiece() {
    if (this.currentIndex < this.pieces.length - 1) {
      this.enterDir = 'next';
      this.currentIndex++;
      this.selectedPiece = this.pieces[this.currentIndex];
    }
  }

  private getGalleryPieces(): GalleryPiece[] {
    const data: Record<string, GalleryPiece[]> = {
      'InnGenius': [
        { id: 1, icon: '🏫', title: 'Contexto educativo', subtitle: '¿Dónde y para quién?', content: 'InnGenius nace en el Colegio Santa Francisca Romana, Bogotá, institución privada con estudiantes de estratos 3 a 5. La metodología abarca desde preescolar hasta bachillerato (grados 0 a 11), integrando a más de 1.200 estudiantes en su piloto. Hoy se implementa en 6 países: Brasil, Reino Unido, Dubái, España, India y México, adaptándose a realidades culturales y curriculares muy diversas.', highlights: ['Bogotá, Colombia', 'Preescolar a bachillerato', '1.200+ estudiantes piloto', '6 países'] },
        { id: 2, icon: '🎯', title: 'Enfoque pedagógico', subtitle: '¿Qué teoría educativa lo sustenta?', content: 'Aprendizaje experiencial y constructivista. Se fundamenta en la teoría del aprendizaje significativo de Ausubel, combinada con Design Thinking. El estudiante es protagonista activo; el docente actúa como facilitador de experiencias. Promueve metacognición, trabajo colaborativo y conexión entre conocimiento académico y problemas reales.', highlights: ['Constructivismo', 'Aprendizaje significativo', 'Estudiante protagonista', 'Docente facilitador'] },
        { id: 3, icon: '💡', title: 'Metodología activa', subtitle: '¿Cómo se implementa?', content: 'Design Thinking en 5 etapas: (1) Empatizar — identificar problemas reales; (2) Definir — sintetizar y enfocar; (3) Idear — generar soluciones creativas; (4) Prototipar — construir versiones tangibles; (5) Testear — probar y mejorar. Cada ciclo culmina en presentaciones públicas de proyectos con impacto social real, integrando pensamiento crítico y creatividad.', highlights: ['Design Thinking 5 etapas', 'Aprendizaje basado en retos', 'Prototipado', 'Presentaciones públicas'] },
        { id: 4, icon: '💻', title: 'Uso de TIC', subtitle: '¿Qué tecnología se emplea?', content: 'Plataformas colaborativas en línea para trabajo en equipo, herramientas de diseño y prototipado digital, recursos multimedia para presentaciones, y sistemas de evaluación en línea. La metodología no depende exclusivamente de la tecnología: prioriza el pensamiento crítico. En contextos de baja conectividad se usan alternativas analógicas que mantienen la esencia del proceso.', highlights: ['Plataformas colaborativas', 'Diseño digital', 'Evaluación en línea', 'Adaptable a baja conectividad'] },
        { id: 5, icon: '✨', title: 'Aportes innovadores', subtitle: '¿Qué lo hace único?', content: 'Demostrar que una metodología educativa colombiana puede competir globalmente. Su flexibilidad para adaptarse a distintos contextos culturales. Integración del Design Thinking de forma transversal desde preescolar hasta bachillerato. El InnGenius Challenge Chile 2025 como evento internacional de colaboración estudiantil. Modelo de escalabilidad educativa.', highlights: ['Metodología colombiana global', 'Escalabilidad', 'Design Thinking K-12', 'Eventos internacionales'] },
        { id: 6, icon: '🌍', title: 'Impacto global', subtitle: '¿Qué ha logrado?', content: 'Más de 100 instituciones educativas en 6 países, impactando a más de 50.000 estudiantes. Mejora del 40% en pensamiento crítico, 35% en creatividad y 45% en liderazgo. Reconocimiento internacional y expansión continua con nuevos países en proceso de adopción.', highlights: ['100+ instituciones', '50.000+ estudiantes', '40% mejora pensamiento crítico', '45% mejora liderazgo'] },
        { id: 7, icon: '📅', title: 'Línea de tiempo', subtitle: '¿Cómo ha evolucionado?', content: '2021: Idea inicial. 2022: Piloto con 200 estudiantes. 2023: Expansión nacional (15 colegios) + interés de red Cognita. 2024: Salto internacional (España, México, Brasil). 2025: Presencia en 6 países, 100+ instituciones, lanzamiento InnGenius Challenge Chile.', highlights: ['2021 → 2025', 'Piloto a 6 países', 'Red Cognita mundial', 'Challenge Chile'] }
      ],
      'Biobots': [
        { id: 1, icon: '🏫', title: 'Contexto educativo', subtitle: '¿Dónde y para quién?', content: 'Zonas rurales de Colombia donde más del 40% de las escuelas no tienen acceso a internet. Estudiantes de primaria y secundaria (grados 3 a 9) en regiones como Pacífico (Chocó, Cauca, Nariño), Caribe (La Guajira, Cesar) y Amazonía (Caquetá, Putumayo). Zonas con altos índices de pobreza, conflicto armado y desigualdad educativa.', highlights: ['Zonas rurales Colombia', 'Sin internet ni electricidad', 'Grados 3° a 9°', 'Pacífico, Caribe, Amazonía'] },
        { id: 2, icon: '🎯', title: 'Enfoque pedagógico', subtitle: '¿Qué teoría educativa lo sustenta?', content: 'Aprendizaje activo y construccionismo (Seymour Papert): los niños aprenden mejor cuando construyen artefactos tangibles. Gamificación analógica para desarrollar pensamiento computacional. Promueve trabajo colaborativo, comunicación oral, pensamiento crítico y metacognición. Los estudiantes verbalizan y justifican sus soluciones.', highlights: ['Construccionismo (Papert)', 'Aprendizaje activo', 'Gamificación analógica', 'Trabajo colaborativo'] },
        { id: 3, icon: '💡', title: 'Metodología activa', subtitle: '¿Cómo se implementa?', content: 'Juego de mesa analógico en 5 fases: (1) Formación del equipo con roles; (2) Comprensión del reto computacional; (3) Programación con fichas (condicionales, bucles, secuencias); (4) Prueba y depuración de algoritmos; (5) Presentación y reflexión colectiva. Todo sin computadores ni internet.', highlights: ['Juego de mesa', '5 fases estructuradas', 'Programación con fichas', 'Sin computadores'] },
        { id: 4, icon: '💻', title: 'Uso de TIC', subtitle: '¿Qué tecnología se emplea?', content: 'Paradójicamente, NO requiere TIC. Su fortaleza es funcionar completamente offline. Las TIC se usan de forma complementaria: docentes acceden a guías pedagógicas digitales cuando hay conectividad, y existe una versión digital para contextos urbanos. El Ministerio TIC usa un sistema de seguimiento en línea, pero el juego en aula funciona sin tecnología.', highlights: ['No requiere internet', 'Materiales descargables', 'Versión digital opcional', 'Seguimiento ministerial'] },
        { id: 5, icon: '✨', title: 'Aportes innovadores', subtitle: '¿Qué lo hace único?', content: 'Demostrar que la educación en pensamiento computacional no requiere tecnología costosa. Enfoque "baja tecnología, alto impacto" reconocido internacionalmente con dos premios GamiCon48V (USA). Modelo replicable en cualquier país con limitaciones de infraestructura. Diseño participativo con docentes rurales para asegurar pertinencia cultural.', highlights: ['Baja tecnología, alto impacto', 'Premios GamiCon48V', 'Modelo replicable', 'Diseño participativo'] },
        { id: 6, icon: '🏆', title: 'Premios 2025', subtitle: '¿Qué reconocimientos ha obtenido?', content: 'GamiCon48V (Estados Unidos) — la competencia internacional más prestigiosa en aprendizaje basado en el juego. Biobots ganó el máximo reconocimiento: Mejor Uso General de Gamificación (Best Overall Use of Gamification) y el premio del público a Mejor Uso de Gamificación con Baja Tecnología, compitiendo contra más de 80 proyectos globales.', highlights: ['GamiCon48V USA', 'Best Overall Use of Gamification', 'Best Low-Tech Use', '80+ proyectos competidores'] },
        { id: 7, icon: '📊', title: 'Impacto en cifras', subtitle: '¿Qué ha logrado?', content: '700 docentes formados en pensamiento computacional en zonas rurales. 14.000 estudiantes beneficiados. 150 docentes del Pacífico colombiano capacitados en 2025. Presencia en 3 regiones del país. 0% de dependencia de internet. Reconocido como política pública del Ministerio TIC para cerrar la brecha digital.', highlights: ['700 docentes', '14.000 estudiantes', '150 docentes Pacífico', 'Política pública TIC'] }
      ],
      'Eutopía': [
        { id: 1, icon: '🏫', title: 'Contexto educativo', subtitle: '¿Dónde y para quién?', content: 'Sistema educativo español. Responde a la LOMLOE que exige evaluación competencial. Según ANPE, los docentes dedican hasta 15h semanales a evaluación y el 83% lo considera excesivo. Eutopía está en 40+ centros educativos en España (Primaria, ESO y Formación Profesional), desde escuelas públicas en Valencia hasta colegios privados en Madrid y Barcelona.', highlights: ['Sistema educativo español', 'Respuesta a LOMLOE', '40+ centros', 'Primaria, ESO y FP'] },
        { id: 2, icon: '🎯', title: 'Enfoque pedagógico', subtitle: '¿Qué teoría educativa lo sustenta?', content: 'Gamificación + Aprendizaje Basado en Proyectos (ABP) + Evaluación auténtica. Se fundamenta en la teoría del flow (Csikszentmihalyi): los estudiantes alcanzan inmersión total construyendo su aldea virtual. La evaluación está integrada en el juego, no es un evento separado. Cada decisión genera evidencias evaluables.', highlights: ['Gamificación + ABP', 'Teoría del flow', 'Evaluación auténtica', 'Inmersión total'] },
        { id: 3, icon: '💡', title: 'Metodología activa', subtitle: '¿Cómo se implementa?', content: 'Videojuego de simulación y construcción. Los estudiantes gestionan una aldea virtual tomando decisiones sobre recursos, infraestructura y sostenibilidad vinculadas a los ODS. Cada misión es una situación de aprendizaje alineada al currículo. El sistema recoge 1.000+ datos por hora por estudiante, analizando patrones de decisión y niveles de logro.', highlights: ['Videojuego simulación', 'Aldea virtual', 'Misiones ODS', '1.000+ datos/hora'] },
        { id: 4, icon: '💻', title: 'Uso de TIC', subtitle: '¿Qué tecnología se emplea?', content: 'Plataforma 100% cloud con Big Data y Learning Analytics. Dashboard docente en tiempo real con informes personalizados. Más de 500 situaciones de aprendizaje precargadas y alineadas con LOMLOE. Actualización automática sin instalación. La startup Zynergic ha recibido 500.000€ en inversión para desarrollo tecnológico continuo.', highlights: ['Cloud + Big Data', 'Learning Analytics', 'Dashboard tiempo real', '500+ situaciones'] },
        { id: 5, icon: '✨', title: 'Aportes innovadores', subtitle: '¿Qué lo hace único?', content: 'Automatización de la evaluación competencial sin perder rigor pedagógico. Recupera 15h semanales de los docentes. Crecimiento del 300% en un año, demostrando necesidad real del mercado. Contenido alineado con ODS que forma ciudadanos conscientes de desafíos globales mientras desarrollan competencias clave del siglo XXI.', highlights: ['Evaluación automatizada', '15h semanales recuperadas', 'Crecimiento 300%', 'Contenido ODS'] },
        { id: 6, icon: '📈', title: 'Crecimiento', subtitle: '¿Cómo ha evolucionado?', content: '2022: Fundación de Zynergic en Lanzadera (aceleradora de Juan Roig). 2023: Beta con 5 colegios, 50 situaciones de aprendizaje. 2024: 16 colegios, ronda 250.000€, equipo de 12 personas. 2025: 40+ colegios, crecimiento 300%, nueva ronda de inversión preparando salto internacional.', highlights: ['2022 → 2025', '5 a 40+ colegios', '250K€ → 500K€+', 'Preparando salto internacional'] },
        { id: 7, icon: '💰', title: 'Inversión', subtitle: '¿Quién respalda el proyecto?', content: 'Zynergic recibió inversión de Lanzadera (Marina de Empresas, impulsada por Juan Roig). Ronda semilla inicial, seguida de una ronda de 250.000€ en 2024. A 2025 acumula 500.000€+ en financiación. Los fondos se destinan a expandir contenido pedagógico y preparar la expansión internacional de la plataforma.', highlights: ['Lanzadera', '250.000€ ronda 2024', '500.000€+ acumulado', 'Expansión internacional'] }
      ]
    };
    return data[this.experience?.title] || [];
  }
}
