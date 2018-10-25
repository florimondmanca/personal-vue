export default interface Post {
    slug: string;
    title: string;
}

class PostSerializer {
    public static parse(data: any): Post {
        return {
            slug: data.slug,
            title: data.title,
        };
    }
}

export {
    PostSerializer,
};
