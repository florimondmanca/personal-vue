export default interface Post {
    slug: string;
    title: string;
    description: string;
    content: string;
    published: Date | null;
    tags: string[];
}

const PostSerializer = {
    parse(data: any): Post {
        return {
            slug: data.slug,
            title: data.title,
            description: data.description,
            content: data.content,
            published: data.published ? new Date(data.published) : null,
            tags: data.tags,
        };
    },
};

export {
    PostSerializer,
};
