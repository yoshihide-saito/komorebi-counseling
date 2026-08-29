<template>
  <a class="logo" href="#top" @click="$emit('navigate')">
    <LeafMark :size="34" />
    <span class="logo__text">
      <span class="logo__name">{{ site.name }}</span>
      <span class="logo__en">{{ site.nameEn }}</span>
    </span>
  </a>
</template>

<script setup lang="ts">
import { site } from '~/data/site'
defineEmits<{ navigate: [] }>()
</script>
