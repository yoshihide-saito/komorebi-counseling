<script setup lang="ts">
import { therapists } from '~/data/site'
</script>

<template>
  <section id="therapists" class="section section--white">
    <div class="container">
      <SectionHead :en="therapists.en" :jp="therapists.jp" :lead="therapists.lead" />

      <div class="grid grid--2">
        <article v-for="(m, i) in therapists.members" :key="m.name" class="card" style="padding: 38px">
          <div style="display: flex; justify-content: center">
            <TherapistPortrait
              :size="168"
              :hair="m.hair"
              :cloth="m.cloth"
              :hair-style="m.hairStyle"
              :uid="`t${i}`"
            />
          </div>

          <div class="person__kana">{{ m.kana }}</div>
          <h3 class="person__name">{{ m.name }}</h3>
          <div class="person__roman">{{ m.roman }}</div>

          <div style="display: flex; justify-content: center">
            <span class="person__role">{{ m.role }}</span>
          </div>

          <p class="person__bio">{{ m.bio }}</p>

          <div class="person__can">
            <div class="person__can-label">できること</div>
            <div class="person__tags">
              <span v-for="c in m.can" :key="c" class="tag">{{ c }}</span>
            </div>
          </div>

          <p class="person__voice">「{{ m.voice }}」</p>
        </article>
      </div>
    </div>
  </section>
</template>
