import { defineNuxtPlugin } from '#app'
import AOS from 'aos'

export default defineNuxtPlugin(nuxtApp => {
  AOS.init()
})
