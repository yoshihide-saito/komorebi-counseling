export default defineNuxtConfig({
  compatibilityDate: '2025-08-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'こもれび心理相談室｜カウンセリング・精神分析的心理療法・スーパービジョン',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'こもれび心理相談室は、公認心理師・臨床心理士がお話をうかがう心理相談室です。カウンセリング、精神分析的心理療法、スーパービジョンを行っています。',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Zen+Old+Mincho:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
