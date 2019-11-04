let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log({activeEnv})

module.exports = (options) => {
    const {
        pocketAccessToken,
        weeksOfHistory,
        tagFilter,
        tagFilterString,
        searchFilter,
        searchFilterString
    } = options;

   return {
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
        'gatsby-plugin-theme-ui'
      ]
   }
  };