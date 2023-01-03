module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: [`public`],
};

const TsconfigPathsPlugin = 
require('tsconfig-paths-webpack-plugin')
const path = require('path');
const { options } = require('nodemon/lib/config');

module.exports = {
  stories:[
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons:[
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  staticDirs:['public'],
  babel:async options => ({
    ...options,
    plugins:[
      '@babel/plugin-proposal-calss-properties',
      '@babel/plugin-private-methods',
      //2個はインストールできてない
      // '@babel/plugin-proposal-private-property-in-object'
    ],
  }),
  webpackFinal:async(config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile:path.resolve(__dirname,'../tsconfig.json')
      }),
    ];
    return config
  }
}