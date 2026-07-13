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

  getContentFigureClass(i: number): string {
    const title = this.experience?.title || '';
    if (title === 'InnGenius') {
      return ['fig-inn-school', 'fig-inn-brain', 'fig-inn-rocket', 'fig-inn-satellite', 'fig-inn-star', 'fig-inn-globe', 'fig-inn-timeline'][i % 7];
    }
    if (title === 'Biobots') {
      return ['fig-bio-house', 'fig-bio-puzzle-brain', 'fig-bio-board', 'fig-bio-pc', 'fig-bio-trophy', 'fig-bio-medal', 'fig-bio-graph'][i % 7];
    }
    if (title === 'Eutopía') {
      return ['fig-eut-school', 'fig-eut-flow', 'fig-eut-village', 'fig-eut-cloud', 'fig-eut-crown', 'fig-eut-levelup', 'fig-eut-chest'][i % 7];
    }
    if (title === 'InnGenius — Investigación') {
      return ['fig-inv-brain-gear', 'fig-inv-diamond', 'fig-inv-cogs', 'fig-inv-loop', 'fig-inv-network', 'fig-inv-system', 'fig-inv-book'][i % 7];
    }
    return 'fig-star';
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
      ],
      'InnGenius — Investigación': [
        { id: 1, icon: '🧠', title: 'Enfoque pedagógico', subtitle: 'Pensamiento creativo como fundamento teórico', content: 'Se fundamenta en la teoría del pensamiento creativo, combinada con Design Thinking. El estudiante es protagonista activo; el docente actúa como facilitador de experiencias. Promueve metacognición, trabajo colaborativo y conexión entre conocimiento académico y problemas reales, según Menchen (2001, citado en Gutiérrez, 2023) la define como "una característica natural y básica de la mente humana y que se encuentra potencialmente en todas las personas" (p. 8), es decir la creatividad es una habilidad innata que se encuentra en todos los individuos, factible de desarrollar y potenciar a través de estrategias adecuadas, así, pensar de manera creativa según Summo et al (2016, citado en Delgado, 2022) "se relaciona estrechamente con la capacidad de crear, idear algo nuevo apartándose de las conductas habituales" (p.52), es decir, la habilidad de generar resultados originales, enfatizando que el valor de la creatividad no está únicamente en la novedad de la idea, sino en el impacto y la efectividad del resultado alcanzado en relación con el objetivo planteado, este enfoque, resalta que la creatividad es un proceso orientado a resolver problemas y generar soluciones que sean significativas y útiles en un contexto determinado, para PISA (2022), el pensamiento creativo se define como "la competencia para participar productivamente en la generación, evaluación y mejora de ideas, que puede dar como resultado soluciones originales y efectivas, avances en el conocimiento y expresiones impactantes de la imaginación" (P.12). En atención a lo anterior citado, propiciar el pensamiento creativo en aula, conlleva a la organización planificada de estrategias donde los estudiantes puedan expresar sus ideas sin temores ni juicios y se sientan seguros que al generar estas, realizaran la contribución a soluciones no solamente convencionales, sino a plantear problemas complejos y relevantes, donde activen su pensamiento divergente a través de actividades que vayan desde la verbalización de sus ideas, el análisis crítico y la evaluación de las mismas en busca del perfeccionamiento.', highlights: ['Creatividad innata (Menchen, 2001)', 'PISA 2022: pensamiento creativo', 'Protagonista activo', 'Pensamiento divergente'] },
        { id: 2, icon: '🎯', title: 'Metodología activa: Empatizar y Definir', subtitle: 'Comprender el contexto y formular el problema', content: 'La metodología activa del proyecto Inngenius, basada en el Design Thinking, se estructura en cinco etapas que promueven el aprendizaje centrado en el estudiante, la resolución creativa de problemas y el desarrollo de competencias para la innovación. A continuación, se describen las dos primeras fases: 1. Empatizar. En esta primera etapa, los estudiantes exploran el contexto del problema desde la perspectiva de las personas involucradas. Mediante la observación, entrevistas, encuestas y el análisis de situaciones reales, buscan comprender las necesidades, intereses y dificultades de los usuarios. Esta fase favorece el desarrollo de la empatía, el pensamiento crítico y la capacidad para identificar problemas auténticos. 2. Definir. Una vez recopilada la información, los estudiantes organizan y analizan los datos para identificar la necesidad principal o el desafío que será abordado. El propósito es formular un problema claro, específico y relevante que oriente el proceso de diseño. En esta etapa se fortalecen las habilidades de análisis, síntesis y toma de decisiones.', highlights: ['5 etapas de Design Thinking', 'Empatizar: observación y entrevistas', 'Definir: análisis y síntesis', 'Problemas auténticos'] },
        { id: 3, icon: '💡', title: 'Metodología activa: Idear y Prototipar', subtitle: 'Generar soluciones y materializarlas', content: '3. Idear. En esta fase se generan múltiples alternativas de solución mediante técnicas de creatividad como la lluvia de ideas, mapas mentales, SCAMPER o pensamiento lateral. Se fomenta un ambiente de colaboración donde todas las propuestas son consideradas antes de seleccionar las más viables. El objetivo es potenciar la creatividad, la innovación y el trabajo en equipo. 4. Prototipar. Las ideas seleccionadas se transforman en prototipos o modelos iniciales que permiten visualizar y experimentar las posibles soluciones. Estos pueden representarse mediante dibujos, maquetas, simulaciones digitales, presentaciones interactivas o recursos tecnológicos, dependiendo del contexto del proyecto. El prototipado facilita el aprendizaje basado en la experimentación y la mejora continua.', highlights: ['Lluvia de ideas y SCAMPER', 'Pensamiento lateral', 'Prototipos: maquetas, simulaciones', 'Aprendizaje por experimentación'] },
        { id: 4, icon: '🔄', title: 'Metodología activa: Evaluar (Testear)', subtitle: 'Probar, reflexionar y mejorar continuamente', content: '5. Evaluar (Testear). En la última etapa, los prototipos son puestos a prueba con los usuarios o en escenarios simulados para recoger retroalimentación sobre su funcionamiento, utilidad y posibilidades de mejora. Los estudiantes analizan los resultados, realizan ajustes y refinan la propuesta hasta obtener una solución más efectiva. Esta fase fortalece la reflexión, la autoevaluación y el aprendizaje a partir del error como parte del proceso de innovación. En conjunto, estas cinco etapas convierten al Design Thinking en una metodología activa que promueve un aprendizaje significativo, colaborativo y orientado a la solución de problemas reales (Brown, 2019). En el proyecto Inngenius, este enfoque permite que los estudiantes sean protagonistas de su aprendizaje, desarrollen competencias del siglo XXI —como la creatividad, el pensamiento crítico, la comunicación y el trabajo colaborativo— y generen soluciones innovadoras con impacto en su entorno.', highlights: ['Prueba con usuarios', 'Retroalimentación y ajustes', 'Aprendizaje del error', 'Competencias siglo XXI'] },
        { id: 5, icon: '🌐', title: 'Uso de las TIC', subtitle: 'Conectivismo y tecnología en el aprendizaje', content: 'El proyecto Inngenius con respecto al uso de las TIC, trasciende la función de simples herramientas de apoyo para convertirse en medios que facilitan la construcción, conexión y distribución del conocimiento, si bien una de las teorías acordes con el uso de la tecnología en la educación, es el conectivismo de Siemens (2006) quien lo define como "la integración de principios explorados por las teorías del caos, redes, complejidad y auto organización. El aprendizaje es un proceso que ocurre dentro de ambientes difusos de elementos centrales cambiantes, que no están completamente bajo el control del individuo" (p.6), esta teoría apropio los fundamentos de corrientes pedagógicas como el constructivismo, según la cual, la construcción del conocimiento se logra a partir de la interacción del sujeto aprendiente con su entorno y con el medio que lo rodea (Mendoza et al, 2025), en este orden de ideas, el paradigma del caos y las redes de información plantea una nueva forma de estructurar el diseño del aprendizaje identificando las necesidades del contexto con respecto al avance tecnológico orientado hacia la autoorganización de la red de información, la cual, se realimenta a través de los diferentes nodos que interactúan para adquirir mayores conocimientos (Sánchez et al., 2019). En el proyecto Inngenius, las TIC se integran en cada una de las etapas del Design Thinking, favoreciendo la investigación, la comunicación, la colaboración y la creación de soluciones innovadoras. Durante la fase de empatía, los estudiantes emplean recursos digitales para recopilar información mediante formularios, entrevistas virtuales, videos y búsquedas especializadas. En la etapa de definición utilizan aplicaciones para organizar y analizar datos, elaborar mapas conceptuales y sintetizar la información obtenida. Durante la ideación, herramientas colaborativas permiten la construcción colectiva de propuestas y el intercambio de ideas en tiempo real. En la fase de prototipado se utilizan aplicaciones de diseño, programación, simulación o elaboración de recursos digitales que facilitan la representación de las soluciones planteadas. Finalmente, en la etapa de evaluación, las plataformas digitales posibilitan la retroalimentación, la socialización de los prototipos y la mejora continua a partir de las opiniones de compañeros, docentes y otros usuarios. Desde el enfoque conectivista, estas experiencias favorecen el desarrollo de competencias digitales, el aprendizaje autónomo, el pensamiento crítico y la capacidad para aprender de manera permanente en entornos tecnológicos cambiantes. Las TIC permiten que el conocimiento no permanezca únicamente en el estudiante o en el docente, sino que se distribuya en redes de aprendizaje donde la interacción entre personas, recursos digitales e inteligencia colectiva fortalece la construcción de nuevos saberes. De esta manera, el proyecto Inngenius promueve un aprendizaje activo, colaborativo y conectado con los desafíos de la sociedad digital, en el que los estudiantes participan como productores y gestores de conocimiento más que como receptores pasivos de información.', highlights: ['Conectivismo (Siemens, 2006)', 'Constructivismo', 'TIC en cada fase del DT', 'Productores de conocimiento'] },
        { id: 6, icon: '🏆', title: 'Aportes Innovadores', subtitle: 'Impacto y consolidación de InnGenius', content: 'InnGenius se ha consolidado como un pilar fundamental de la cultura, impulsando en los estudiantes a prepararse para un futuro incierto, lleno de desafíos y oportunidades. A través de este programa, ellos están desarrollando habilidades esenciales que les permitirán destacar en un mundo donde la creatividad, la innovación y el emprendimiento son clave. Al haber interiorizado los mensajes de InnGenius, los estudiantes están equipados para brillar, enfrentando cualquier escenario con confianza (Colegio Santa Francisca Romana, 2026), además, el proyecto demostró que una metodología educativa colombiana puede competir globalmente, su flexibilidad para adaptarse a distintos contextos culturales, la integración del Design Thinking de forma transversal desde preescolar hasta bachillerato.', highlights: ['Pilar de cultura institucional', 'Metodología colombiana global', 'Flexibilidad contextual', 'Transversal K-12'] },
        { id: 7, icon: '📚', title: 'Bibliografía', subtitle: 'Referencias del marco teórico', content: 'Brown, T. (2019). Change by Design: How Design Thinking Transforms Organizations and Inspires Innovation (Rev. ed.). Harper Business.\n\nColegio Santa Francisca Romana. (2026.). InnGenius. https://csfr.edu.co/es/curriculos-internacionales/inngenius/\n\nGutiérrez, L. (2023). Creatividad e innovación de las estrategias didácticas en la virtualidad, consideraciones para promover la motivación en los aprendientes. Revista de Investigación y Cultura - Universidad César Vallejo, 1. DOI: https://doi.org/10.18050/RevUCVHACER.v12n1a9\n\nDelgado, C. (2022). Estrategias didácticas para fortalecer el pensamiento creativo en el aula. Un estudio meta analítico. Revista Innova Educación, 4. https://dialnet.unirioja.es/servlet/articulo?codigo=8152451\n\nMendoza, L., Rosales, D., Chichande, E., Rosado, K., Jurado, A y Palta, L. (2025). Estrategias de las 4C (Pensamiento Crítico, Creatividad, Colaboración, Comunicación) para un aprendizaje profundo y significativo en los estudiantes de Educación Básica. Revista Latinoamericana de Ciencias Sociales y Humanidades, 6. https://dialnet.unirioja.es/servlet/articulo?codigo=10075294\n\nOrganización para la Cooperación y el Desarrollo Económicos - OCDE. (2024). PISA 2022 Results (Volume III): Creative Minds, Creative Schools, PISA, OECD Publishing, Paris\n\nSánchez-Cabrero, R., Costa-Román, O., Mañoso-Pacheco, L., Novillo-López, M & Pericacho-Gómez, F. (2019). Orígenes del conectivismo como nuevo paradigma del aprendizaje en la era digital. Educación y Humanismo, 21(36), 121-142. http://dx10.17081/eduhum.21.36.3265\n\nSiemens, G. (2006). Connectivism: Learning Theory or Pastime for the Self-Amused? Elearnspace, everything elearning, 6p.', highlights: ['Brown, T. (2019)', 'OCDE - PISA 2022', 'Siemens, G. (2006)', 'Sánchez-Cabrero et al. (2019)'] }
      ]
    };
    return data[this.experience?.title] || [];
  }
}
