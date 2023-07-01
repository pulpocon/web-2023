<template>
  <section id="summary" class="summary-section ">
    <div class="summary-section__video-wrapper">
      <video autoplay loop muted playsinline>
        <source src="/video-bg.mp4" type="video/mp4">
      </video>
    </div>

    <div class="summary-section__cover" data-aos="fade-in"></div>


    <div class="summary-section__content">
      <div class="container-fluid-1440">
        <div class="summary-section__data">
          <aside class="summary-section__data-box" data-aos="fade-up" data-aos-delay="200">
            <span class="number">3</span> días
          </aside>

          <aside class="summary-section__data-box" data-aos="fade-up" data-aos-delay="400">
            <span class="number">1</span> open space
          </aside>

          <aside class="summary-section__data-box" data-aos="fade-up" data-aos-delay="600">
            <span class="number">14</span> talleres
          </aside>

          <aside class="summary-section__data-box" data-aos="fade-up" data-aos-delay="800">
            <span class="number">14</span> charlas
          </aside>

          <aside class="summary-section__data-box" data-aos="fade-up" data-aos-delay="1000">
            <span class="number">+10h</span> de networking a la gallega
          </aside>
        </div>

        <header class="summary-section__description" data-aos="fade" data-aos-delay="1200">
          <p>PulpoCon 🐙 es el evento <strong class="text-gradient-light">#gastrotech</strong> / conferencia que acercará
            el
            movimiento “crafter” y el “clean code” a
            la
            comunidad de desarrolladores de Galicia y su área de influencia mediante charlas y talleres. Técnicas,
            arquitecturas y modelos que fomentan mejores profesionales más allá del lenguaje utilizado. Con reconocidos
            ponentes de gran prestigio nacional e internacional. 7, 8 y 9 de septiembre de 2023 en Vigo</p>
        </header>

        <div class="summary-section__sponsors">
          <a class="btn"
             href="https://docs.google.com/presentation/d/1uKfOvS8VZI0Tnv4O_uWb5fJqD7l-H-5ZNHtZkhZ2bVs/edit">
            ¿Quieres patrocinar la #pulpoCon23? 🦑
          </a>
          <br/>

          <nuxt-link class="btn" to="/program">
            Programa 📅
          </nuxt-link>

          <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">
            Comprar entradas 🎟️
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


import config from '~/data/config'
</script>
<style src="./SummarySection.scss"></style>
