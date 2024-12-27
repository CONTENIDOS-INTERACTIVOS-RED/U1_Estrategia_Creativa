<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Desarrollo sostenible y responsabilidad social'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        .bg-color-7.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El #[b desarrollo sostenible y la responsabilidad social], abarcan estrategias que aseguran el equilibrio entre el crecimiento económico, la protección del medio ambiente y el bienestar social.  

        p(data-aos="fade-left") Esta combinación es esencial para garantizar la sostenibilidad a largo plazo y se alinea con las crecientes expectativas de consumidores y regulaciones gubernamentales. A continuación, se amplían conceptos claves y se ejemplifican estrategias efectivas, para implementar este enfoque, de manera integral en las organizaciones.

    .bg-full-width.bg-color-8
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Definición y estrategias claves 
            p.mb-4(data-aos="fade-right") El desarrollo sostenible es un pilar fundamental para las organizaciones que buscan equilibrar el crecimiento económico con la protección del medio ambiente y la equidad social. En el PDF      Definición y estrategias claves , se estudiarán las definiciones clave, estrategias efectivas y ejemplos prácticos de sostenibilidad corporativa, incluyendo casos de éxito como Heineken y Grupo Bimbo. Con un enfoque en la Responsabilidad Social Corporativa (RSC), se explorará cómo las empresas pueden optimizar sus operaciones, fortalecer su reputación y generar impacto positivo en las comunidades y el entorno.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Definición y estrategias claves

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')



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
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
