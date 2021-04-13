import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import fs from "fs";
const path = require("path")

// https://vitejs.dev/config/
const config = {
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "@": path.resolve(__dirname, "src"),
    },
  },
  // base:'/',
  // publicDir:"/",
  server: {
    proxy: {
      // 正则配置
      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
    },
    cors: false, //是否跨域,
    force: false, //编译前捆绑插件
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/styles/preload.scss";` }, //全局引入scss变量
    },
  },
  optimizeDeps: {
    include: ["echarts"],
  },
};

export default config;
