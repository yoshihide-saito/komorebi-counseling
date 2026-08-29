<script setup lang="ts">
import { flow } from '~/data/site'
</script>

<template>
  <section id="flow" class="section section--tint">
    <div class="container">
      <SectionHead :en="flow.en" :jp="flow.jp" :lead="flow.lead" />

      <div class="flow">
        <div v-for="(step, i) in flow.steps" :key="step.no" class="flow__step">
          <article class="card flow__card">
            <div class="flow__no">STEP {{ step.no }}</div>
            <div style="display: flex; justify-content: center; margin-top: 16px">
              <span class="icon-orb icon-orb--lg"><AppIcon :name="step.icon" :size="34" /></span>
            </div>
            <h3 class="flow__title">{{ step.title }}</h3>
            <div class="flow__en">{{ step.en }}</div>
            <p class="flow__text">{{ step.text }}</p>
          </article>

          <div v-if="i < flow.steps.length - 1" class="flow__arrow">
            <AppIcon name="down" :size="26" :stroke="1.6" />
          </div>
        </div>
      </div>

      <p class="note-line" style="margin-top: 44px; color: var(--ink2)">{{ flow.closing }}</p>
    </div>
  </section>
</template>
