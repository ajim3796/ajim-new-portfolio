// src/lib/microcms.ts

import { createClient } from 'microcms-js-sdk';

// 環境変数が設定されているか確認
if (!import.meta.env.MICROCMS_SERVICE_ID || !import.meta.env.MICROCMS_API_KEY) {
    throw new Error("MicroCMS の環境変数が設定されていません。'.env' ファイルを確認してください。");
}

// MicroCMS クライアントの作成
export const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_ID,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});

// データの型定義（TypeScriptを使用している場合）
// 制作実績のリストを取得する際の型を定義しておくと便利です。

export type Project = {
  // MicroCMSが標準で返すフィールド
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;

  // 🌟 制作実績 API で設定したカスタムフィールド 🌟
  title: string;
  thumbnail: { url: string; height: number; width: number };
  overview: string;

  // 💡 エラーの原因: このプロパティが欠けていました。追加します。
  production_period: string;

  // 以前の議論で提案されたその他のフィールド
  purpose: string; // リッチエディタから取得
  problem_solution: string; // リッチエディタから取得

  // technologies フィールドの型は、MicroCMSでの設定に依存します。
  // もし MicroCMS で「チェックボックス」や「複数選択」の場合、文字列の配列（string[]）になります。
  // もし単なる「テキストフィールド」でカンマ区切りなら string です。
  // 前回のエラーから、配列の可能性が高いため、ここでは string[] とします。
  technologies: string[];

  site_url?: string; // URLは任意の場合もあるので ? を付けても良い
  source_code_url?: string;
};

// 取得したリスト全体の型 (ProjectListResponse は変更なし)
export type ProjectListResponse = {
  contents: Project[];
  totalCount: number;
  offset: number;
  limit: number;
};
