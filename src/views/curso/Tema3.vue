<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Metodologías para el desarrollo de ideas creativas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.png', alt='')
      .col-lg-8
        p.mb-4 Generar ideas creativas, requiere explorar técnicas y herramientas que estimulen el pensamiento innovador. A continuación, se describen algunas de las metodologías más utilizadas.
        h4.fst-italic Brainstorming
        .p-4(style="background-color: #ecfcfc")
          p.fw-bold ¿Qué se puede esperar?
          ol.lista-ol--cuadro(data-aos="fade-up")
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Características claves:

            li 
              .lista-ol--cuadro__vineta
                span 2
              | Fluidez de ideas, diversidad de perspectivas y ambiente libre de juicios.

            li 
              .lista-ol--cuadro__vineta
                span 3
              | Genera motivación y mejora la colaboración en equipo.
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #eeddfc").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Definir un objetivo claro.
      .col-lg-3.mb-lg-0.mb-3
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #eeddfc").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Crear un ambiente relajado.
      .col-lg-3.mb-lg-0.mb-3
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #eeddfc").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/33.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Fomentar la participación activa.
      .col-lg-3.mb-lg-0.mb-3
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #eeddfc").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/34.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Visualizar las ideas con herramientas como pizarras o post-its.
    h3 Mapas mentales
    p.mb-4 Los mapas mentales organizan ideas de forma no lineal, facilitando la conexión entre conceptos.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img(src="@/assets/curso/temas/35.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Visuales
            p.mb-0.text-center Uso de imágenes, colores y palabras claves, para representar ideas de manera atractiva y memorable.
      .col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img(src="@/assets/curso/temas/36.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Jerárquicos
            p.mb-0.text-center Organizan ideas en niveles de importancia, desde un concepto central, hacia ideas secundarias.
      .col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img(src="@/assets/curso/temas/37.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Asociativos
            p.mb-0.text-center Permiten crear conexiones inesperadas que estimulan el pensamiento lateral.
    h4 
    p.mb-4 Esta técnica, estructura la creatividad mediante acciones específicas para modificar productos o procesos existentes.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span.fst-italic SCAMPER
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.text-white.text-center(style="background-color: #e23e64") Letra
                th.text-white.text-center(style="background-color: #e23e64") Acción
                th.text-white.text-center(style="background-color: #e23e64") Ejemplo práctico
            tbody.text-center
              tr
                td S
                td Sustituir
                td Cambiar materiales por opciones sostenibles, en un producto.
              tr
                td C
                td Combinar
                td Fusionar café con tazas comestibles, para un nuevo concepto de consumo.
              tr
                td A
                td Adaptar
                td Implementar estrategias de éxito de otra industria, en un contexto diferente.
      .col-lg-4.col-7: img(src="@/assets/curso/temas/38.svg", style="max-width: 100%")
    .row.justify-content-center.mb-5
      .col-lg-4.col-7: img(src="@/assets/curso/temas/39.png", style="max-width: 100%")
      .col-lg-8
        h3 Analogías
        p.mb-4 Las analogías permiten abordar problemas complejos mediante comparaciones entre elementos diferentes.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #fedac8").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/40.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4 Ejemplo práctico:
              p.mb-0 Diseñar una #[em app] comparándola con un mapa: guía al usuario paso a paso, para alcanzar sus objetivos.
    h3 Seis sombreros para pensar
    p.mb-4 Esta técnica propone analizar un tema desde seis perspectivas, representadas por diferentes sombreros:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/41.svg', alt='Texto que describa la imagen')
      .tarjeta.bg-white.p-3(x="21.4%" y="71.8%" numero="+")
        .h5.mb-2 Blanco
        p Datos y hechos objetivos.
      .tarjeta.bg-white.p-3(x="25.1%" y="38.7%" numero="+")
        .h5.mb-2 Rojo
        p Emociones e intuiciones.
      .tarjeta.bg-white.p-3(x="39.5%" y="13%" numero="+")
        .h5.mb-2 Negro
        p Evaluación crítica y riesgos.
      .tarjeta.bg-white.p-3(x="59%" y="13%" numero="+")
        .h5.mb-2 Amarillo
        p Beneficios y optimismo.
      .tarjeta.bg-white.p-3(x="75%" y="38.7%" numero="+")
        .h5.mb-2 Verde
        p Creatividad e ideas nuevas.
      .tarjeta.bg-white.p-3(x="78.3%" y="71%" numero="+")
        .h5.mb-2 Azul
        p Organización y control del proceso.
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        h3 Cuándo utilizar los seis sombreros para pensar y consejos efectivos
        p.mb-0 La técnica de los Seis Sombreros para Pensar, desarrollada por Edward de Bono, es ideal para abordar problemas y generar soluciones desde múltiples perspectivas, proporcionando una visión integral. Esta metodología resulta especialmente útil en contextos grupales o procesos que requieren decisiones estratégicas.
          br
          br
          |#[b Situaciones en las que se pueden aplicar:]
      .col-lg-3.col-7: img(src="@/assets/curso/temas/42.svg", style="max-width: 100%")
    .bg-full-width.p-5(style="background-color: #e2fafb ").mb-5
      .row.justify-content-center.mb-4
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #e23e64 "): h3.mb-0 Reuniones de equipo
            .tarjeta-move__content.w-100(style="background-color: #e3d7da; border: solid 2px #e23e64")
              p.mb-0 Para fomentar decisiones colaborativas, resolver problemas y generar ideas innovadoras.
      .row.justify-content-center.mb-4
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #ac59f1 "): h3.mb-0 Planificación estratégica
            .tarjeta-move__content.w-100(style="background-color: #eeddfc; border: solid 2px #ac59f1")
              p.mb-0 Para explorar escenarios diversos y evaluar opciones, de manera estructurada.
      .row.justify-content-center.mb-4
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #fd884d "): h3.mb-0 Resolución de conflictos
            .tarjeta-move__content.w-100(style="background-color: #fee6da; border: solid 2px #fd884d")
              p.mb-0 Para lograr acuerdos mutuamente beneficiosos, mediante diferentes enfoques.
      .row.justify-content-center.mb-4
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #A3F0F3 "): h3.mb-0(style='color: #0B0A0A ') Desarrollo de productos y servicios
            .tarjeta-move__content.w-100(style="background-color: #ecfcfc; border: solid 2px #A3F0F3")
              p.mb-0 Para estimular la creatividad en la ideación de nuevas propuestas.
    p.mb-4.fw-bold Consejos para su aplicación:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Establecer reglas claras")
            p.mb-0 Definir tiempos y secuencia para cada sombrero, asegurando un flujo ordenado.
          div(titulo="Asignar roles")
            p.mb-0 Cada participante puede asumir un sombrero específico, o rotar entre ellos.
          div(titulo="Fomentar la participación activa")
            p.mb-0 Dar espacio a cada miembro, para expresar sus ideas sin interrupciones.
          div(titulo="Evitar la crítica temprana")
            p.mb-0 Priorizar la generación de ideas, sin emitir juicios durante las etapas iniciales.
          div(titulo="Resumir al finalizar")
            p.mb-0 Sintetizar las conclusiones claves y los próximos pasos a seguir.
      .col-lg-4.col-7: img(src="@/assets/curso/temas/43.png", style="max-width: 100%")
    p.mb-4 #[b Ejemplo práctico]
      br
      br
      |Un equipo de marketing desea lanzar un nuevo producto y aplica la técnica:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/44.png', alt='')
      .col-lg-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/temas/45.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Blanco (datos)
            p.mb-0.text-center Analizan tendencias de mercado y estadísticas relevantes.
          .bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/temas/46.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Rojo (emociones)
            p.mb-0.text-center Exploran sentimientos sobre el producto y anticipan posibles reacciones.
          .bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/temas/47.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Negro (riesgos)
            p.mb-0.text-center Identifican desafíos y limitaciones potenciales.
          .bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/temas/48.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Amarillo (optimismo)
            p.mb-0.text-center Destacan los beneficios y oportunidades del producto.
          .bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/temas/49.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Verde (creatividad)
            p.mb-0.text-center Generan ideas disruptivas para el lanzamiento.
          .bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/temas/50.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Azul (control)
            p.mb-0.text-center Estructuran las conclusiones y trazan un plan de acción.
    h3 #[em Design Thinking:] enfoque iterativo centrado en el usuario
    .bg-color-1.bg-full-width.p-5(data-aos="fade-left" style="background-color: #f9d7df").mb-4
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/51.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El #[em Design Thinking] es una metodología enfocada en resolver problemas de manera innovadora y efectiva, partiendo de una comprensión profunda de las necesidades humanas. Este proceso iterativo combina empatía, creatividad y análisis.
    p.mb-4.fw-bold Las fases principales del proceso, son:
    .bg-full-width.p-5.bg-slyder.mb-5
      SlyderA(tipo='b').bg-white
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Empatizar
            p Realizar entrevistas con usuarios, para identificar frustraciones en la meditación digital.
          .col-lg-5.col-7
            img(src='@/assets/curso/temas/52.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Definir
            p Plantear un problema: "Los usuarios necesitan una app de meditación personalizada, accesible y fácil de usar".
          .col-lg-5.col-7
            img(src='@/assets/curso/temas/53.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Idear
            p Generar ideas como meditaciones guiadas personalizables o integración, con dispositivos wearables.
          .col-lg-5.col-7
            img(src='@/assets/curso/temas/54.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Prototipar
            p Crear wireframes de la app, para validar funcionalidades claves con usuarios.
          .col-lg-5.col-7
            img(src='@/assets/curso/temas/55.png', alt='')
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Testear
            p Probar la app con un grupo piloto y ajustar según su feedback.
          .col-lg-5.col-7
            img(src='@/assets/curso/temas/56.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/57.svg', alt='')
      .col-lg-8
        .p-4(style="background-color: #f6edfd")
          p.fw-bold Las fases principales del proceso, son:
          ol.lista-ol--cuadro(data-aos="fade-up")
            li 
              .lista-ol--cuadro__vineta
                span 1
              | #[b Soluciones personalizadas:] alinear las propuestas con las necesidades reales del usuario.

            li 
              .lista-ol--cuadro__vineta
                span 2
              | #[b Reducción de riesgos:] validar ideas antes de invertir grandes recursos.

            li 
              .lista-ol--cuadro__vineta
                span 3
              | #[b Innovación continua:] mediante iteraciones y retroalimentación.
    h3 #[em Storytelling:] el arte de conectar con emociones
    p.mb-4 El #[em storytelling] utiliza narrativas para comunicar ideas y generar impacto emocional. Es una metodología eficaz, para diferenciar marcas, inspirar acciones y simplificar conceptos complejos.
      br
      br
      |#[b Las claves para una narrativa efectiva, son:]
    .bg-full-width.p-5.mb-4(style="background-color: #e2fafb ")
      img(src='@/assets/curso/temas/58.svg', alt='')
    p.fw-bold Los elementos del #[em storytelling] son: 
    .row.justify-content-center.mb-5
      .col-lg-4.col-7: img(src='@/assets/curso/temas/59.png', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Héroe")
            p.mb-0 Un emprendedor que necesita un café, para alcanzar sus metas.
          div(titulo="Conflicto")
            p.mb-0 La falta de energía, para mantener su productividad.
          div(titulo="Resolución")
            p.mb-0 El café de la marca, le proporciona la energía para superar obstáculos y alcanzar el éxito.
          div(titulo="Final")
            p.mb-0 El emprendedor logra lanzar su startup, gracias al café que lo acompañó durante su jornada.
    p.mb-4.fw-bold Los beneficios son:
    .row.justify-content-center.mb-5
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #eeddfc").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/60.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4 Conexión emocional 
              p.mb-0 Fortalece la relación entre la marca y la audiencia.
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #eeddfc").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/60.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4 Simplificación de mensajes 
              p.mb-0 Hace que las ideas sean más fáciles de entender y de recordar.
      .col-lg-4
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #eeddfc").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/60.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4 Diferenciación
              p.mb-0 Ayuda a destacar, frente a la competencia.
    h3 Gamificación: motivación a través del juego
    p.mb-4 La gamificación incorpora dinámicas de juego, en contextos no lúdicos, para fomentar la participación, creatividad y colaboración.
      br
      br
      |Cómo implementar gamificación:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Definir objetivos " :icono="require('@/assets/curso/temas/icon1.svg')")(style="background-color: #f3f3f3 ")
        .row.justify-content-center.p-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/61.png', alt='')
          .col-lg-8
            h4 Definir objetivos
            p.mb-0 Identificar metas claras, como estimular ideas o resolver problemas.
      .py-4.py-md-5(titulo="Diseñar mecánicas " :icono="require('@/assets/curso/temas/icon1.svg')")(style="background-color: #f3f3f3 ")
        .row.justify-content-center.p-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/62.png', alt='')
          .col-lg-8
            h4 Diseñar mecánicas
            p.mb-0 Incluir elementos como puntos, niveles, insignias y recompensas.
      .py-4.py-md-5(titulo=" Establecer reglas claras" :icono="require('@/assets/curso/temas/icon1.svg')")(style="background-color: #f3f3f3 ")
        .row.justify-content-center.p-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/63.png', alt='')
          .col-lg-8
            h4 Establecer reglas claras
            p.mb-0 Asegurar que todos comprendan la dinámica.
      .py-4.py-md-5(titulo="Promover competencia sana " :icono="require('@/assets/curso/temas/icon1.svg')")(style="background-color: #f3f3f3 ")
        .row.justify-content-center.p-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/64.png', alt='')
          .col-lg-8
            h4 Promover competencia sana
            p.mb-0 Utilizar desafíos motivadores, sin generar tensiones.
    p.mb-4 #[b Ejemplo práctico:]
      br
      br
      |En un taller de innovación, los equipos compiten creando ideas originales. Los puntos se otorgan por:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Incremento en la participación")
            p.mb-0 Equipos motivados por recompensas.
          div(titulo="Mejora en la retención")
            p.mb-0 Los participantes recuerdan el proceso, gracias a la interacción lúdica.
          div(titulo="Fomento de la colaboración")
            p.mb-0 Los equipos trabajan juntos, para superar desafíos creativos.
          div(titulo="Proceso más dinámico")
            p.mb-0 Elementos de juego, hacen la experiencia más atractiva.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/65.png', alt='')
    h3 Integración metodológica para campañas publicitarias
    p.mb-4 La combinación de estas metodologías, potencia los resultados de cualquier estrategia publicitaria.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/66.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Investigación
          p.mb-0.text-center Realizar entrevistas con corredores, para identificar sus necesidades (Design Thinking).
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/67.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Narrativa
          p.mb-0.text-center Crear una historia sobre un atleta que supera límites, con las zapatillas (Storytelling).
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/68.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Participación
          p.mb-0.text-center Diseñar una app con retos de carrera, donde los usuarios compiten por puntos (Gamificación).
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/69.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Optimización
          p.mb-0.text-center Personalizar recomendaciones, según el historial del usuario, con IA.
    .bg-color-1.bg-full-width.p-5(data-aos="fade-left" style="background-color: #e2fafb").mb-4
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/temas/70.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 La creatividad debe ser sensiblEstas metodologías, aplicadas de manera combinada, generan soluciones innovadoras, emocionalmente relevantes y orientadas al usuario.e al contexto social y cultural, además de alinearse con los valores de la marca.





















</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>
