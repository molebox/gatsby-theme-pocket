const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\HUNGRY BEAR STUDIO\\GATSBY-THEMES\\gatsby-theme-pocket\\packages\\demo\\.cache\\dev-404-page.js"))),
  "component---gatsby-theme-pocket-src-pages-article-index-js": hot(preferDefault(require("D:\\HUNGRY BEAR STUDIO\\GATSBY-THEMES\\gatsby-theme-pocket\\packages\\gatsby-theme-pocket\\src\\pages\\articleIndex.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\HUNGRY BEAR STUDIO\\GATSBY-THEMES\\gatsby-theme-pocket\\packages\\demo\\src\\pages\\index.js")))
}

