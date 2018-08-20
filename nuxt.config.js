const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/moment',
//      new BundleAnalyzerPlugin({
//        analyzerMode: 'static',
//        generateStatsFile: true,
//        openAnalyzer: false,
//        logLevel: 'info'
//      })
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }

//      if (ctx.isClient) {
        config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js';
//      }


/*
        // Enable client-side templates compiling
        if( !config.resolve )
          config.resolve = {};
        if( !config.resolve.alias )
          config.resolve.alias = {};
//        config.resolve.alias['vue$'] = 'vue/qqq/vue.esm.js'; // 'vue/dist/vue.common.js' for webpack 1
        config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'; // 'vue/dist/vue.common.js' for webpack 1
//        config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'; // 'vue/dist/vue.common.js' for webpack 1
//        Object.assign( config.resolve.alias, {'vue$': 'vue/dist/vue.esm.js'} ); // 'vue/dist/vue.common.js' for webpack 1
*/

    },



/*
    plugins: [
      new webpack.DefinePlugin({ // <-- key to reducing React's size
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(), //dedupe similar code 
      new webpack.optimize.UglifyJsPlugin(), //minify everything
      new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
    ],
*/

/*
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
        openAnalyzer: false,
        logLevel: 'info',
        path: '~/static/report.html'
      })
    ]
*/

  },
//    symlinks: true,
//    modulesDir: ['node_modules', '../dspace-rest-js']
//    modulesDir: ['node_modules', '~/workspace/dspace-rest-js']
//    modulesDir: ['node_modules', '~/workspace/dspace-rest-js']
//    modulesDir: ['node_modules', '../modules']

  env: {
//    libURL: (process.env.NODE_ENV === 'production' ? 'http//your-url' : 'http://localhost:3000')
    libServerURL: "https://nuxt-vit2.c9users.io",
    libServerPath: "/dspace/rest"
  },

  cache: true,

}
