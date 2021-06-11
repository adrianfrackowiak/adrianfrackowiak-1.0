import React from 'react';
import { graphql, PageProps } from 'gatsby';
import BlogLayout from '../components/blog/blog-layout';
import { MarkdownRemark } from '../types/markdown-remark';

type GraphQLResult = {
    markdownRemark: MarkdownRemark;
};

const BlogPost: React.FC<PageProps<GraphQLResult>> = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <BlogLayout>
            <section className="blog-post">
                <p className="post-category">{post.frontmatter.category}</p>
                <h1 className="post-title">{post.frontmatter.title}</h1>
                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </section>
        </BlogLayout>
    );
};

export default BlogPost;

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                slug
                category
            }
        }
    }
`;
