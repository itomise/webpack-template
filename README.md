## Node version
12.14.1

## Usage
`$ yarn install`

`$ yarn start`

`$ yarn build`

## 仕様
- `src/javascripts/` 直下のjsファイルは自動でエントリーポイントになります
- `public` ディレクトリ内のリソースはそのまま納品ファイルにコピーされます
- `webpack.common.js` 内の`PUBLIC_URL`を変更するとルートディレクトリが変わります
- `src/pages/`配下のpugファイルはディレクトリ構造を保ったままhtmlファイルとして生成されます