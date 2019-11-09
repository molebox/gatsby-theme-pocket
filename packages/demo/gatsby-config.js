module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-pocket',
            options: {
                pocketAccessToken: 'fec8ada1-0455-8909-9ad6-a80f23',
                weeksOfHistory: 52,
                tagFilter: false,
                searchFilter: false,
                pageTitle: 'Articles of interest',
                pageDescription: 'This is a curated list of articles tagged under different areas of interest.',
                seoTitle: 'gatsby-theme-pocket',
                seoDescription: 'A Gatsby theme that adds your pocket app articles to your gatsby website',
                seoKeywords: ['gatsby', 'react', 'pocket', 'gatsby-theme', 'gatsby-plugin', 'articles'],
                siteUrl: 'https://www.hungrybearstudio.com/',
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
        'gatsby-plugin-theme-ui'
    ]
}