import { Configuration } from 'webpack';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';

const serverConfig: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./src/server/server'], // set this to your server entry point. This should be where you start your express server with .listen()
  target: 'node', // tell webpack this bundle will be used in nodejs environment.
  externals: [nodeExternals()], // Omit node_modules code from the bundle. You don't want and don't need them in the bundle.
  output: {
    path: path.resolve('dist'),
    filename: 'serverBundle.js',
    libraryTarget: 'commonjs2', // IMPORTANT! Add module.exports to the beginning of the bundle, so universal-hot-reload can access your app.
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
