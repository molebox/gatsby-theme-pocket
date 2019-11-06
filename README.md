# gatsby-theme-pocket

A Gatsby theme that adds your saved pocket articles to your gatsby site with inbuilt SEO. 

The idea behind this theme is to add a curated list of articles of interest to your website. These can be for your personal site where you want to keep a list of articles you read, your business site where you want to show your visitors articles that relate to your market or just a place to save stuff that interests you from the internet. You need to have the pocket app installed on your mobile or the browser extension, it is from there that you save your articles. 

The articles are filtered by tag so when you save an article in your app or browser you should tag them so that they are categorized and easier for people to view.

## Setup

### Authorize your pocket account

You will first need to authorize your pocket credentials. Run `yarn pocket-setup` from the command line. Open the browser at the given url and authorize your account. You will then be given an access-token unique to your account. Save this as you will need to pass this to the `gatsby-theme-pocket` in the next step.

### Setup theme

Once you have you access token you can then install the theme `yarn add gatsby-theme-pocket`

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

The theme uses `gatsby-source-pocket` under the hood. It accepts the following options:

- **weeksOfHistory**: Number of weeks worth of articles to fetch
- **tagFilter**:
  - `true` will use the `tagFilterString` value to get articles with that tag.
  - `false` will ignore the `tagFilterString` value
- **tagFilterString**: If `tagFilter` is true then get articles tagged with this value. `'\_untagged\_'` will only return articles with no tags. It will default to `'\_untagged\_'`.
- **searchFilter**:
  - `true` will use the `searchFilterString` value to get articles with that value in the URL or title.
  - `false` will ignore the `searchFilterString` value
- **searchFilterString**: If `searchFilter` is true then get articles with this value in the URL or title.

The theme ships as a page you can navigate to `my-website/articleIndex` This page will give you centered list of cards with the articles title, excerpt, image if there is on and word count of the article. Each card is an anchor tag so the user can click the card to be taken to the article. 

The Article component (card) is a separate component which can be shadowed and altered if you desire. 

The theme uses [theme-ui](https://theme-ui.com/) out of the box so if you wish to edit the colors or fonts used you can shadow the theme-ui index of this theme and change them. The Article component uses the sx prop to style its elements meaning you can make the changes in your theme-ui file and they will update the component.

**TODO:**
- Update readME to include full examples and descriptions of what can be done.
- Add more options to the theme-ui context which will enable easier editing of the components.
- Add different layout defaults - currently a center flexbox layout. Perhaps add a grid option
- Add favorites
- Add tags to articles
- Add search functionality

## Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Theme-UI](https://theme-ui.com/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License