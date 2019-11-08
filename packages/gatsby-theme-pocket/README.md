# gatsby-theme-pocket

A Gatsby theme that adds your saved pocket articles to your gatsby site with inbuilt SEO. 

The idea behind this theme is to add a curated list of articles of interest to your website. These can be for your personal site where you want to keep a list of articles you read, your business site where you want to show your visitors articles that relate to your market or just a place to save stuff that interests you from the internet. You need to have the pocket app installed on your mobile or the browser extension, it is from there that you save your articles. 

The articles are filtered by tag so when you save an article in your app or browser you should tag them so that they are categorized and easier for people to view.

Example live site - [gatsby-theme-pocket-example.netlify.com](https://gatsby-theme-pocket-example.netlify.com/articleIndex)

## v.0.3.0 Changes

Added the ability to use a custom url instead of /articleIndex. A new theme option called `customUrl` enables you to set your own url for the theme page.

Example: 

```
module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-pocket',
            options: {
                ...otherProps
                customUrl: 'research'
            }
        }
    ]
}
```

## Setup

### Authorize your pocket account

Run `yarn add gatsby-theme-pocket` You will first need to authorize your pocket credentials. Run `yarn pocket-setup` from the command line. Open the browser at the given url and authorize your account. You will then be given an access-token unique to your account. Save this as you will need to pass this to the `gatsby-theme-pocket` in the next step.

## Props

The theme supports the following props: 

| Name                         | Optional   | Type    | Default       |
|------------------------------|------------|---------|---------------|
| pocketAccessToken            |   No       | string  | None          |
| weeksOfHistory               |   No       | number  | None          |
| tagFilter                    |   No       | boolean | None          |
| tagFilterString              |   Yes      | string  | '_untagged_'  |
| searchFilter                 |   No       | boolean | None          |
| searchFilterString           |   Yes      | string  | 'Web Dev'     |
| pageTitle                    |   No       | string  | None          |
| pageDescription              |   No       | string  | None          |
| seoTitle                     |   No       | string  | None          |
| seoDescription               |   No       | string  | None          |
| seoKeywords                  |   No       | string[]| None          |
| siteUrl                      |   No       | string  | None          |
| customUrl                    |   Yes      | string  | None          |

### Props Descriptions

- **weeksOfHistory**: Number of weeks worth of articles to fetch
- **tagFilter**:
  - `true` will use the `tagFilterString` value to get articles with that tag.
  - `false` will ignore the `tagFilterString` value
- **tagFilterString**: If `tagFilter` is true then get articles tagged with this value. `'\_untagged\_'` will only return articles with no tags. It will default to `'\_untagged\_'`.
- **searchFilter**:
  - `true` will use the `searchFilterString` value to get articles with that value in the URL or title.
  - `false` will ignore the `searchFilterString` value
- **searchFilterString**: If `searchFilter` is true then get articles with this value in the URL or title.
- **pageTitle**: The h1 title of the articles page
- **pageDescription**: The h2 dexcription of the articles page
- **seoTitle**: SEO title of the page
- **seoDescription**: SEO description of the page
- **seoKeywords**: SEO keywords as a string array
- **siteUrl**: Your site URL for SEO
- **customUrl**: A custom URL to be used instead of the default /articleIndex

### Setup theme

Once you have the theme installed and your access-token add the theme to your `gatsby-config.js`

```
module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-pocket',
            options: {
                pocketAccessToken: MY_ACCESS_TOKEN,
                weeksOfHistory: 52,
                tagFilter: false,
                searchFilter: false,
                pageTitle: 'Articles of interest',
                pageDescription: 'This is a curated list of articles tagged under different areas of interest.',
                seoTitle: 'gatsby-theme-pocket',
                seoDescription: 'A Gatsby theme that adds your pocket app articles to your gatsby website',
                seoKeywords: ['gatsby', 'react', 'pocket', 'gatsby-theme', 'gatsby-plugin', 'articles'],
                siteUrl: 'https://www.hungrybearstudio.com/'
            }
        }
    ]
}
```

The theme ships as a page you can navigate to `my-website/articleIndex` This page will give you centered list of cards with the articles title, excerpt, image if there is on and word count of the article. Each card is an anchor tag so the user can click the card to be taken to the article. 

The Article component (card) is a separate component which can be shadowed and altered if you desire. 

The theme uses [theme-ui](https://theme-ui.com/) out of the box so if you wish to edit the colors or fonts used you can shadow the theme-ui index of this theme and change them. The Article component uses the sx prop to style its elements meaning you can make the changes in your theme-ui file and they will update the component.

**TODO:**
- Update readME to include full examples and descriptions of what can be done.
- Add more options to the theme-ui context which will enable easier editing of the components.
- Add different layout defaults - currently a center flexbox layout. Perhaps add a grid option
- Add favorites
- Add tags to articles - Done
- Add search functionality

## Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Theme-UI](https://theme-ui.com/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License