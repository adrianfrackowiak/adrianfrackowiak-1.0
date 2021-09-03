import React from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {post.frontmatter.title} - Adrian Frąckowiak - Front End
                    Developer
                </title>
            </Helmet>
            <div className="w-full mx-auto px-4 lg:px-6 ">
                <article className="mt-16 mb-16 flex flex-col items-center w-full">
                    <p className="text-center mb-4">
                        {post.frontmatter.category}
                    </p>
                    <h1 className="text-center text-3xl font-bold mb-12">
                        {post.frontmatter.title}
                    </h1>
                    <div
                        className="w-full prose lg:prose-xl"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </article>
            </div>
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
