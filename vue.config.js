const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "vuePlayground",
        filename: "remoteEntry.js",
        exposes: {
          "./TheosMineSweeper": "./src/views/MineSweeperView.vue",
          "./TheosChatBot": "./src/views/ChatBotView.vue",
        },
        shared: {
          vue: { singleton: true, eager: true, requiredVersion: "^3.2.13" },
          "vue-router": { singleton: true, eager: true },
        },
      }),
    ],
  },
});
