<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 32 })
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <g stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 35V17.6" />
      <path d="M20 18.6c-7.6.6-12.4-4.6-11.6-12 7.6-.6 12.4 4.6 11.6 12Z" />
      <path d="M20.6 22.4c7.2 1.2 12.4-3 12.6-9.8-7-1.6-12.6 2.6-12.6 9.8Z" />
    </g>
  </svg>
</template>
