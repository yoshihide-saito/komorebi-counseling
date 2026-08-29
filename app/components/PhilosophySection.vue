<script setup lang="ts">
import { philosophy } from '~/data/site'
</script>

<template>
  <section id="philosophy" class="section section--white">
    <div class="container">
      <SectionHead :en="philosophy.en" :jp="philosophy.jp" />

      <p class="greeting">{{ philosophy.greeting }}</p>

      <div class="prose">
        <p>{{ philosophy.paragraphs[0] }}</p>
        <p>{{ philosophy.paragraphs[1] }}</p>
        <p>
          {{ philosophy.paragraphs[2] }}
          <strong>{{ philosophy.emphasis }}</strong>
        </p>
        <p>{{ philosophy.paragraphs[3] }}</p>
      </div>

      <div class="grid grid--3" style="margin-top: 64px">
        <article v-for="p in philosophy.pillars" :key="p.title" class="card">
          <div style="display: flex; justify-content: center">
            <span class="icon-orb"><AppIcon :name="p.icon" :size="32" /></span>
          </div>
          <h3 class="card__title" style="font-size: 18px">{{ p.title }}</h3>
          <p style="margin-top: 12px; font-size: 13.8px; line-height: 2; color: var(--ink2)">{{ p.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
