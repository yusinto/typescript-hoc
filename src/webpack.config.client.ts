import { Configuration } from 'webpack';
import * as path from 'path';

const WebpackServeUrl = 'http://localhost:3002';

const clientConfig: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./src/client/index'],
  output: {
    path: path.resolve('dist'),
    publicPath: `${WebpackServeUrl}/dist/`, // MUST BE FULL PATH!
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve('src'),
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
};

export default clientConfig;
