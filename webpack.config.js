const path = require('path');

const MiniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              '@babel/preset-react',
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtraPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [new MiniCssExtraPlugin({ filename: 'index.css' })],
  mode: 'production',
  devServer: { static: './dist' },
  performance: {
    maxAssetSize: 500000,
    maxEntrypointSize: 500000,
  },
};
