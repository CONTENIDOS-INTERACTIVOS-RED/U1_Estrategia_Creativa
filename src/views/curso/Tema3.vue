<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Evaluación de la viabilidad de estrategias a largo plazo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-4 La evaluación de la #[b viabilidad de estrategias a largo plazo], es fundamental para determinar si las iniciativas estratégicas pueden sostenerse y ser efectivas con el tiempo. 

        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta evaluación considera diversos factores económicos, sociales y ambientales, asegurando que las decisiones sean sólidas y adaptativas a las condiciones cambiantes del entorno.

        p(data-aos="fade-left") #[b Los componentes claves de la evaluación, son:]

    .row.align-items-center.mb-5.pb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Análisis de factibilidad económica")
            p Este análisis se enfoca en el retorno de la inversión (ROI), los costos asociados, y la escalabilidad de la estrategia. Según Sánchez González (2018), "una evaluación financiera sólida es esencial para asegurar la sostenibilidad económica a largo plazo". Herramientas como el análisis de flujo de caja descontado, permiten prever los beneficios futuros y determinar si los recursos financieros serán suficientes.

          div(numero="2" titulo="Impacto ambiental y social")
            p Evaluar los efectos ambientales y sociales, implica medir la huella de carbono y los beneficios para las comunidades locales. Boada y Cardona Montoya (2020), destacan que "el éxito de una estrategia a largo plazo depende de su capacidad para generar un impacto positivo en el entorno y en las personas afectadas". El cumplimiento de las regulaciones ambientales y la aceptación por parte de las comunidades son cruciales para la viabilidad.

          div(numero="3" titulo="Análisis de riesgos y oportunidades")
            p La identificación y gestión de riesgos ayuda a preparar a la organización para enfrentar desafíos futuros. Bas Amorós (2013), sugiere que "las empresas deben anticipar cambios regulatorios y tecnológicos, creando planes de mitigación que protejan sus estrategias". Al mismo tiempo, identificar oportunidades como avances tecnológicos o incentivos gubernamentales, puede fortalecer la estrategia.

          div(numero="4" titulo="Simulación de escenarios y análisis de sensibilidad")
            p Utilizar simulaciones permite prever cómo las variaciones en las condiciones de mercado, podrían afectar la estrategia. El análisis de sensibilidad, como menciona López Segrera et al. (2004), "es vital para entender qué variables son críticas y cómo pequeños cambios pueden tener un impacto significativo".

          div(numero="5" titulo="Consulta y retroalimentación de <em>stakeholders</em>")
            p La participación de las partes interesadas es crucial. López Fernández (2016), enfatiza que "la retroalimentación de los <em>stakeholders</em> aporta una perspectiva externa que puede revelar aspectos que no se habían considerado internamente". Asegurar la transparencia y mantener una comunicación abierta con los <em>stakeholders</em>, ayuda a ganar su apoyo.

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
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>
