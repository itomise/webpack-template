## Node version
v12.18.3

## Usage
`$ yarn install`

`$ yarn dev`

`$ yarn build`

## 仕様
- `src/javascripts/` 直下のjsファイルは自動でエントリーポイントに
- jsでsassのファイルを読み込むと、`[読み込んだjsの名前].css`として生成
- `public` ディレクトリ内のリソースはそのまま納品ファイルにコピー
- `webpack.common.js` 内の`PUBLIC_URL`でbase path 変更
- `src/pages/`配下のpugファイルはディレクトリ構造を保ったままhtmlファイルとして生成

## with TypeScript
https://github.com/itomise/webpack-template-ts
