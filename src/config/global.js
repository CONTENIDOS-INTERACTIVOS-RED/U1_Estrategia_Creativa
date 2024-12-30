export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la estrategia creativa',
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
      termino: 'Analogías',
      significado:
        'Comparación entre elementos diferentes, para encontrar soluciones innovadoras.',
    },
    {
      termino: '<em>Brainstorming</em>',
      significado: 'Técnica para generar una gran cantidad de ideas, en grupo.',
    },
    {
      termino: 'Canales',
      significado:
        'Medios a través de los cuales se difunde un mensaje (redes sociales, TV, etc.).',
    },
    {
      termino: 'Creatividad',
      significado: 'Capacidad de generar ideas originales e innovadoras.',
    },
    {
      termino: 'Estrategia creativa',
      significado:
        'Plan detallado para comunicar un mensaje de forma original y efectiva, alcanzando objetivos específicos.',
    },
    {
      termino: 'IA (Inteligencia Artificial)',
      significado:
        'Simulación de procesos de inteligencia humana, por parte de máquinas, especialmente sistemas informáticos.',
    },
    {
      termino: 'KPI (Indicadores Claves de Rendimiento)',
      significado: 'Métricas para evaluar el éxito de una campaña.',
    },
    {
      termino: 'Mapas mentales',
      significado:
        'Herramienta visual para organizar ideas, de forma no lineal.',
    },
    {
      termino: 'Mensaje central',
      significado: 'Idea principal que se quiere transmitir.',
    },
    {
      termino: 'Objetivos',
      significado: 'Metas específicas que se desean alcanzar con una campaña.',
    },
    {
      termino: 'Personalización',
      significado:
        'Adaptación de un producto o servicio, a las necesidades y preferencias individuales.',
    },
    {
      termino: 'Público objetivo',
      significado: 'Grupo de personas al que se dirige una campaña.',
    },
    {
      termino: 'SCAMPER',
      significado:
        'Técnica para generar nuevas ideas, a partir de un producto o servicio existente.',
    },
    {
      termino: 'Tono de voz',
      significado:
        'Estilo de comunicación, utilizado para transmitir un mensaje.',
    },
    {
      termino: 'Usuario final',
      significado: 'Persona que utiliza directamente un producto o servicio.',
    },
  ],
}
