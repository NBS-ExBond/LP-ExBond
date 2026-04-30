# ExBond – Nagoya Band Community LP

名古屋のバンドコミュニティ **ExBond** のランディングページです。  
初心者からベテランまで、気軽にバンドセッションを楽しめるコミュニティへの参加を促すサイトです。

## プロジェクト概要

| 項目 | 内容 |
|------|------|
| コミュニティ名 | ExBond（エクスボンド） |
| 拠点 | 名古屋 |
| コンセプト | 固定バンドなし・セッションでつながる音楽コミュニティ |
| 参加窓口 | Discord |

## ページ構成

1. **Hero** – キャッチコピー「名古屋で、気軽にバンドをやろう」
2. **こんな人におすすめ** – ターゲット訴求（メンバーを探している・再開したいなど）
3. **あなたの"今"に合わせて** – 初心者 / 復帰者 / 上級者それぞれ向けのメッセージ
4. **ExBondの特徴** – 定期セッション・1人参加OK・安心運営・オンライン＆リアル対応
5. **参加者の声** – メンバーのテスティモニアル
6. **よくある質問** – アコーディオン形式のFAQ
7. **開催スケジュール** – Google カレンダー埋め込み
8. **CTA** – Discord参加ボタン

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org) (App Router)
- **言語**: TypeScript
- **スタイリング**: インラインスタイル（Tailwind不使用）
- **外部連携**:
  - Discord（コミュニティ参加）
  - Google カレンダー（開催スケジュール表示）

## ローカル開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いてください。

## 主要ファイル

```
app/
├── page.tsx      # LPのメインコンポーネント（全セクション）
├── layout.tsx    # ページ共通レイアウト
└── globals.css   # グローバルCSS
```

## 定数（page.tsx）

```ts
const DISCORD_URL = "https://discord.gg/zsqekPAh";
const GOOGLE_CALENDAR_SRC = "ngy.bandsession@gmail.com";
```

Discord招待URLやカレンダーのソースアドレスを変更する場合は、`app/page.tsx` 冒頭のこれらの定数を編集してください。

## デプロイ

[Vercel](https://vercel.com) へのデプロイを推奨します。GitHub リポジトリを連携するだけで自動デプロイが設定できます。

---

© 2026 ExBond – Nagoya Band Community
