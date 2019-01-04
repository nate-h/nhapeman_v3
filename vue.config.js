const path = require('path');

module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/scss/main.scss";`
        }
      }
    },
    configureWebpack: {
      resolve: {
        alias: {
          "img": path.resolve(__dirname, 'src/assets/images')
        }
      }
    }
  };