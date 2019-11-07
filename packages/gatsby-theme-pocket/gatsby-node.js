exports.createPages = async ({ actions: { createPage } }, pluginOptions) => {

    if (pluginOptions.customUrl) {
        createPage({
            path: `/${pluginOptions.customUrl}/`,
            component: require.resolve('./src/templates/articlesTemplate.js')
        })
    }
  }
