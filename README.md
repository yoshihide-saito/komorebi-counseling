# こもれび心理相談室 — 1ページ・スクロール型サイト（Nuxt 4）

カウンセリングルームの1ページサイト。淡い緑と白／中央揃え／深緑のヘッダーで本文と区別。

## 開発

```bash
npm install            # npm 10.9.2 対策で .npmrc に legacy-peer-deps=true を置いています
npm run dev            # http://localhost:3000
npm run generate       # 静的書き出し（.output/public）
```

## 文言・料金の差し替え

**すべての文言・金額・連絡先は `app/data/site.ts` に集約**しています。
Vue コンポーネントを触らずに差し替えられます。

`［　］` で囲まれた箇所（電話番号・メール・住所・徒歩分数）は未確定のプレースホルダーです。
相談室名・セラピスト2名の氏名／経歴・料金はサンプルなので、実際の内容に差し替えてください。

## 構成

| ファイル | 役割 |
| --- | --- |
| `app/data/site.ts` | 全セクションの文言・料金・セラピスト情報 |
| `app/assets/css/main.css` | デザイントークン（色・書体）と全共通スタイル・レスポンシブ |
| `app/components/SiteHeader.vue` | 深緑のヘッダー。スクロールで70pxに縮んで固定、スマホはハンバーガー |
| `app/components/HeroArt.vue` | ヒーローの木もれ日イラスト（SVG。写真は不使用） |
| `app/components/TherapistPortrait.vue` | セラピストのイラスト。実写にする場合はここを `<img>` に |
| `app/pages/index.vue` | セクションの並び順 |

## セクションとアンカー

`#philosophy` 私たちの想い ／ `#services` 私たちができること ／ `#fee` ご利用料金 ／
`#flow` ご利用の流れ ／ `#therapists` セラピストについて ／ `#contact` お問い合わせ

ヘッダーの各項目はこのアンカーへスムーススクロールします（`scroll-behavior: smooth` ＋
`scroll-padding-top` で固定ヘッダー分を確保。`prefers-reduced-motion` では無効化）。

## デザインキャンバス

https://claude.ai/code/artifact/fcdb52d3-6f5f-4553-9b5a-c1941a5af294
（作業ファイルは `~/Claude/komorebi-design/build.mjs` が真実源）
