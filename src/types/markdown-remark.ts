export type MarkdownRemark = {
    id: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        slug: string;
        category: string;
    };
    excerpt: string;
    html: string;
    fields: {
        slug: string;
    };
};
