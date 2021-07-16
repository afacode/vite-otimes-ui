module.exports = {
  title: 'vite-otimes-ui',
  description: '基于vue3的UI文档',
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico', //图片放在public文件夹下
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    //   头部导航
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '关于',
        link: '/'
      },
      {
        text: '源码',
        link: '/'
      },
    ],
    //   侧边导航
    sidebar: [{
        text: 'Button',
        link: '/button/',
        sidebarDepth: 1,
      },
      {
        text: 'Alert',
        link: '/alert/',
        sidebarDepth: 1,
      },
    ]
  },
  markdown: {
    lineNumbers: true
  }
}