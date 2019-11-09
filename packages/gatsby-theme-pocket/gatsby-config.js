let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = (options) => {
    const {
        pocketAccessToken,
        weeksOfHistory,
        tagFilter,
        tagFilterString,
        searchFilter,
        searchFilterString,
        pageTitle,
        pageDescription,
        seoTitle,
        seoDescription,
        seoKeywords,
        siteUrl,
        customUrl
    } = options;

    console.log('ENV: ', process.env.POCKET_CONSUMER_KEY);

   return {
    siteMetadata: {
      pageTitle,
      pageDescription,
      seoTitle,
      seoDescription,
      seoKeywords,
  },
    plugins: [
        {
          resolve: `gatsby-source-pocket`,
          options: {
            consumerKey: '88326-cf4f8f5d0591e3620ece0459',
            accessToken: pocketAccessToken,
            weeksOfHistory,
            apiMaxRecordsToReturn: 3000,
            getCurrentWeekOnly: `n`,
            stateFilterString: "all",
            tagFilter,
            tagFilterString: tagFilterString ? tagFilterString : "_untagged_",
            favouriteFilter: false,
            favouriteFilterValue: 0,
            searchFilter,
            searchFilterString: searchFilterString ? searchFilterString : 'Web Dev',
            domainFilter: false,
            domainFilterString: "buzzfeed.com"
          }
        },
        {
          resolve: 'gatsby-plugin-google-fonts',
          options: {
            fonts: [
              'Josefin Sans',
              'Poppins',
              `Open Sans`,
              `source sans pro\:300,400,400i,700` 
            ]
          }
      },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-emotion',
        {
          resolve: 'gatsby-theme-seo', 
          options: {
              title: seoTitle,
              description: seoDescription,
              author: 'Rich Haines - Hungry Bear Studio',
              siteUrl,
          }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      ]
   }
  };