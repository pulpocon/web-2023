<template>
  <section class="page page--program">
    <header class="page__header">
      <h1 class="heading-1">
        <span>
          Programa provisional
        </span>
      </h1>
    </header>
    <section class="program-day">
      <header>
        <h2 class="heading-3">
          Jueves, 7 de septiembre 2023
        </h2>
      </header>
      <div class="program-day__table-wrapper">
        <table class="program-day__table">
          <tr class="program-day__table-header">
            <th>&nbsp;</th>
            <th>
              <a href="https://twitter.com/phpulpocon/status/1675089260142108673" target="_blank">
                Crafter FullStack ℹ️
              </a>
            </th>
            <th>
              <a href="https://twitter.com/phpulpocon/status/1675097280385359872" target="_blank">
                Open Space ℹ️
              </a>
            </th>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
            <td class="program-day__table-title">
              Badge pickup & Breakfast 🪪☕
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time">
              09:30<br>11:30
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="rolando-caldas"/>
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--break">
            <td class="program-day__table-time">
              11:30<br>12:00
            </td>
            <td class="program-day__table-title">
              Coffee Break ☕
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time">
              12:00<br>14:00
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="rolando-caldas"/>
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:00<br>16:00
            </td>
            <td class="program-day__table-title">
              Lunch 🍽️
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot  program-day__table-slot--3h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:00<br>18:00
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="rolando-caldas"/>
            </td>
            <td class="program-day__table-title" rowspan="2">
              <nuxt-link to="/openspace">
                Open Space
              </nuxt-link>
            </td>
          </tr>
          <tr class="program-day__table-slot  program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              18:00<br>19:00
            </td>
            <td class="program-day__table-empty">
              &nbsp;
            </td>
          </tr>
        </table>
      </div>

      <footer>
        <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">
          Comprar entradas 🎟️
        </a>
      </footer>
    </section>


    <section class="program-day">
      <header>
        <h2 class="heading-3">
          Viernes, 8 de septiembre 2023
        </h2>
      </header>
      <div class="program-day__table-wrapper">
        <table class="program-day__table">
          <tr class="program-day__table-header">
            <th>&nbsp;</th>
            <th>
              <a href="https://twitter.com/phpulpocon/status/1675097280385359872" target="_blank">
                Track Crafter ℹ️
              </a>
            </th>
            <th>
              <a href="https://twitter.com/phpulpocon/status/1675108751337037825" target="_blank">
                Track DevOps ℹ️
              </a>
            </th>
            <th>
              <a href="https://twitter.com/phpulpocon/status/1675114219576991750" target="_blank">
                Track Data ℹ️
              </a>
            </th>
            <th>
              <a href="https://twitter.com/phpulpocon/status/1675102724805779458" target="_blank">
                Track Management ℹ️
              </a>
            </th>
            <th>
              <a href="https://twitter.com/phpulpocon/status/1675089260142108673" target="_blank">
                Crafter FullStack ℹ️
              </a>
            </th>
            <th>
              <a href="https://twitter.com/phpulpocon/status/1675144767443795968" target="_blank">
                Track Talks (La Pulpito) ℹ️
              </a>
            </th>
          </tr>

          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              08:30<br/>09:30
            </td>
            <td class="program-day__table-title" colspan="6">
              Badge pickup & Breakfast 🪪☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              9:30<br>11:30
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="ana-carmona"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="maria-romero"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="shenia-iago"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="mavi-jimenez"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="rolando-caldas"/>
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="yahima-duarte"/>
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <workshop-teaser id="sara-sara"/>
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--event">
            <td class="program-day__table-title">
              <workshop-teaser id="dario-miguel"/>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--break">
            <td class="program-day__table-time">
              11:30<br>12:00
            </td>
            <td class="program-day__table-title" colspan="6">
              Coffee Break ☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="3">
              12:00<br>14:00
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="javier-chacana"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="imma-valls"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="julien-david"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="miguel-lucia"/>
            </td>
            <td class="program-day__table-title" rowspan="3">
              <workshop-teaser id="rolando-caldas"/>
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="valvanera-gijon"/>
            </td>
          </tr>
          <tr class="program-day__table-slot  program-day__table-slot--event">
            <td class="program-day__table-title">
              <workshop-teaser id="janko-strassburg"/>
            </td>
          </tr>
          <tr class="program-day__table-slot  program-day__table-slot--event">
            <td class="program-day__table-title">
              <workshop-teaser id="adrian-alonso"/>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:00<br>16:00
            </td>
            <td class="program-day__table-title" colspan="6">
              Lunch 🍽️
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-time" rowspan="2">
              16:00<br>18:00
            </td>
            <td class="program-day__table-title" rowspan="2">
              <workshop-teaser id="yondra-lopez"></workshop-teaser>
            </td>
            <td class="program-day__table-title" rowspan="2">
              <workshop-teaser id="anastasia-kondratieva"/>
            </td>
            <td class="program-day__table-title" rowspan="2">
              <workshop-teaser id="maryna-bogdan"/>
            </td>
            <td class="program-day__table-title" rowspan="2">
              <workshop-teaser id="ricard-clau"/>
            </td>
            <td class="program-day__table-title" rowspan="2">
              <workshop-teaser id="rolando-caldas"/>
            </td>
            <td class="program-day__table-title">
              <workshop-teaser id="open-mic"/>
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--event">
            <td class="program-day__table-title">
              <workshop-teaser id="ruben-del-campo"/>
            </td>
          </tr>
        </table>
      </div>
      <footer>
        <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">
          Comprar entradas 🎟️
        </a>
      </footer>
    </section>


    <section class="program-day">
      <header>
        <h2 class="heading-3">
          Sábado, 9 de septiembre 2023
          <a href="https://twitter.com/phpulpocon/status/1675152008683180032" target="_blank">
            ℹ️
          </a>
        </h2>
      </header>
      <div class="program-day__table-wrapper">
        <table class="program-day__table">
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              09:00<br/>10:00
            </td>
            <td class="program-day__table-title">
              Badge pickup & Breakfast 🪪☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              10:00<br>10:10
            </td>
            <td class="program-day__table-title">
              Opening
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--10m program-day__table-slot--event">
            <td class="program-day__table-time">
              10:10<br>10:50
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/anna-julia">
                {{ talks['anna-julia'].speaker.name }}
                <strong>{{ talks['anna-julia'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              11:00<br>11:40
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/isma-hasan">
                {{ talks['isma-hasan'].speaker.name }}
                <strong>{{ talks['isma-hasan'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot program-day__table-slot--lunch">
            <td class="program-day__table-time">
              11:50<br>12:30
            </td>
            <td class="program-day__table-title" colspan="6">
              Coffee Break ☕
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              12:30<br>13:10
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/gemma-cortel">
                {{ talks['gemma-cortel'].speaker.name }}
                <strong>{{ talks['gemma-cortel'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              13:20<br>14:00
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/fran-iglesias">
                {{ talks['fran-iglesias'].speaker.name }}
                <strong>{{ talks['fran-iglesias'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--2h program-day__table-slot--lunch">
            <td class="program-day__table-time">
              14:00<br>16:00
            </td>
            <td class="program-day__table-title">
              Lunch 🍽️
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:00<br>16:40
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/concha-asensio">
                {{ talks['concha-asensio'].speaker.name }}
                <strong>{{ talks['concha-asensio'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              16:50<br>17:30
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/carmen-ansio">
                {{ talks['carmen-ansio'].speaker.name }}
                <strong>{{ talks['carmen-ansio'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--event">
            <td class="program-day__table-time">
              17:40<br>18:20
            </td>
            <td class="program-day__table-title">
              <nuxt-link to="/talk/nino-dafonte">
                {{ talks['nino-dafonte'].speaker.name }}
                <strong>{{ talks['nino-dafonte'].title }}</strong>
              </nuxt-link>
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--start">
            <td class="program-day__table-time">
              18:20<br>18:40
            </td>
            <td class="program-day__table-title">
              Closing
            </td>
          </tr>
          <!----->
          <tr class="program-day__table-slot program-day__table-slot--1h program-day__table-slot--break">
            <td class="program-day__table-time">
              18:40<br>21:00
            </td>
            <td class="program-day__table-title">
              Cóctel post-evento 🍸
            </td>
          </tr>
        </table>
      </div>
      <footer>
        <a v-if="config.ticketsUrl" :href="config.ticketsUrl" class="btn">
          Comprar entradas 🎟️
        </a>
      </footer>
    </section>
  </section>
</template>
<script lang="ts" setup>
import config from '~/data/config'
import talks from '~/data/talks'
import WorkshopTeaser from './components/WorkshopTeaser.vue'
</script>
<style src="./program.scss"></style>
