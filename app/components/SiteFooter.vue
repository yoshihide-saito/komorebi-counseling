<script setup lang="ts">
import { nav, site } from '~/data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div style="display: flex; justify-content: center">
        <SiteLogo />
      </div>

      <nav class="site-footer__nav" aria-label="フッター">
        <a v-for="item in nav" :key="item.hash" :href="item.hash">{{ item.label }}</a>
      </nav>

      <p>
        {{ site.address }}<br />
        TEL {{ site.tel }}　／　{{ site.hours }}
      </p>
      <p class="site-footer__copy">© 2026 {{ site.nameEn }}</p>
    </div>
  </footer>
</template>
