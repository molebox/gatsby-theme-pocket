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
        searchFilterString
    } = options;

   return {
    plugins: [
        {
          resolve: `gatsby-source-pocket`,
          options: {
            consumerKey: process.env.POCKET_CONSUMER_KEY,
            accessToken: pocketAccessToken,
            weeksOfHistory,
            apiMaxRecordsToReturn: 3000,
            getCurrentWeekOnly: `n`,
            stateFilterString: "all",
            tagFilter,
            tagFilterString: tagFilterString || "_untagged_",
            favouriteFilter: false,
            favouriteFilterValue: 0,
            searchFilter,
            searchFilterString,
            domainFilter: false,
            domainFilterString: "buzzfeed.com"
          }
        }
      ]
   }
  };