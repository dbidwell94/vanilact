import { Configuration } from 'webpack';
import path from 'path';

export default function (config: Object, args: Record<string, any>): Configuration {
  const prod = args['mode'] && args['mode'] === 'production';
  return {
    entry: path.join(__dirname, 'src', 'index.ts'),
    mode: prod ? "production" : "development",
    target: 'web',
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    optimization: {
      minimize: prod,
    },
    output: {
      filename: 'index.js',
      module: false,
      chunkFormat: 'commonjs',
      clean: {
        dry: false,
      },
      library: 'html',
    },
  };
}
