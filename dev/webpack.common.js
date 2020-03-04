const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const globEntries = require('webpack-glob-entries')

// ルートディレクトリの設定  - - - - - - - - - - - - - - - - - - - - -

const PUBLIC_URL = '/public'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const webpack_config = {
  entry: globEntries('./src/javascripts/*.js'),
  output: {
    path: path.resolve(__dirname, '../htdocs' + PUBLIC_URL),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                const dirArray = file.split('\\src\\pages\\')[1].split('\\')
                let publishName = ''
                dirArray.forEach( (n, index) => {
                  index !== 0 ? publishName += '/' : null
                  publishName += `${n}`
                })
                return `${publishName.slice(0, -3)}html`
              },
              url: false
            }
          },
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', ':data-src']
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              data: {
                PUBLIC_URL: PUBLIC_URL
              }
            },
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'materials/',
              publicPath: url => {
                return PUBLIC_URL + '/materials/' + url;
              }
            }
          }
        ]
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
        // loader: 'shader-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new CopyPlugin([
      {
        from: './public/',
        to: './'
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_URL)
    })
  ]
};

module.exports = {
  webpack_config,
  PUBLIC_URL
}
