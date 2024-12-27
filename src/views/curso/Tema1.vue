<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Innovación y creatividad en la estrategia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La construcción de escenarios es una de las herramientas más utilizadas en el análisis prospectivo. Este enfoque fue popularizado por Herman Kahn, pionero de los estudios de prospectiva en la RAND Corporation, durante la década de 1950, y más tarde desarrollado en instituciones como el Instituto de Prospectiva de París. Los escenarios se emplean para explorar futuros alternativos que permitan anticipar riesgos, identificar oportunidades y definir estrategias adaptativas (Kahn & Wiener, 1967).
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Fundamentos de la innovación estratégica

    .bg-full-width.bg-color-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
          .col-lg-6
            p(data-aos="fade-left").mb-4 Para conocer sobre los fundamentos de la innovación estratégica, lo invitamos a escuchar el siguiente podcast.
            
            TarjetaAudio.color-primario.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Creatividad aplicada al desarrollo sostenible

    p(data-aos="fade-left").mb-4 La creatividad es fundamental para la innovación, especialmente cuando se aplica al desarrollo sostenible. Según Boada & Cardona Montoya (2020), la creatividad permite descubrir soluciones que aborden desafíos ambientales y sociales de manera efectiva y original.

    h3(data-aos="fade-left").mb-4 Importancia de la creatividad en la estrategia

    .bg-color-3.mb-5(data-aos="fade-up").px-4
      .row.justify-content-center.align-items-center
        .col-lg-7
          .p-4.py-5
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 La creatividad, definida como la capacidad de generar ideas novedosas y útiles, es esencial para identificar oportunidades ocultas y crear soluciones disruptivas (López Segrera et al., 2004). Herramientas como el design thinking y el método SCAMPER, son eficaces para fomentar el pensamiento creativo en la resolución de problemas.

            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 En el contexto de la sostenibilidad, la creatividad no solo impulsa la innovación en productos y servicios, sino que también transforma procesos empresariales para hacerlos más respetuosos con el medio ambiente.

        .col-lg-5
          figure
            img(src="@/assets/curso/tema1/3.svg", data-aos="zoom-in")


    h3(data-aos="fade-left").mb-4 Creatividad para el desarrollo sostenible

    .bg-color-3.mb-5(data-aos="fade-up").px-4
      .row.justify-content-center.align-items-center
        .col-lg-7.order-2
          .p-5
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Estrategias creativas para la sostenibilidad. Desarrollar modelos de negocio que minimicen el uso de recursos naturales y promuevan la reutilización. Por ejemplo, Aguas Danone, en España, implementó procesos sostenibles de embotellado y promovió el uso de botellas reciclables (Perilla Maluche et al., 2020).

            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Cocreación con la comunidad. Empresas como Veritas, un supermercado ecológico español, involucran a las comunidades en la creación de productos que sean culturalmente relevantes y sostenibles (Sánchez González, 2018).

        .col-lg-5.order-1
          figure
            img(src="@/assets/curso/tema1/3.svg", data-aos="zoom-in")


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Herramientas para fomentar la creatividad

    p(data-aos="fade-left").mb-4 A continuación, estudiaremos algunas de las herramientas más utilizadas para fomentar la creatividad.

    h3(data-aos="fade-left").mb-4 #[em Design thinking]

    p(data-aos="fade-left").mb-4 Es un enfoque para la resolución de problemas que combina la creatividad, el pensamiento estructurado y la empatía para generar soluciones centradas en las necesidades del usuario. Este proceso, desarrollado por David Kelley y el equipo de IDEO, está diseñado para abordar problemas complejos en los que la comprensión profunda de las personas es fundamental para el éxito de la solución. El método Design Thinking se caracteriza por ser iterativo y colaborativo, y se divide en cinco etapas principales:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Empatizar" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Empatizar
            p Esta etapa se centra en comprender profundamente al usuario y su contexto. Se trata de ponerse en los zapatos de las personas para identificar sus necesidades, problemas, deseos y emociones. Las técnicas comunes incluyen entrevistas, observación directa y estudios etnográficos, que permiten capturar la experiencia del usuario sin prejuicios.
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-1.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Definir" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Definir
            p Después de recopilar información en la etapa de empatizar, el equipo define el problema central que necesita resolver, formulando una declaración de problema clara y concisa. Esta declaración actúa como guía para el equipo, enfocando los esfuerzos en una necesidad específica. Es importante que el problema se enuncie desde la perspectiva del usuario, para asegurar que la solución esté alineada con sus necesidades reales.
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-2.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Idear" :icon="require('@/assets/bullets/icon-tab-c-3.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Idear
            p En esta fase, el objetivo es generar una amplia gama de ideas creativas que puedan resolver el problema definido. El equipo utiliza técnicas de creatividad, como el brainstorming y el método SCAMPER, para explorar diversas soluciones sin restricciones. Durante esta etapa, es fundamental fomentar un ambiente abierto donde se compartan ideas sin juzgar, permitiendo que la creatividad fluya sin limitaciones. 
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-3.png', alt='', style="width: 100%;")

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Prototipar" :icon="require('@/assets/bullets/icon-tab-c-3.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Prototipar
            p El prototipado implica crear versiones preliminares de las soluciones más prometedoras para explorarlas y evaluar su efectividad. Los prototipos pueden variar desde bocetos simples en papel, hasta modelos funcionales. La idea es construir algo tangible que se pueda probar, lo que permite descubrir aspectos positivos y negativos de cada idea y hacer ajustes antes de comprometerse a una solución final.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-4.png', alt='', style="width: 100%;")

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Probar" :icon="require('@/assets/bullets/icon-tab-c-3.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Probar
            p La fase de prueba consiste en evaluar los prototipos con usuarios reales, para obtener retroalimentación directa. Esta etapa es clave para validar o refinar la solución y para comprender cómo se desempeña en un entorno real. Es común que los prototipos se ajusten o evolucionen en respuesta a los comentarios obtenidos, iterando entre probar y ajustar, hasta alcanzar una solución óptima.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-5.png', alt='', style="width: 100%;")

    h3(data-aos="fade-left").mb-4 #[em Brainstorming]

    .row.mb-5
      .col-lg-8
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Desarrollado por Alex Osborn en 1939, es una técnica de generación de ideas en grupo, que busca estimular la creatividad y la innovación. Su principal objetivo es el de crear un ambiente en el que los participantes puedan proponer ideas libremente, sin miedo a ser juzgados o criticados, lo que facilita que surjan soluciones novedosas y efectivas. Osborn definió el brainstorming como un método para "usar el cerebro para atacar un problema" desde diferentes perspectivas, promoviendo una cantidad significativa de ideas y, al final, la selección de las mejores.

        p(data-aos="fade-left") Para que una sesión de brainstorming sea efectiva, es fundamental seguir algunos principios básicos planteados por Osborn:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/7.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Suspensión del juicio") Durante la fase de generación de ideas, no se permite criticar, evaluar o descartar ninguna propuesta. Este principio es fundamental para evitar que los participantes se autocensuren y permite que ideas inusuales o aparentemente poco prácticas, puedan expresarse libremente. Solo en la fase de selección, se realiza una evaluación crítica.
          p(numero="2" titulo="Enfoque en la cantidad sobre la calidad") El objetivo es generar tantas ideas como sea posible, incluso si parecen poco realistas o irrelevantes al principio. Osborn sostenía que una gran cantidad de ideas aumenta la probabilidad de que surja una solución creativa e innovadora.
          p(numero="3" titulo="Bienvenida a ideas inusuales") Se alienta a los participantes a pensar de manera original y proponer ideas "fuera de lo común". Este principio fomenta la exploración de enfoques novedosos y permite que las soluciones creativas emerjan, a menudo, a partir de ideas que inicialmente pueden parecer poco convencionales.
          p(numero="4" titulo="Construir sobre las ideas de los demás") La colaboración es esencial en el brainstorming. Los participantes deben sentirse libres para tomar una idea expresada por otro miembro del grupo y ampliarla o modificarla, creando así una especie de "cadena de ideas" que enriquece las propuestas iniciales.

    p(data-aos="fade-left").mb-4 Ahora, los pasos para realizar una sesión de brainstorming eficaz, son los siguientes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Definir el problema o tema específico
              p Antes de comenzar, el facilitador debe definir claramente el problema o la pregunta que necesita ser resuelta. La claridad en el objetivo de la sesión, ayuda a los participantes a concentrarse en generar ideas relevantes.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Crear un ambiente de confianza y colaboración
              p Es fundamental establecer un ambiente en el que todos los participantes se sientan cómodos compartiendo sus ideas. El facilitador debe recordar las reglas de la sesión, especialmente la de no juzgar, y fomentar un ambiente de respeto y apertura.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Asignar un tiempo determinado para la generación de ideas
              p Las sesiones de brainstorming suelen ser más efectivas cuando se limitan a un periodo corto, entre 15 y 30 minutos. Esto evita que los participantes pierdan interés o se distraigan, y también los motiva a concentrarse en generar ideas rápidamente.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-3.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Utilizar herramientas de visualización
              p Es útil que un facilitador o un miembro del equipo anote todas las ideas en un tablero, pizarra o en un documento compartido, visible para todos. Esto permite que los participantes vean y recuerden las ideas propuestas y fomenta la construcción de ideas colaborativas.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-4.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Fomentar la participación activa de todos los miembros
              p Para aprovechar al máximo la diversidad de pensamientos, es importante que todos los miembros del equipo participen. Si algunos participantes se muestran más tímidos, el facilitador puede motivarlos a expresar sus ideas o hacer preguntas para incentivar su contribución.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-5.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Selección y evaluación de ideas
              p Al finalizar la fase de generación, el grupo evalúa las ideas. Se pueden utilizar criterios específicos, como viabilidad, impacto o relevancia, para seleccionar las ideas más prometedoras. Las ideas elegidas pueden desarrollarse en sesiones posteriores o llevarse a cabo como proyectos.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-6.png")

    h3(data-aos="fade-left").mb-4 Método SCAMPER

    p(data-aos="fade-left").mb-4 Es una técnica de creatividad desarrollada por Bob Eberle que proporciona un marco estructurado para generar ideas innovadoras y mejorar productos, servicios o procesos. SCAMPER es un acrónimo que representa siete estrategias diferentes para abordar un problema: Sustituir, Combinar, Adaptar, Modificar, Poner en otro uso, Eliminar y Reordenar. Al hacer preguntas basadas en cada una de estas estrategias, el método SCAMPER ayuda a estimular la creatividad y a pensar de forma no convencional, permitiendo encontrar soluciones que de otro modo podrían pasar desapercibidas.

    p(data-aos="fade-left").mb-4 #[b Los elementos del método SCAMPER, son:]

    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/8.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Sustituir (S)") 
            p Implica reemplazar una parte del producto, servicio o proceso, por otra alternativa. Este cambio puede ser de materiales, componentes, personas, o incluso métodos de trabajo.
            p #[b Ejemplo.] En la industria de la moda, se podría sustituir el algodón convencional por algodón orgánico, para hacer el producto más sostenible. Otra opción es sustituir empaques de plástico por alternativas biodegradables en la industria de alimentos.
          div(numero="2" titulo="Combinar (C)") 
            p Consiste en unir dos o más elementos para crear algo nuevo o para mejorar la funcionalidad del producto. La combinación puede incluir recursos, materiales, procesos o tecnologías.
            p #[b Ejemplo.] Un fabricante de tecnología podría combinar funciones de varios dispositivos en uno solo, como un teléfono inteligente que también sea cámara, GPS y reproductor de música. En sostenibilidad, una empresa podría combinar envases reutilizables, con un sistema de devolución.
          div(numero="3" titulo="Adaptar (A)") 
            p Significa ajustar o modificar una parte del producto o proceso, para cumplir con un propósito diferente o adaptarse a nuevas condiciones. Este cambio permite que el producto se adapte a nuevas necesidades o contextos.
            p #[b Ejemplo.] En la industria de la alimentación, adaptar un envase para ser reciclable o reutilizable. O en el diseño de productos, adaptar una lámpara de mesa, para que funcione también como una lámpara portátil.
          div(numero="4" titulo="Modificar (M)")
            p En esta etapa, el objetivo es cambiar alguna característica del producto, como el tamaño, la forma, el color o el diseño, para hacerlo más atractivo o funcional. También puede significar maximizar o minimizar aspectos específicos del producto.
            p #[b Ejemplo.] Reducir el tamaño de un empaque para hacerlo más ecológico y fácil de transportar, o aumentar el tamaño de una pantalla de dispositivo, para mejorar la experiencia del usuario.

    .row.align-items-center.mb-5.pb-4
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/9.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="5" titulo="Poner en otro uso (P)")
            p Este paso implica utilizar el producto o proceso para un propósito diferente al que fue originalmente diseñado. Esta técnica es particularmente útil para descubrir aplicaciones adicionales o nuevos mercados.
            p #[b Ejemplo.] Los contenedores de alimentos en vidrio, podrían reutilizarse como recipientes de almacenamiento en el hogar. Otro ejemplo es el uso de llantas de automóvil recicladas para fabricar pisos de parques infantiles.
          div(numero="6" titulo="Eliminar (E)")
            p Consiste en identificar y eliminar partes innecesarias del producto o proceso, lo que puede simplificar el diseño, reducir costos y mejorar la funcionalidad.
            p #[b Ejemplo.] En la industria de la tecnología, eliminar funciones o botones innecesarios en un dispositivo, para hacerlo más fácil de usar. En el empaque, eliminar capas innecesarias para reducir el desperdicio y costo.
          div(numero="7" titulo="Reordenar (R)")
            p Esta estrategia implica reorganizar o cambiar el orden de los componentes o pasos en un proceso, lo que puede mejorar la eficiencia o hacer el producto más atractivo.
            p #[b Ejemplo.] Cambiar el orden en el proceso de fabricación para reducir el tiempo de producción. En el diseño de una aplicación, reordenar las opciones en el menú, para hacerlas más accesibles y mejorar la experiencia del usuario.

    h3(data-aos="fade-left").mb-5 Mapa mental #[em (mind mapping)]

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es una herramienta visual introducida por Tony Buzan en la década de 1970, para organizar ideas y conceptos de manera no lineal, permitiendo estructurar y relacionar información de forma intuitiva y creativa. El mind mapping parte de un concepto central, alrededor del cual se dibujan ramas que representan subtemas, ideas o conceptos relacionados. Cada rama puede ramificarse a su vez, creando una red de ideas interconectadas que facilita tanto la comprensión como la generación de nuevas ideas.

        p(data-aos="fade-left") #[b Las características principales del mapa mental, son:]



    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Estructura radial
              p Los mapas mentales tienen una estructura que comienza en un concepto o palabra central y se expande en ramas que representan ideas relacionadas. Esta estructura radial refleja la forma en que el cerebro procesa la información, permitiendo que los usuarios organicen ideas de una manera que imita el pensamiento natural.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1-2.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Uso de imágenes y palabras claves
              p Los mapas mentales suelen incorporar imágenes, íconos, colores y palabras claves para representar cada idea. Esto no solo hace que el mapa sea visualmente atractivo, sino que también ayuda a que la información sea más memorable y fácil de recordar.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2-2.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Jerarquía visual
              p La información se organiza jerárquicamente, con ideas más generales o importantes cerca del centro y detalles específicos hacia las ramas exteriores. Esta jerarquía permite que el usuario comprenda las relaciones entre las ideas y vea la estructura general de un tema de un vistazo.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-3-2.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Estímulo de la creatividad y asociación
              p La naturaleza visual y asociativa de los mapas mentales, permite que los usuarios generen ideas nuevas al hacer conexiones inesperadas entre conceptos. Esta herramienta es particularmente útil para la lluvia de ideas (brainstorming), la resolución de problemas y la planificación.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-4-2.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Hackathons o sprints de innovación
              p Se realizan eventos de corta duración, generalmente de 24 a 48 horas, donde equipos multidisciplinarios trabajan intensamente para encontrar soluciones creativas a problemas específicos. Esta técnica es popular en empresas tecnológicas para impulsar ideas frescas y disruptivas.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-5-2.png")


    h3(data-aos="fade-left").mb-5 #[em Six Thinking Hats] (Seis sombreros para pensar)

    p(data-aos="fade-left").mb-4 Es una metodología desarrollada por Edward de Bono que permite a los equipos explorar y evaluar ideas desde distintas perspectivas, facilitando una toma de decisiones equilibrada y completa. Cada "sombrero" representa un tipo específico de pensamiento, y al "ponerse" cada sombrero, los participantes adoptan una postura mental diferente, lo que ayuda a evitar sesgos, promover la creatividad y lograr una visión integral del problema o situación en cuestión.

    p(data-aos="fade-left") #[b Conozcamos la descripción de los seis sombreros:]

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario(data-aos="zoom-in")
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 1032px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="0%" y="28%" numero="1")
                  h5 Sombrero blanco (hechos y datos)
                  p Este sombrero se centra en la información objetiva y los hechos. Los participantes se enfocan en los datos disponibles, las cifras y la información verificada, y consideran qué información adicional podría ser necesaria para tomar una decisión informada.Ejemplo. "¿Qué datos tenemos sobre la viabilidad económica de este proyecto? ¿Qué información nos falta para hacer una evaluación completa?"


                .bg-color-white.box-shadow.p-3(x="30%" y="28%" numero="2")
                  h5 Sombrero negro (crítica y riesgos)
                  p El sombrero negro representa el pensamiento crítico y los posibles riesgos o puntos negativos de la idea. Aquí, los participantes identifican obstáculos, peligros y razones por las que la idea podría fallar. Este sombrero es fundamental para prever problemas y gestionar riesgos. Ejemplo. "¿Qué riesgos financieros y operativos podríamos enfrentar? ¿Cuáles son las posibles desventajas de implementar esta estrategia?"


                .bg-color-white.box-shadow.p-3(x="59%" y="28%" numero="3")
                  h5 Sombrero azul (control y organización)
                  p El sombrero azul es el sombrero de la organización y el control del proceso de pensamiento. Los participantes estructuran la sesión, resumen las ideas generadas y planifican los próximos pasos. Este sombrero es usado por el facilitador para dirigir la conversación y asegurar que se cubran todas las perspectivas. Ejemplo. "Hemos explorado los riesgos y beneficios; ahora, ¿cómo podemos priorizar las ideas y crear un plan de acción?".

                .bg-color-white.box-shadow.p-3(x="73.5%" y="74%" numero="4")
                  h5 Sombrero rojo (emociones e intuición)
                  p Bajo el sombrero rojo, los participantes expresan sus sentimientos, emociones e intuiciones sin necesidad de justificar o racionalizar. Este sombrero es útil para explorar reacciones emocionales y percepciones subjetivas, que pueden influir en la toma de decisiones.Ejemplo. "Mi intuición me dice que esta idea podría tener una respuesta negativa en el mercado. Me preocupa la reacción de nuestros clientes más conservadores".

                .bg-color-white.box-shadow.p-3(x="44.5%" y="74%" numero="+")
                  h5 Sombrero verde (creatividad y alternativas)
                  p Este sombrero representa el pensamiento creativo y el surgimiento de nuevas ideas. Los participantes generan soluciones alternativas, exploran caminos diferentes e innovan sin restricciones. Es una etapa de exploración y pensamiento "fuera de lo común". Ejemplo. "¿Cómo podríamos hacer que este producto sea más sostenible? ¿Qué alternativas existen para los materiales que estamos utilizando?".

                .bg-color-white.box-shadow.p-3(x="15.5%" y="74%" numero="+")
                  h5 Sombrero amarillo (optimismo y beneficios)
                  p Con el sombrero amarillo, el enfoque es en los aspectos positivos y los beneficios de la idea. Los participantes exploran las ventajas, oportunidades y el valor potencial que la idea podría aportar. Este sombrero es esencial para identificar los elementos positivos y fortalecer la confianza en el proyecto.
                  p Ejemplo.: "Si logramos implementar esta estrategia, podríamos reducir costos y mejorar nuestra eficiencia energética".


    p(data-aos="fade-left").mb-5 Ahora, conozcamos cómo usar los seis sombreros de pensamiento en una sesión de trabajo:


    .row.align-items-center.mb-5.pb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/12.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Definir el problema o meta")
            p Antes de comenzar, es importante que el equipo tenga claro el problema o la meta que quiere alcanzar. Esto ayuda a enfocar la conversación y permite que cada sombrero aporte una perspectiva específica y relevante.
          div(numero="2" titulo="Asignar y cambiar sombreros")
            p Los participantes pueden usar todos los sombreros de manera secuencial, o cada miembro del equipo puede "ponerse" un sombrero específico para contribuir desde esa perspectiva. En la mayoría de los casos, el grupo pasa por cada sombrero uno por uno, explorando la idea desde cada ángulo antes de pasar al siguiente sombrero.
          div(numero="3" titulo="Explorar ideas bajo cada sombrero")
            p Cada sombrero se usa por separado para permitir que el equipo se concentre en un tipo de pensamiento a la vez. Esta segmentación ayuda a evitar conflictos entre ideas y permite una evaluación estructurada de la situación.
          div(numero="4" titulo="Sintetizar y organizar el pensamiento (sombrero azul).")
            p Al final de la sesión, el facilitador usa el sombrero azul para organizar las ideas y planificar los próximos pasos. Se resumen las conclusiones y se elabora un plan de acción, basado en las perspectivas y hallazgos obtenidos.


    h3(data-aos="fade-left").mb-5 #[em World] Café

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Es una metodología creada por Juanita Brown y David Isaacs, que facilita la conversación y el intercambio de ideas en grupos grandes. Su objetivo es promover un diálogo significativo en torno a temas complejos o importantes, aprovechando la inteligencia colectiva de todos los participantes. Inspirada en el ambiente informal de un café, esta técnica fomenta un entorno donde los participantes se sienten relajados y dispuestos a compartir sus ideas y experiencias. A través de múltiples rondas de discusión en mesas pequeñas, las ideas se refinan y se conectan, llevando a una comprensión más profunda y colectiva del tema.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/13.png', alt='')

    


    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5.pb-md-3

        p(data-aos="fade-left").mb-5 #[b Los principios básicos del World Café, son:]


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/14.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Crear un entorno acogedor
                p.mb-0 El ambiente debe ser similar al de un café: mesas pequeñas, sillas cómodas y un ambiente relajado que invite a la conversación. Esto permite que los participantes se sientan cómodos y más dispuestos a participar abiertamente.
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/15.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Fomentar la participación y la escucha activa
                p.mb-0 Los participantes deben sentirse motivados a compartir sus ideas y escuchar las contribuciones de los demás. La escucha activa es fundamental para comprender y construir sobre las ideas de otros.
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/16.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Rotación y conexión de ideas
                p.mb-0 Al rotar entre mesas y conversar con diferentes personas, las ideas iniciales se enriquecen y evolucionan, permitiendo que se conecten y se expandan de forma colectiva.
          .col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/17.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Documentar ideas claves
                p.mb-0 Cada mesa cuenta con un anfitrión que toma nota de las ideas principales discutidas y las presenta al final. Esto ayuda a capturar los puntos importantes y a visualizar las conexiones emergentes entre temas.


    p(data-aos="fade-left").mb-5 #[b Y los pasos para realizar una sesión de World Café, son:]


    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Configurar las mesas y definir los temas
              p Organiza varias mesas pequeñas, cada una con una pregunta o tema específico, que sea relevante para la discusión general. Estas preguntas deben estar formuladas para alentar el pensamiento y la reflexión, y pueden ser amplias para permitir que los participantes exploren diferentes ángulos.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1-3.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Asignar a los participantes a mesas iniciales
              p Los participantes se dividen en grupos pequeños y se sientan en las mesas. Cada mesa tiene un anfitrión que permanece en esa mesa durante todas las rondas y ayuda a facilitar la discusión.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2-3.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Primera ronda de discusión
              p En cada mesa, los participantes conversan sobre el tema o la pregunta asignada. Esta ronda dura entre 15 y 20 minutos, y los participantes comparten sus perspectivas, ideas y experiencias. El anfitrión toma nota de los puntos clave y ayuda a mantener el enfoque en el tema.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-3-3.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Rotación de mesas
              p Después de la primera ronda, los participantes se trasladan a una mesa diferente, mientras el anfitrión permanece. Los nuevos participantes llevan consigo las ideas discutidas en la mesa anterior y las comparten en la nueva mesa. Este proceso se repite durante varias rondas, permitiendo que las ideas se propaguen y se conecten entre diferentes grupos.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-4-3.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Refinamiento de ideas
              p A medida que los participantes rotan, las ideas iniciales se enriquecen y evolucionan. Los participantes construyen sobre lo que otros han dicho, lo que permite que las ideas se refinen y se profundicen.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-4-3.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Sesión plenaria y síntesis
              p Al final de las rondas, los anfitriones de cada mesa presentan un resumen de las ideas y conexiones emergentes. Esta sesión plenaria permite que todos los participantes compartan sus aprendizajes y comprensiones, y ayuda a crear una visión colectiva del tema.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-5-3.png")

    .bg-full-width.bg-color-6
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            p.mb-0(data-aos="fade-right").mb-4 Para ampliar la información, lo invitamos a escuchar el pódcast #[strong Planeta sostenible] de Gina Montes, CEO de Indeleble, una empresa sello B.

            a.anexo.mb-4.bg-white.w-fit(href="https://open.spotify.com/episode/6f4mPjPYN4F0a7whf3hsln?si=3f37769412a745e1" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                img(src="@/assets/componentes/link.svg")
              .anexo__texto
                p <strong>Spotify. </strong> Planeta sostenible

          .col-lg-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.svg', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/en/lc/tecnologicadeloriente/titulos/271461" target="_blank" rel="noopener noreferrer") Abad, F. (Coord.). (2014). Dentro de 15 años: ¿Escenarios improbables?: (1 ed.). LID Editorial España.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/en/lc/tecnologicadeloriente/titulos/42001" target="_blank" rel="noopener noreferrer") Bas Amorós, E. (2013). Prospectiva e innovación (Vol. 1: visiones): ( ed.). Plaza y Valdés (España).

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/en/lc/tecnologicadeloriente/titulos/217714" target="_blank" rel="noopener noreferrer") Boada, A. J. & Cardona Montoya, G. Y. M. (2020). La prospectiva: más allá de las proyecciones: (1 ed.). Fondo Editorial CEIPA.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/en/lc/tecnologicadeloriente/titulos/75568" target="_blank" rel="noopener noreferrer") Chávez Martínez, G. (2003). El pensamiento del estratega: ( ed.). Plaza y Valdés (México).

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/en/lc/tecnologicadeloriente/titulos/71774" target="_blank" rel="noopener noreferrer") López Fernández, R. (2016). Expertos y prospectiva en la investigación pedagógica: ( ed.). Editorial Universitaria Sur.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/en/lc/tecnologicadeloriente/titulos/75157" target="_blank" rel="noopener noreferrer") López Segrera, F. Luis Grosso, J. (Coord.) & José Mojica, F. (Coord.). (2004). América Latina y el Caribe en el siglo XXI: perspectiva y prospectiva de la globalización: ( ed.). Editorial Miguel Ángel Porrúa.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/en/lc/tecnologicadeloriente/titulos/228417" target="_blank" rel="noopener noreferrer") Perilla Maluche, R. B. Pijuela Garzón, W. A. & Parra Moreno, C. (2020). Análisis de futuro: algunos métodos alternativos a la "caja de herramientas" de la prospectiva histórica: (1 ed.). Sello Editorial Universidad del Tolima.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/en/lc/tecnologicadeloriente/titulos/59107" target="_blank" rel="noopener noreferrer") Sánchez González, M. (2018). Gestión estratégica, innovación y prospectiva en comunicación: bases, técnicas y casos prácticos: ( ed.). Editorial UOC.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/en/lc/tecnologicadeloriente/titulos/120296" target="_blank" rel="noopener noreferrer") Saldaña Almazán, J. & Niño Gutiérrez, N. S. (2017). Strategic planning at UAGro: ( ed.). Ediciones y Gráficos Eón.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
