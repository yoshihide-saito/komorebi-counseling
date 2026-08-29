<!-- セラピストのイラスト。実写に差し替える場合は <img> に置き換えてください。 -->
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: number
    hair?: string
    cloth?: string
    bg?: string
    hairStyle?: 'bob' | 'short'
    uid?: string
  }>(),
  { size: 168, hair: '#4f6c50', cloth: '#8fae8b', bg: '#e4efe1', hairStyle: 'bob', uid: 'a' },
)

const hairPath = computed(() =>
  props.hairStyle === 'short'
    ? 'M66 80c0-21 15-34 34-34s34 13 34 34c0 5-1 9-3 10-2-11-6-16-11-18-9 4-30 5-42-1-5 3-9 8-11 19-1-1-1-5-1-10Z'
    : 'M64 84c0-24 16-40 36-40s36 16 36 40c0 10-2 22-5 22-2-14-3-22-6-26-8 4-38 6-50-2-4 6-5 16-6 28-3 0-5-12-5-22Z',
)
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <defs>
      <clipPath :id="`ko-pc-${uid}`"><circle cx="100" cy="100" r="98" /></clipPath>
    </defs>
    <g :clip-path="`url(#ko-pc-${uid})`">
      <circle cx="100" cy="100" r="98" :fill="bg" />
      <circle cx="150" cy="44" r="44" fill="#ffffff" opacity=".4" />
      <path d="M6 168c14-30 46-52 94-52s80 22 94 52v34H6v-34Z" :fill="cloth" />
      <path d="M100 104c14 0 22 6 22 6l-8 18a16 16 0 0 1-28 0l-8-18s8-6 22-6Z" fill="#ffffff" opacity=".5" />
      <path d="M88 100h24v14a12 12 0 0 1-24 0v-14Z" fill="#e8d7c4" />
      <ellipse cx="100" cy="82" rx="33" ry="36" fill="#f2e6d8" />
      <path :d="hairPath" :fill="hair" />
      <path
        d="M89 80c2.6-1.6 5.4-1.6 8 0M103 80c2.6-1.6 5.4-1.6 8 0"
        stroke="#6a5a4c" stroke-width="2.4" stroke-linecap="round" fill="none" opacity=".55"
      />
      <path
        d="M94 96c3.4 2.6 8.6 2.6 12 0"
        stroke="#c9a08a" stroke-width="2.4" stroke-linecap="round" fill="none" opacity=".6"
      />
    </g>
    <circle cx="100" cy="100" r="97" stroke="#ffffff" stroke-width="6" fill="none" />
  </svg>
</template>
