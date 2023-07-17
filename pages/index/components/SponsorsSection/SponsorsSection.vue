<template>
  <section class="sps-section">
    <div class="container-fluid-1440">
      <header class="sps-section__header">
        <h2 class="sps-section__title" data-aos="fade-up">Patrocinadores</h2>
        <p class="sps-section__description" data-aos="fade-up" data-aos-delay="200">
          #pulpoCon23 es posible gracias a la colaboración de las siguientes empresas:
        </p>
      </header>

      <div class="sps-section__sps">
        <sponsors></sponsors>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Sponsors from '~/components/Sponsors'

defineProps()

defineEmits()

</script>
<style src="./SponsorsSection.scss"></style>
