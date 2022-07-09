

import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search"

export default defineUserConfig({
  lang: "zh-CN",
  title: "朱海鹏的博客",
  description: "my blog ",

  base: "/tech/",

  theme,

  plugins: [
    searchPlugin({
      locales: {
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});

