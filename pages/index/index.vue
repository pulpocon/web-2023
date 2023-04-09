<template>
  <div class="page-home">
    <hero-section></hero-section>
    <summary-section></summary-section>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import HeroSection from './components/HeroSection'
import SummarySection from './components/SummarySection'

useHead({
  bodyAttrs: {
    class: 'home'
  },
  title: '#pulpoCon23 - Vigo, 7, 8 y 9 septiembre 2023'
})

</script>
<style src="./index.scss"></style>
