<template>
  <article class="page-simple__wrapper page--diversity">
    <div class="container-fluid-900">
      <header class="page-simple__header">
        <h1 class="page-simple__title">Diversidad</h1>
      </header>

      <div class="page-simple__content">
        <p>La diversidad importa. Desde la organización de la <strong>PulpoCon</strong> sabemos que cuando el
          desarrollo de una aplicación se lleva a cabo por un equipo diverso, esto hace que el resultado sea de mayor
          calidad.</p>

        <p>Tanto la organización de la <strong>PulpoCon</strong>, como sus voluntarios y miembros consideran, respetan,
          valoran y promueven las diferencias como una parte fundamental de sus valores.</p>

        <p>Estamos comprometidos con la diversidad de nuestra sociedad y de nuestra propia comunidad. Cada persona es
          única y todas ellas son, a su vez, diversas en nacionalidad, edad, raza, origen étnico, creencias, prácticas
          espirituales, género, identidad de género, orientación sexual, trabajo, estado civil, etc. lo que enriquece a
          nuestra profesión a la comunidad de desarrolladoras y a toda la sociedad.</p>

        <p>Por todo ello, queremos transmitir nuestra invitación sincera a todos los colectivos que suelen estar poco
          representados en la comunidad tecnológica a que formen parte de la PulpoCon</p>

        <p>En esta edicción contamos con el patrocinio de <a
            href="https://www.kairosds.com/es/index.html?utm_source=pulpocon" target="_blank">Kairos DS</a> una empresa
          que desde
          siempre ha estado comprometida con el sector, su comunidad y su diversidad para que nos ayude en esta misión
          tan importante.</p>

        <p>Recuerda Las 🎟️ diversity son 100% gratuitas, incluye la comida y tendrás noticias nuestras antes de que las
          entradas salgan a la venta: </p>

        <div class="logo-kairos">
          <img alt="Kairos DS" src="../../public/i/sps/kairos.svg"/>
        </div>
        <div class="cta">
          <a
              class="btn"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdilLfQ7_ZLSkjHlW2MgJsRkpijPbg9SPIIUgD9H7-gERjVfw/viewform"
          >Formulario entradas diversity</a>
        </div>

      </div>
    </div>
  </article>
</template>
<script lang="ts" setup>
import { useHead } from '@vueuse/head'

useHead({
  bodyAttrs: {
    class: 'page-simple page-diversity'
  }
})
</script>
<style src="./diversity.scss"></style>
