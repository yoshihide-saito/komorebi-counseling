<script setup lang="ts">
import { services } from '~/data/site'
</script>

<template>
  <section id="services" class="section section--paper">
    <div class="container">
      <SectionHead :en="services.en" :jp="services.jp" :lead="services.lead" />

      <div class="grid grid--3">
        <article v-for="s in services.items" :key="s.title" class="card">
          <div style="display: flex; justify-content: center">
            <span class="icon-orb icon-orb--lg icon-orb--on-tint">
              <AppIcon :name="s.icon" :size="36" />
            </span>
          </div>
          <h3 class="card__title">{{ s.title }}</h3>
          <div class="card__en">{{ s.en }}</div>
          <p class="card__text">{{ s.text }}</p>

          <ul class="check-list">
            <li v-for="point in s.points" :key="point">
              <AppIcon name="check" :size="15" :stroke="2" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </article>
      </div>

      <p class="note-line">{{ services.note }}</p>
    </div>
  </section>
</template>

<style scoped>
.check-list { list-style: none; margin: 0; padding: 0; padding-top: 20px; }
</style>
