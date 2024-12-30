<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de la estrategia creativa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/6.png', alt='')
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #e2fafb").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La estrategia creativa, establece las bases para crear campañas innovadoras que conecten con el público. Es una herramienta esencial para desarrollar ideas originales que generen impacto, combinando intuición humana y herramientas tecnológicas avanzadas.
        p.mb-0 La creatividad se fortalece al explorar diversos enfoques y con el apoyo de herramientas como la inteligencia artificial (IA), los procesos creativos se vuelven más dinámicos y efectivos. Esto no reemplaza la intuición humana, sino que la complementa, permitiendo resultados más sólidos y diferenciados.
    h3 La inteligencia artificial aplicada a la creatividad
    p.mb-4 La IA ha transformado la manera de concebir y ejecutar ideas en las campañas publicitarias. Su capacidad para analizar datos, generar contenido y predecir tendencias, permite desarrollar estrategias más personalizadas y optimizadas.
      br
      br
      |#[b Las ventajas claves de la IA en el proceso creativo, son:] 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/8.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Generación rápida de ideas
          p.mb-0.text-center Permite explorar miles de conceptos en segundos.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/9.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Personalización avanzada
          p.mb-0.text-center Analiza datos del consumidor, para crear mensajes relevantes.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/10.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Optimización continua
          p.mb-0.text-center Realiza ajustes en tiempo real, según los resultados de las campañas.
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/11.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Automatización de tareas
          p.mb-0.text-center Libera tiempo para actividades estratégicas y creativas.
    p.mb-4.fw-bold Las aplicaciones prácticas de la IA, son: 
    .bg-full-width.p-5.bg-slyder
      SlyderA(tipo='b').bg-white
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Generación de contenido
            p Crear eslóganes, gráficos y videos, adaptados a unas audiencias específicas.
          .col-lg-5.col-7
            img(src='@/assets/curso/temas/12.png', alt='')
        
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Análisis de datos
            p Identificar tendencias y patrones relevantes, en grandes volúmenes de información.
          .col-lg-5.col-7
            img(src='@/assets/curso/temas/13.png', alt='')
        
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Personalización
            p Ofrecer experiencias únicas basadas en preferencias y comportamientos de los usuarios.
          .col-lg-5.col-7
            img(src='@/assets/curso/temas/14.png', alt='')
        
        .row.justify-content-center.mb-5.p-5
          .col-lg-7.mb-lg-0.mb-3
            h4 Predicción de tendencias
            p Anticipar necesidades futuras, mediante el análisis de datos históricos y actuales.
          .col-lg-5.col-7
            img(src='@/assets/curso/temas/15.png', alt='')
    h3 ¿Qué es la estrategia creativa y por qué es importante?
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/16.svg', alt='')
      .col-lg-8
        p.mb-4 La estrategia creativa, actúa como un plano detallado que guía las campañas publicitarias. Define qué se quiere comunicar, cómo hacerlo y por qué. Esta claridad permite desarrollar mensajes impactantes y coherentes.
        .p-4(style="background-color: #f6edfd")
          p.fw-bold Razones claves para su importancia:
          ol.lista-ol--cuadro(data-aos="fade-up")
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Diferenciación: destacar entre la competencia.

            li 
              .lista-ol--cuadro__vineta
                span 2
              | Conexión emocional: crear vínculos significativos con el público.

            li 
              .lista-ol--cuadro__vineta
                span 3
              | Resultados tangibles: alcanzar objetivos específicos, como ventas o reconocimiento de marca.
    h3 Elementos claves de la estrategia creativa
    p.mb-4 La estrategia creativa integra diversos elementos que aseguran su efectividad. Estos son los principales componentes:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Objetivos claros") Definir metas específicas, como aumentar ventas o mejorar la percepción de marca.
          p.text-small(numero="2" titulo="Público objetivo") Identificar a quién va dirigido el mensaje y entender sus necesidades y deseos.
          p.text-small(numero="3" titulo="Mensaje central") Transmitir una idea principal, que sea memorable y relevante.
      .col-lg-4.col-7
        img(src='@/assets/curso/temas/17.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/18.png', alt='')
      .col-lg-8
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Tono de voz") Elegir un estilo comunicativo, que refleje la identidad de la marca.
          p.text-small(numero="2" titulo="Canales de difusión") Seleccionar los medios adecuados como redes sociales, publicidad online, o medios tradicionales.
          p.text-small(numero="3" titulo="Presupuesto") Establecer los recursos económicos necesarios, para implementar la campaña.
    h3 Propósitos de la estrategia creativa
    p.mb-4 Cada estrategia creativa tiene objetivos específicos que aseguran su éxito. A continuación, se presentan los propósitos principales:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo=" Clarificar el mensaje" :icono="require('@/assets/curso/temas/icon1.svg')")(style="background-color: #f3f3f3 ")
        .row.justify-content-center.p-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.png', alt='')
          .col-lg-8
            h4 Clarificar el mensaje
            p.mb-0 Definir qué se quiere transmitir, asegurando coherencia en el tono, estilo y público objetivo. 
              br
              br
              |#[b Ejemplo:] "Superar límites con comodidad" para personas activas.
      .py-4.py-md-5(titulo=" Orientar la creatividad" :icono="require('@/assets/curso/temas/icon1.svg')")(style="background-color: #f3f3f3 ")
        .row.justify-content-center.p-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/20.png', alt='')
          .col-lg-8
            h4 Orientar la creatividad
            p.mb-0 Proporciona un marco para ideas innovadoras y alineadas con los objetivos.
              br
              br
              |#[b Ejemplo:] temas como "libertad de movimiento" o "diseño futurista", para zapatillas deportivas.
      .py-4.py-md-5(titulo=" Asegurar coherencia" :icono="require('@/assets/curso/temas/icon1.svg')")(style="background-color: #f3f3f3 ")
        .row.justify-content-center.p-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/21.png', alt='')
          .col-lg-8
            h4 Asegurar coherencia
            p.mb-0 Garantiza que todos los elementos sean consistentes (colores, narrativa, diseño). 
              br
              br
              | #[b Ejemplo:] el color naranja debe estar en redes, empaques y anuncios.
      .py-4.py-md-5(titulo=" Medir el éxito" :icono="require('@/assets/curso/temas/icon1.svg')")(style="background-color: #f3f3f3 ")
        .row.justify-content-center.p-5
          .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.png', alt='')
          .col-lg-8
            h4 Medir el éxito
            p.mb-0 Establece KPIs como clics, ventas o engagement, para evaluar resultados. 
              br
              br
              |#[b Ejemplo:] cantidad de zapatillas vendidas y aumento de seguidores en redes sociales.
    h3 Casos de estudio
    p.mb-4 Los casos de éxito y fracaso, ofrecen lecciones valiosas sobre la importancia de una estrategia creativa bien fundamentada:
    .bg-full-width.p-5(style="background-color: #e2fafb ")
      .row.justify-content-center.mb-4
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #ac59f1 "): h3.mb-0 New Coke
            .tarjeta-move__content.w-100(style="background-color: #eeddfc; border: solid 2px #ac59f1")
              p.mb-0 Cambiar la fórmula original, generó rechazo al no alinearse con los valores de los consumidores.
      .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #e23e64 "): h3.mb-0 Just Do It de Nike
            .tarjeta-move__content.w-100(style="background-color: #e3d7da; border: solid 2px #e23e64")
              p.mb-0 Asociar la marca con valores como la superación personal, resultó en una conexión emocional profunda, con el público.
    

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
