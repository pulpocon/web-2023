<template>
  <div class="home">
    <header>
      <h1>
        <pulpo-con1-ink></pulpo-con1-ink>
      </h1>

      <h2>🐙 Vigo, 7, 8 y 9 septiembre 2023 🐙</h2>

      <a href="https://docs.google.com/forms/d/1f2vw31PGzbM0JO4HBlNel-cotEo8E2rNVCIpSxv-lQs">
        📣 Call For Papers
      </a>
    </header>

    <footer>
      <craftters-vigo1-ink></craftters-vigo1-ink>
      <a-industriosa></a-industriosa>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import PulpoCon1Ink from '~/components/Logos/PulpoCon1Ink.vue'
import CrafttersVigo1Ink from '~/components/Logos/CrafttersVigo1Ink.vue'
import AIndustriosa from '~/components/Logos/AIndustriosa.vue'

useHead({
  bodyAttrs: {
    class: 'home'
  },
  title: '#pulpoCon23 - Vigo, 7, 8 y 9 septiembre 2023',
})
</script>
<style src="./index.scss"></style>
