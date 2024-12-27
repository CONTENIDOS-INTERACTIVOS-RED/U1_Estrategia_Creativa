export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Innovación estratégica y desarrollo sostenible',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Innovación y creatividad en la estrategia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos de la innovación estratégica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Creatividad aplicada al desarrollo sostenible',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Herramientas para fomentar la creatividad',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo sostenible y responsabilidad social',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación de la viabilidad de estrategias a largo plazo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'capacidad de ajustarse eficazmente a cambios en el entorno, manteniendo competitividad.',
    },
    {
      termino: 'Análisis Delphi',
      significado:
        'método para alcanzar consenso mediante consultas iterativas a expertos, útil en prospectiva.',
    },
    {
      termino: 'Análisis PESTEL',
      significado:
        'herramienta que evalúa factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales.',
    },
    {
      termino: '<em>Brainstorming</em>',
      significado:
        'técnica de generación de ideas en grupo que fomenta creatividad y soluciones innovadoras.',
    },
    {
      termino: 'Cadenas de Suministro',
      significado:
        'red que gestiona el flujo de productos o servicios desde la producción hasta el cliente final.',
    },
    {
      termino: '<em>Design Thinking</em>',
      significado:
        'enfoque de resolución de problemas que combina creatividad, empatía y estructura.',
    },
    {
      termino: 'Economía Circular',
      significado:
        'modelo que promueve la reutilización de recursos, minimizando desechos y optimizando ciclos de vida.',
    },
    {
      termino: 'Economía Verde',
      significado:
        'estrategia de desarrollo sostenible enfocada en reducir el impacto ambiental de las actividades económicas.',
    },
    {
      termino: 'Escenarios Exploratorios',
      significado:
        'modelos que proyectan futuros posibles basados en tendencias e incertidumbres actuales.',
    },
    {
      termino: 'Escenarios Normativos',
      significado:
        'modelos de futuros deseados que reflejan objetivos estratégicos específicos.',
    },
    {
      termino: 'Escenarios Prospectivos',
      significado:
        'proyecciones de futuros posibles que ayudan a guiar la planificación estratégica.',
    },
    {
      termino: '<em>Feedback</em>',
      significado:
        'proceso continuo de revisión y ajuste basado en resultados, mejora la toma de decisiones.',
    },
    {
      termino: 'Gestión del Riesgo',
      significado:
        'identificación y mitigación de riesgos para asegurar el logro de objetivos estratégicos.',
    },
    {
      termino: 'Innovación Abierta',
      significado:
        'estrategia que fomenta la colaboración con agentes externos para desarrollar nuevas ideas y soluciones.',
    },
    {
      termino: 'Innovación Disruptiva',
      significado:
        'innovación que transforma sectores mediante productos o servicios accesibles y revolucionarios.',
    },
    {
      termino: 'Innovación Estratégica',
      significado:
        'proceso de desarrollo de nuevas ideas para fortalecer la competitividad y adaptarse al entorno.',
    },
    {
      termino: 'Mapa Mental',
      significado:
        'herramienta visual que organiza ideas de manera no lineal, fomentando la creatividad.',
    },
    {
      termino: 'Responsabilidad Social Corporativa (RSC)',
      significado:
        'compromiso de la empresa con prácticas éticas que beneficien la sociedad y el medio ambiente.',
    },
    {
      termino: 'SCAMPER',
      significado:
        'técnica que estimula la creatividad mediante Sustituir, Combinar, Adaptar, Modificar, Poner en otro uso, Eliminar y Reordenar.',
    },
    {
      termino: '<em>Six Thinking Hats</em>',
      significado:
        'método de toma de decisiones que explora perspectivas mediante seis tipos de pensamiento.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'enfoque que equilibra crecimiento económico, equidad social y protección ambiental a largo plazo.',
    },
    {
      termino: '<em>World</em> Café',
      significado:
        'técnica de diálogo colaborativo que permite explorar ideas en grupos pequeños y conectar aportes.',
    },
  ],
}
