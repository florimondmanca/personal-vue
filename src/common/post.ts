export default interface Post {
    slug: string;
    title: string;
    description: string;
    published: Date | null;
    tags: string[];
}

class PostSerializer {
    public static parse(data: any): Post {
        return {
            slug: data.slug,
            title: data.title,
            description: data.description,
            published: data.published ? new Date(data.published) : null,
            tags: data.tags,
        };
    }
}

export {
    PostSerializer,
};
