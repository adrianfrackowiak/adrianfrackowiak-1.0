import React from 'react';
import { Helmet } from 'react-helmet';
import { PageProps, graphql, Link } from 'gatsby';
import { MarkdownRemark } from '../types/markdown-remark';

type GraphQLResult = {
    allMarkdownRemark: {
        edges: {
            node: MarkdownRemark;
        }[];
    };
};

const Blog: React.FC<PageProps<GraphQLResult>> = ({ data }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog - Adrian Frąckowiak - Front End Developer</title>
            </Helmet>
            <h1>blog</h1>
        </>
    );
};

export default Blog;

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        description
                        slug
                    }
                }
            }
        }
    }
`;
