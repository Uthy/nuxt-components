import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  build: {
    extend(config, { isDev, isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.plugins.push(
          new CopyWebpackPlugin({
            patterns: [
                { from: 'src/runtime/main.scss', to: 'dist/runtime/main.scss' },
            ],
          })
        );
      }
    },
  },
};