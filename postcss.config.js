module.exports = ({ file, options, env }) => ({  
  plugins: {
      // // Core
      // 'postcss-easy-import': { 
      //   prefix: "_", 
      //   extensions: ['.css', '.scss', '.sass', '.pcss', '.postcss'],
      //   plugins: []
      // },
      // 'postcss-advanced-variables': {},
      // 'postcss-extend-rule': {},
      // 'postcss-preset-env': {},
      // 'postcss-atroot': {},
      // 'postcss-nested': {},

      // // Optional
      // 'postcss-responsive-type': { },
      // 'postcss-font-magician': {},
      // 'postcss-utilities': {},
      // 'postcss-initial': {},
      // 'postcss-sprites': {
      //   stylesheetPath: "./stylesheets",
      // spritePath: 'sprites',
      // basePath: './src'
      //  },

      // // Core
      // 'cssnano': (env === 'production' ? {} : false),
      // 'postcss-reporter': {}
    }
  });