const path = require('path');
const argv = require('yargs').argv;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const distFolder = './build'
const isDev = argv.mode === 'development';
const isProd = !isDev;

const config = {
  entry: {
    // index: './src/js/index.js',
    index: './src/scss/main.scss'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, distFolder),
    publicPath: ''
  },

  module: {

    rules: [{
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
          isProd ? {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isDev,
              plugins: [
                isProd ? require('cssnano') : () => {},
                require('autoprefixer')({
                  browsers: ['last 15 versions']
                })
              ]
            }
          } : {
            loader: 'sass-loader',
            options: {
              sourceMap: !isDev
            },
          },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name][hash].[ext]'
          }
        }, {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 70
            }
          }
        }],
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name][hash].[ext]'
          }
        },
      }


    ]
  },

  plugins: [

    new CleanWebpackPlugin([distFolder], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      publicPath: '/',
      inject: 'body'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    })

  ],

  devServer: {
    contentBase: distFolder,
    port: 9001,
    compress: true,
    open: false
  },

  optimization: isProd ? {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false,
            drop_console: true
          },
        },
      }),
    ],
  } : {},
};

module.exports = config;