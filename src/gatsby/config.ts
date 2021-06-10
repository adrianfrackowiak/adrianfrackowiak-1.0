export default {
    siteMetadata: {
        title: 'adrianfrackowiak',
        author: 'Adrian Frąckowiak',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-smoothscroll`,
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-mdx',
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 1,
                once: false,
                disable: false,

                selector: '[data-sal]',
                animateClassName: 'sal-animate',
                disabledClassName: 'sal-disabled',
                rootMargin: '50% 100%',
                enterEventName: 'sal:in',
                exitEventName: 'sal:out',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-apollo',
        `gatsby-plugin-transition-link`,
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/content/`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Nunito Sans\:300,400,600,700,800,900`],
                display: 'swap',
            },
        },
    ],
    'no-submodule-imports': [true, 'gatsby-plugin-transition-link'],
};
