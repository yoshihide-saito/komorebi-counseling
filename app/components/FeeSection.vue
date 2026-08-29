<script setup lang="ts">
import { fee } from '~/data/site'
</script>

<template>
  <section id="fee" class="section section--white">
    <div class="container">
      <SectionHead :en="fee.en" :jp="fee.jp" :lead="fee.lead" />

      <div class="grid grid--3">
        <article v-for="plan in fee.plans" :key="plan.title" class="card" style="padding: 32px">
          <div style="display: flex; justify-content: center">
            <span class="icon-orb icon-orb--sm"><AppIcon :name="plan.icon" :size="30" /></span>
          </div>
          <h3 class="card__title" style="font-size: 20px; margin-top: 18px">{{ plan.title }}</h3>
          <div class="card__en" style="font-size: 12px">{{ plan.en }}</div>
          <p class="fee-target">{{ plan.target }}</p>

          <div class="fee-rows">
            <div v-for="row in plan.rows" :key="row.name" class="fee-row">
              <div class="fee-row__name">{{ row.name }}</div>
              <div class="fee-row__price">
                <span class="fee-row__meta">{{ row.meta }}</span>
                <span class="fee-row__amount">{{ row.price }}</span>
              </div>
            </div>
          </div>

          <p class="fee-note">{{ plan.note }}</p>
        </article>
      </div>

      <div class="panel">
        <div class="panel__title">{{ fee.payment.title }}</div>
        <p>
          <template v-for="(line, i) in fee.payment.lines" :key="i">{{ line }}<br /></template>
        </p>
      </div>
    </div>
  </section>
</template>
