var path = require('path')
var webpack = require('webpack')
const Jarvis = require('webpack-jarvis');


module.exports = {
  // The base directory for resolving the entry option
  context: __dirname,
  // devtool: 'eval',
  mode: 'development',
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      'index.hot'
    ]
  },

  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/assets/',
    filename: 'curls-app.dev.js',
    pathinfo: true
  },

  // Where to resolve our loaders
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
    moduleExtensions: ['-loader'],
  },

  resolve: {
    // Directories that contain our modules
    symlinks: false,
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    mainFields: ['jsnext', 'esnext', 'jsnext:main', 'main', 'browser'],
    descriptionFiles: ['package.json'],
    moduleExtensions: ['-loader'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'react-cake': path.resolve('./node_modules/react-cake'),
      'core-js': path.resolve('./node_modules/core-js'),
      'prop-types': path.resolve('./node_modules/prop-types'),
      lodash: path.resolve('./node_modules/lodash-es'),
      emotion: path.resolve('./node_modules/emotion'),
      '@babel': path.resolve('./node_modules/@babel')
    },
    // Extensions used to resolve modules
    extensions: ['.js', '.react.js', '.scss', '.css']
  },

  module: {
    rules: [
      {
        test: /lodash|lodash-es|react-cake|styled-curls|@babel|core-js|react-dom|prop-types|emotion/,
        sideEffects: false
      },
      {
        test: /\.css$/,
        use: [
          'style',
          'css'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style',
          'css',
          'group-css-media-queries',
          'sass'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: ['file']
      },
      {
        test: /\.js$/,
        use: ['babel'],
        exclude: [/node_modules/]
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
    new webpack.NamedModulesPlugin(),
    new Jarvis()
  ],

  // Include mocks for when node.js specific modules may be required
  node: {
    fs: 'empty',
    vm: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
