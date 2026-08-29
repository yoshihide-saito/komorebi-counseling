<!-- ヒーローの背景イラスト（木もれ日）。写真ではなくSVGで描き起こしています。 -->
<template>
  <svg viewBox="0 0 1440 560" preserveAspectRatio="xMidYMax slice" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="ko-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fbfdf9" />
        <stop offset="1" stop-color="#e4efe1" />
      </linearGradient>
      <linearGradient id="ko-beam" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".72" />
        <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>
      <radialGradient id="ko-glow" cx=".5" cy=".5" r=".5">
        <stop offset="0" stop-color="#fff8e6" stop-opacity=".95" />
        <stop offset="1" stop-color="#fff8e6" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="1440" height="560" fill="url(#ko-sky)" />
    <circle cx="1046" cy="118" r="190" fill="url(#ko-glow)" />
    <g opacity=".5">
      <polygon points="980,-40 1120,-40 792,560 640,560" fill="url(#ko-beam)" />
      <polygon points="1180,-40 1268,-40 1010,560 906,560" fill="url(#ko-beam)" />
      <polygon points="742,-40 800,-40 560,560 484,560" fill="url(#ko-beam)" />
    </g>
    <g opacity=".55">
      <ellipse cx="196" cy="150" rx="176" ry="120" fill="#cfe0cb" />
      <ellipse cx="330" cy="86" rx="128" ry="86" fill="#dcead8" />
      <ellipse cx="86" cy="72" rx="120" ry="80" fill="#dcead8" />
    </g>
    <g opacity=".38">
      <ellipse cx="1320" cy="96" rx="150" ry="104" fill="#cfe0cb" />
      <ellipse cx="1198" cy="46" rx="106" ry="70" fill="#dcead8" />
    </g>
    <path d="M0 452c168-52 286-16 452 6 166 22 292-40 466-44 174-4 350 56 522 42v104H0Z" fill="#e0ebdb" />
    <path d="M0 496c196-46 320 4 500 20 180 16 300-34 470-30 170 4 314 40 470 26v48H0Z" fill="#cfe0ca" />
    <path d="M0 534c214-30 352 12 540 16 188 4 302-26 470-20 168 6 292 24 430 14v16H0Z" fill="#bcd4b7" />
    <g stroke="#9dbb98" stroke-width="1.4" stroke-linecap="round" fill="none" opacity=".75">
      <path d="M164 356c0 62 30 96 30 96s34-30 34-92-32-92-32-92-32 26-32 88Z" fill="#d7e6d3" />
      <path d="M194 452V330" />
      <path d="M1254 372c0 56 27 86 27 86s31-27 31-83-29-83-29-83-29 24-29 80Z" fill="#d7e6d3" />
      <path d="M1281 458V352" />
    </g>
    <g opacity=".8">
      <path d="M612 214c-26 8-40 30-36 52 22 6 46-6 56-26 10-20 4-30-20-26Z" fill="#c6dbc1" />
      <path d="M856 268c-22 4-36 22-34 40 18 6 40-2 49-19 8-16 3-24-15-21Z" fill="#d3e3ce" />
    </g>
  </svg>
</template>
