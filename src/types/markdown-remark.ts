export type MarkdownRemark = {
    id: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        slug: string;
    };
    html: string;
};
