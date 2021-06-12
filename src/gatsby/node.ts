import path from 'path';
import { GatsbyNode } from 'gatsby';
import { MarkdownRemark } from '../types/markdown-remark';

type ResultData = {
    allMarkdownRemark: {
        edges: {
            node: Partial<MarkdownRemark>;
        }[];
    };
};

export const createPages: GatsbyNode['createPages'] = async ({
    graphql,
    actions,
}) => {
    const { createPage } = actions;
    const result = await graphql<ResultData>(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (!result.data) {
        throw new Error('Failed fetching blog posts');
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (!node?.fields) {
            return;
        }
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
                slug: node.fields.slug,
            },
        });
    });
};
