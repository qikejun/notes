module.exports = {
  title: '记录',
  description: '记录',
  host: 'localhost',
  post: '8088',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  themeConfig: {
    sidebar: {
      '/exercises': [
        './exercises/virtualDom'
      ]
    },
    nav: [
      { text: 'home', link: '/' },
      { text: 'Exercises', link: '/exercises/' },
      { text: 'GitHub', link: 'http://yunpenggit.github.io/'}
    ]
  }
}