# 千咲ポートフォリオサイト制作
Webコーダー千咲のポートフォリオサイトです。

## 概要
**制作内容**：コーダーとしてのスキルを見せるための作品をまとめる、自身のポートフォリオサイトを制作しました。

## 公開URL
**サイトURL**：[https://chisaki-dsgn.github.io/portfolio-site/](https://chisaki-dsgn.github.io/portfolio-site/)

## デザインカンプ

[▶デザインカンプへのリンク（Figma）](https://www.figma.com/design/IdkCw8bw3zHIDVo62psYyj/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%AB%E3%83%B3%E3%83%97%EF%BC%88README%E7%94%A8%EF%BC%89?node-id=0-1&t=ppfOmtuqc6zdPLWU-1)

※コーディングしながらよりよいデザインを目指して調整したところもあるので、元のデザインは完成作品と異なる箇所もあります。


## 制作期間・担当範囲

| 項目 | 内容 |
| --- | --- |
| **制作時間** | 約32時間(デザイン時間は除く) |
| **担当範囲** |デザイン・コーディング |

## ページ構成・実装セクション
- ヘッダー
- トップページ
- WORKS（実績一覧）
- ABOUT（自己紹介）
- CONTACT（問い合わせフォーム）
- 実績詳細ページ
- フッター

## 使用技術
- **HTML5**
- **CSS3（Sass）**: / BEM記法 / レスポンシブ対応（768px）
- **JavaScript**：ハンバーガーメニュー / スクロールに合わせたフェードイン / 
- 使用エディター：**VS Code** 
- **Git / GitHub**：チーム開発を視野に入れたブランチ運用・リポジトリ管理の流れを体験（push / pull request / merge / pull）
- **Figma**：デザインの作成
- **GitHub Pages** (ホスティング)

## 制作時の工夫点
- 採用担当者の方がサイトを見ただけで時間をかけずにどんな作品かをできるだけわかりやすくするため、詳細ページにサイトのキャプチャ画像を使ったスクロール可能なセクションを作成しました。
- 今後のWordPress化を視野に、管理しやすいファイル命名とファイル構成を整理し拡張性の高いCSS設計を意識しました。
- 保守性やメンテナンス性を高めるため、Sassのモジュール化と**BEM記法**を採用しました。
- 実務を想定した**Git管理**を意識して制作に取り組み、実務でのチーム開発のフローに近づけるようにしました。PRにはできるだけ画像を添えるようにし、確認者がどんな実装がされたのかを一目で理解できるように心がけました。
- UX向上のためボタンやカードホバー時の自然なアニメーションを設定し、ユーザーが直感的に操作できるよう工夫しました。
- 使用する画像はすべて圧縮ツールを使いファイルサイズを小さくすることで表示速度の向上に努めました。

## ディレクトリ構造

```
portfolio-site/
|
│  archive-works.html
│  index.html
│  page-about.html
│  page-contact.html
│  page-privacy.html
│  README.md
│  single-works-cafe-wp.html
│  single-works-cafe.html
│  single-works-portfolio.html
│  single-works-vocal.html
│  thanks.html
│  
└─assets
    ├─css
    │      style.css
    │      
    ├─favicon       （ファビコン用フォルダ）
    |
    ├─img           （画像フォルダ）
    │      
    ├─js
    │      main.js
    │      
    └─scss
        │  style.scss
        │  
        ├─base
        │      _base.scss
        │      _variables.scss
        │      
        ├─components
        │      _button.scss
        │      _title.scss
        │      
        ├─layout
        │      _footer.scss
        │      _header.scss
        │      
        └─pages
                _archive-works.scss
                _front-page.scss
                _page-about.scss
                _page-contact.scss
                _page-privacy.scss
                _single-works.scss
                _thanks.scss
```

