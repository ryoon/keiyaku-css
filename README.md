# Teikan CSS

> Crazy Style Formatter for Japanese aricles of incorporation document

## 概要

Teikan CSSは、会社の定款を、適切な印刷書式にスタイリングするための
CSSライブラリです。

## インストール

[ここからCSSファイルをダウンロード](https://raw.githubusercontent.com/ryoon/teikan-css/master/teikan.css)してください。

HTMLの`HEAD`内にCSSファイルを読み込みます。

```html
<link rel="stylesheet" href="path/to/teikan.css">
```

本件ライブラリを使用したいセクションに、`teikan`クラスを付加します。(`div`タグなどでも構いません)

```html
<section class="teikan"></section>
```

上記セクション内に、必要なHTMLを書き入れます。

## 使い方・HTML編

HTMLを手書きする場合は、次の要素を使います。

- `<h1>文書のタイトル</h1>`
- `<h2>見出しタイトル(章)</h2>`
- `<h3>見出しタイトル(条)</h3>`
- `<ul><li>箇条書き</li></ul>`
- `<ol><li>箇条書き(連番)</li><ol>`
- `<hr>` 署名欄の開始
- `<h4>署名欄・見出し</h4>`
- `<ul><li>署名欄・項目</li></ul>` (最後の項目には、自動的に`印`マークが付きます)

## 使い方・Markdown編

本件ライブラリの使用が想定されているのは、主にMarkdownを使う場合です。
下記のように書くことで可読性の高い定款を作成でき(ると期待し)ます。

- 文書のタイトル: `#`
- 見出しタイトル(章): `##`
- 見出しタイトル(条): `###`
- 箇条書き: `-`
- 箇条書き(連番): `1.`, `2.`, ...
- 署名欄: `---`で始める
- 署名欄・見出し: `####`
- 署名欄・項目: `-` (最後の項目には、自動的に`印`マークが付きます)

## 例

```bash
$ git clone https://github.com/ryoon/teikan-css.git
$ cd teikan-css
$ npm start
```

を実行した上で、ウェブブラウザーで http://localhost:3000/ を開くと、
例を閲覧できます。

## ライセンス
License: MIT

- Copyright (c) 2016, 2017 Tsutomu Kawamura (keiyaku-css) all rights reserved
- Copyright (c) 2017 Ryo ONODERA all rights reserved
