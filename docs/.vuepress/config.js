module.exports = {
  base: '/web_accumulate/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '韩志雄的资源',
    }
  },
  themeConfig: {
    nav: [
      { text: 'Css', link: '/Css/' },
      { text: 'JavaScript', link: '/JavaScript/' },
      { text: 'GitHub', link: 'https://github.com/hzxblog/web_accumulate' },
    ],
    sidebar: {
      '/Css/': [
        { 
          title: 'CSS换行',
          path: '/Css/wordBreak'
        },
        { 
          title: '弹性布局',
          path: '/Css/Flex/'
        },
        { 
          title: 'Grid布局',
          path: '/Css/Grid/'
        },
      ],
      '/JavaScript/': [
        '',
      ],
    }
  }
}