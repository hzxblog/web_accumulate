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
      { text: 'Css', link: '/Css/wordBreak' },
      { text: 'JavaScript', link: '/JavaScript/Promise' },
      {
        text: '更多',
        items: [
          { text: 'Git常见场景', link: '/Git/' },
        ]
      },
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
        { 
          title: 'Promise函数',
          path: '/JavaScript/Promise'
        },
        { 
          title: 'Async await',
          path: '/JavaScript/Async'
        },
      ],
    }
  }
}