/*
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
})

*/

/*
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/index.scss";'
      },
    },
  },
};

*/


module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
};
