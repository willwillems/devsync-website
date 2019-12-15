
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Devsync | Visually edit your CSS in-browser.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Devsync | Visually edit your CSS in-browser.' },
      { hid: 'description', name: 'description', content: 'A modern visual design tool that live-sync\'s CSS edits with your IDE. Speed up your workflow now!' },
      { name: 'theme-color', content: '#14171D' },
      // -- Open Graph / Facebook --
      { property: 'og:type',  content: 'website' },
      { property: 'og:url',  content: 'https://devsync.co/' },
      { property: 'og:title',  content: 'Devsync | Visually edit your CSS in-browser.' },
      { property: 'og:description',  content: 'Visual design tool that live-sync\'s CSS edits with your editor. Design quicker. Devsync uses the browser\'s debugger to find your CSS and edit it in real time.' },
      { property: 'og:image',  content: 'https://devsync.co/img/social-card.png' },
      // -- Twiter --
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://devsync.co/' },
      { property: 'twitter:title', content: 'Devsync | Visually edit your CSS in-browser.' },
      { property: 'twitter:description', content: 'Visual design tool that live-sync\'s CSS edits with your editor. Design quicker. Devsync uses the browser\'s debugger to find your CSS and edit it in real time.' },
      { property: 'twitter:image', content: 'https://devsync.co/img/social-card.png' }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/prism-one-dark.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
