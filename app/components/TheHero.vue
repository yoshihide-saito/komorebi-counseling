<script setup lang="ts">
import { hero, site } from '~/data/site'
</script>

<template>
  <section class="hero">
    <div class="hero__art"><HeroArt /></div>

    <div class="hero__inner">
      <div class="eyebrow">{{ hero.eyebrow }}</div>

      <h1 class="hero__title">
        <template v-for="(line, i) in hero.headingLines" :key="i">{{ line }}<br /></template>
      </h1>

      <p class="hero__lead">{{ hero.lead }}</p>

      <div class="hero__actions">
        <a class="btn btn--solid" :href="hero.primary.hash">
          {{ hero.primary.label }}
          <AppIcon name="arrow" :size="18" :stroke="1.8" />
        </a>
        <a class="btn btn--ghost" :href="hero.secondary.hash">
          {{ hero.secondary.label }}
          <AppIcon name="down" :size="18" :stroke="1.8" />
        </a>
      </div>

      <p class="hero__hours">
        <span v-for="line in site.hoursLines" :key="line">{{ line }}<br /></span>
      </p>
    </div>
  </section>
</template>
