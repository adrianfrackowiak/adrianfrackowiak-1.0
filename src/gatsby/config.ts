export default {
    siteMetadata: {
        title: 'adrianfrackowiak',
        author: 'Adrian Frąckowiak',
        description: 'Adrian Frąckowiak - Front End Developer - Portfolio',
        siteUrl: 'https://adrianfrackowiak.pl',
        keywords: [
            'portfolio',
            'front end developer',
            'adrian frackowiak',
            'front end',
            'portfolio front end developer',
            'react portfolio',
            'front end blog',
            'portoflio blog',
            'gatsby blog',
            'gatsby portfolio',
            'Adrian Frąckowiak',
            'gatsby',
            'typescript',
            'javascript',
            'react',
            'react page',
            'react portfolio',
            'front end dev',
        ],
        image: 'src/images/icon.png',
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
                name: 'adrianfrackowiak',
                short_name: 'adrianfrackowiak',
                description:
                    'Adrian Frąckowiak - Front End Developer - Portfolio',
                start_url: `/`,
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-transformer-remark',
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
        'gatsby-plugin-slug',
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
                name: `src`,
                path: `${__dirname}/..`,
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
};
