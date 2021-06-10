import React from 'react';
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
            <section className="blog">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div className="blog-box" key={node.id}>
                        <Link to={node.frontmatter.slug}>
                            <h3>{node.frontmatter.title}</h3>
                        </Link>
                        <p className="blog-p">{node.frontmatter.description}</p>
                        <p className="blog-date">{node.frontmatter.date}</p>
                        <button className="blog-btn">Read more</button>
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
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        slug
                        description
                    }
                }
            }
        }
    }
`;
