// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import { inBrowser, useRoute } from "vitepress";
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from "./Layout.vue";
import busuanzi from "busuanzi.pure.js";
import VisitorPanel from "./components/VisitorPanel.vue";


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    const { app, router, siteData } = ctx;
    app.component("VisitorPanel", VisitorPanel);
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
  }
} satisfies Theme
