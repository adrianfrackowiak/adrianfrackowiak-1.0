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
            <section className="blog">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div className="blog-box" key={node.id}>
                        <Link to={node.fields.slug}>
                            <h3>{node.frontmatter.title}</h3>
                        </Link>
                        <p className="blog-date">{node.frontmatter.date}</p>
                        <p className="blog-p">{node.frontmatter.description}</p>
                        <button className="blog-btn">
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
