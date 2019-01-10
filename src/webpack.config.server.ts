import { Configuration } from 'webpack';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';

const serverConfig: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./src/server/server'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: 'serverBundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // The rest of the config is pretty standard and can contain other webpack stuff you need.
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

export default serverConfig;
