<script setup lang="ts">
import { nav, site } from '~/data/site'

const compact = ref(false)
const menuOpen = ref(false)

function onScroll() {
  compact.value = window.scrollY > 120
}

function closeMenu() {
  menuOpen.value = false
}

watch(menuOpen, (open) => {
  if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<template>
  <header class="site-header" :class="{ 'is-compact': compact }">
    <div class="site-header__inner">
      <SiteLogo @navigate="closeMenu" />

      <nav class="site-header__nav" aria-label="セクション">
        <a v-for="item in nav" :key="item.hash" class="nav-link" :href="item.hash">{{ item.label }}</a>
        <a class="header-cta" href="#contact">お申し込み</a>
      </nav>

      <button
        class="hamburger"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="drawer"
        :aria-label="menuOpen ? 'メニューを閉じる' : 'メニューを開く'"
        @click="menuOpen = !menuOpen"
      >
        <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="22" :stroke="1.8" />
      </button>
    </div>
  </header>

  <Transition name="drawer">
    <div v-if="menuOpen" id="drawer" class="drawer">
      <div class="drawer__label">MENU</div>

      <nav class="drawer__list" aria-label="セクション（スマートフォン）">
        <a
          v-for="item in nav"
          :key="item.hash"
          class="drawer__item"
          :href="item.hash"
          @click="closeMenu"
        >
          <span>
            <span class="drawer__item-name">{{ item.label }}</span>
            <span class="drawer__item-hash">{{ item.hash }}</span>
          </span>
          <AppIcon name="down" :size="17" :stroke="1.9" style="color: var(--sage)" />
        </a>
      </nav>

      <div class="stack" style="gap: 11px; margin-top: 22px">
        <a class="btn btn--solid" href="#contact" @click="closeMenu">
          ご相談のお申し込み
          <AppIcon name="pen" :size="17" :stroke="1.8" />
        </a>
        <a class="btn btn--ghost" :href="site.telHref">
          {{ site.tel }}
          <AppIcon name="phone" :size="17" :stroke="1.8" />
        </a>
      </div>

      <p style="margin-top: 22px; text-align: center; font-size: 12px; line-height: 2; color: var(--ink3)">
        <span v-for="line in site.hoursLines" :key="line">{{ line }}<br /></span>
      </p>

      <div style="display: flex; justify-content: center; margin-top: 26px; color: var(--line)">
        <LeafMark :size="34" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active { transition: opacity .22s ease, transform .22s ease; }
.drawer-enter-from,
.drawer-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
