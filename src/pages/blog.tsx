import React from 'react';
import { Helmet } from 'react-helmet';
import { PageProps, graphql, Link } from 'gatsby';
import BlogLayout from '../components/blog/blog-layout';
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
        <BlogLayout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog - Adrian Frąckowiak - Front End Developer</title>
            </Helmet>
            <section className="px-4 w-full max-w-7xl mx-auto lg:mt-20 lg:mb-20 flex flex-col  lg:px-6">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div className="w-full lg:w-1/2 mt-16 mb-16" key={node.id}>
                        <Link to={node.fields.slug}>
                            <h3 className="text-3xl font-bold mb-6">
                                {node.frontmatter.title}
                            </h3>
                        </Link>
                        <p className="mb-2 text-gray-500">
                            {node.frontmatter.date}
                        </p>
                        <p className="mb-4">{node.frontmatter.description}</p>
                        <button className="px-5 lg:px-8 py-3 rounded-full text-sm font-medium text-white bg-black transition-all">
                            <Link to={node.fields.slug}>Read more</Link>
                        </button>
                    </div>
                ))}
            </section>
        </BlogLayout>
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
