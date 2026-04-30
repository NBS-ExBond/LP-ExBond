# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

名古屋のバンドコミュニティ **ExBond** のランディングページ。Discord参加を促す1ページ構成のサイト。

## 開発コマンド

```bash
npm install       # 依存パッケージのインストール
npm run dev       # 開発サーバー起動 → http://localhost:3000
npm run build     # 本番ビルド
npm run lint      # ESLintによるコードチェック
```

テストは存在しない。変更後は `npm run build` で型エラーがないか確認すること。

## 技術スタック

- **Next.js 16.2.4**（App Router）— AGENTS.md に記載の通り、訓練データとはAPIが異なる可能性がある。`node_modules/next/dist/docs/` を参照すること
- **React 19 / TypeScript（strict mode）**
- **スタイリング**: インラインスタイルが主体。レスポンシブ対応のグリッドレイアウトのみ `globals.css` にクラスとして定義

## ファイル構成と設計

```
app/
├── page.tsx      # LPの全セクションを含む単一クライアントコンポーネント
├── layout.tsx    # メタデータ・フォント（Geist）・ビューポート設定
└── globals.css   # Tailwind v4 + レスポンシブ用グリッドクラスのみ
```

`page.tsx` はファイル冒頭に2つの定数がある。変更が必要な場合はここを編集する:

```ts
const DISCORD_URL = "https://discord.gg/zsqekPAh";
const GOOGLE_CALENDAR_SRC = "ngy.bandsession@gmail.com";
```

## スタイリングの方針

- **コンポーネント固有のスタイル** → インラインスタイル（`style={{}}`）で記述
- **レスポンシブのグリッド切り替え** → `globals.css` にクラス定義し、`@media (max-width: 640px)` でカラム数を変更
- Tailwind のユーティリティクラスは `layout.tsx` の `className` にのみ使用し、`page.tsx` では使わない

## デプロイ

Vercel へのデプロイを推奨。GitHub連携で自動デプロイされる。
