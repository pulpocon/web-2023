<template>
  <section class="hero-section">
    <h1 class="logo">
      <pulpo-con1-ink></pulpo-con1-ink>
    </h1>

    <h2 class="claim">
      <span class="text-gradient">El evento #GastroTech de Galicia</span> 🐙
    </h2>

    <h3 class="date">
      Vigo, 7, 8 y 9 septiembre 2023
    </h3>

    <div class="claims">
      <vue-writter :array="claims" :erase-speed="50" :typeSpeed="70" caret="underscore" class="claims"></vue-writter>
    </div>

    <a class="btn" href="#summary">
      <i class="fas fa-arrow-down"></i> Más información <i class="fas fa-arrow-down"></i>
    </a>
  </section>
</template>

<script lang="ts" setup>
import PulpoCon1Ink from '~/components/Logos/LogoPulpoCon1Ink.vue'
import VueWritter from 'vue-writer'

const claims = ['3 días: 14 talleres, 12 charlas', '+10h del mejor networking a la gallega']

</script>
<style src="./HeroSection.scss"></style>
