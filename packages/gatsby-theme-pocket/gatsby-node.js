exports.createPages = async ({ actions: { createPage } }, pluginOptions) => {
  if (pluginOptions.customUrl) {
    createPage({
      path: `/${pluginOptions.customUrl}/`,
      component: require.resolve("./src/templates/articlesTemplate.js"),
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
      type PocketArticle implements Node {
        tags: [String],
        excerpt: String,
        title: String,
        image: Image,
        url: String, 
        time_added: String,
      }

      type Image {
        height: String,
        item_id: String,
        src: String,
        width: String
      }
    `;
  createTypes(typeDefs);
};
