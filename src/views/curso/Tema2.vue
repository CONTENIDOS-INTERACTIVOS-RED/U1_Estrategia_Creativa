<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Rol de la creatividad en la comunicación publicitaria'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 La creatividad es el núcleo de la publicidad, dado que permite captar la atención, generar conexiones emocionales y diferenciar las marcas, en un entorno saturado de información. Su impacto trasciende la estética, transformándose en un motor para la construcción de marca y el impulso de ventas.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #eeddfc").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4 El rol de la creatividad
              p.mb-0 La creatividad se desglosa en varias funciones que aportan al éxito de las campañas publicitarias:
      .col-lg-4.col-7: img(src="@/assets/curso/temas/24.svg", style="max-width: 100%")
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src="@/assets/curso/temas/25.png", style="max-width: 100%")
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Captar la atención")
            p.mb-0 A través de imágenes impactantes, elementos sorpresivos y relevancia cultural, se logra romper con lo convencional, para atraer al público.
          div(titulo="Crear conexiones emocionales")
            p.mb-0 Las narrativas y valores auténticos despiertan empatía y crean un vínculo emocional, entre la marca y el consumidor.
          div(titulo="Generar recordación")
            p.mb-0 Ideas memorables y repetición en diferentes canales, refuerzan el mensaje en la mente del consumidor.
          div(titulo="Diferenciación")
            p.mb-0 Posicionar la marca con propuestas únicas y una personalidad distintiva, que destaque frente a la competencia.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Solución de problemas")
            p.mb-0 La creatividad encuentra soluciones innovadoras, adaptándose a nuevas tendencias y optimizando las campañas.
          div(titulo="Construcción de marca")
            p.mb-0 Ayuda a crear una reputación positiva, fomenta la lealtad de los consumidores y convierte a estos, en embajadores de la marca.
          div(titulo="Impulso a las ventas")
            p.mb-0 A través de mensajes persuasivos y llamadas claras a la acción, se incentiva a los consumidores para adquirir productos o servicios.
          div(titulo="Medición y optimización")
            p.mb-0 La creatividad permite realizar ajustes basados en datos y aprendizajes continuos, para maximizar el impacto de las campañas.
          
      .col-lg-4.col-7: img(src="@/assets/curso/temas/26.png", style="max-width: 100%")
    p.mb-4.fw-bold Algunos casos de estudio, son: 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img(src="@/assets/curso/temas/27.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Dove Real Beauty
            p.mb-0.text-center Al desafiar estándares de belleza tradicionales, generó un impacto social positivo y conexiones emocionales profundas.
      .col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img(src="@/assets/curso/temas/28.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Think Different de Apple
            p.mb-0.text-center Asociar la marca con la innovación y el pensamiento disruptivo, cambió su percepción y atrajo a un público más amplio.
      .col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img(src="@/assets/curso/temas/29.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Pepsi con Kendall Jenner
            p.mb-0.text-center Una mala interpretación del contexto cultural, llevó a críticas y rechazo generalizado. 
    .bg-full-width.p-5.mb-0(style="background-color:#a3f0f3 ")
      p.mb-0.fw-bold La creatividad debe ser sensible al contexto social y cultural, además de alinearse con los valores de la marca. 



    

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
