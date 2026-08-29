<script setup lang="ts">
import { contact } from '~/data/site'
</script>

<template>
  <section id="contact" class="section section--forest" style="padding: 112px 0 104px">
    <div class="container">
      <SectionHead :en="contact.en" :jp="contact.jp" :lead="contact.lead" on-dark />

      <div style="display: flex; justify-content: center">
        <a class="btn btn--white" :href="contact.cta.href">
          {{ contact.cta.label }}
          <AppIcon name="pen" :size="18" :stroke="1.8" />
        </a>
      </div>

      <div class="grid grid--4" style="margin-top: 60px">
        <div v-for="c in contact.cards" :key="c.label" class="contact-card">
          <span class="contact-card__icon"><AppIcon :name="c.icon" :size="26" /></span>
          <span>
            <span class="contact-card__label" style="display: block">{{ c.label }}</span>
            <span class="contact-card__value" style="display: block">{{ c.value }}</span>
            <span class="contact-card__sub" style="display: block">{{ c.sub }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
