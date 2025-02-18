import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xaform",
  description: "对 antdv form 的增强，使用配置生成表单",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/simple' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: '快速开始', link: '/simple' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/merfais/xaform' }
    ]
  }
})
