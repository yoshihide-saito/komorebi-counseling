<script setup lang="ts">
defineProps<{ from: string; to: string }>()
</script>

<template>
  <svg class="wave" viewBox="0 0 1440 72" preserveAspectRatio="none" fill="none" aria-hidden="true">
    <rect width="1440" height="72" :fill="from" />
    <path
      d="M0 40c180-34 320 12 520 18 200 6 340-30 520-26 180 4 260 26 400 18v22H0Z"
      :fill="to"
    />
  </svg>
</template>
