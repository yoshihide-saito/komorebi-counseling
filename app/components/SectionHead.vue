<script setup lang="ts">
withDefaults(
  defineProps<{ en: string; jp: string; lead?: string; onDark?: boolean }>(),
  { lead: '', onDark: false },
)
</script>

<template>
  <div class="sec-head" :class="{ 'on-dark': onDark }">
    <div class="eyebrow">{{ en }}</div>
    <h2 class="sec-title">{{ jp }}</h2>
    <div class="ornament" :style="{ color: onDark ? 'rgba(255,255,255,.75)' : 'var(--sage)' }">
      <span />
      <LeafMark :size="30" />
      <span />
    </div>
    <p v-if="lead" class="sec-lead">{{ lead }}</p>
  </div>
</template>
