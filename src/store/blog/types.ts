export interface Post {
    slug: string;
    title: string;
    description: string;
    content: string;
    created: Date;
    published: Date | null;
    tags: string[];
}

export interface BlogState {
    posts: Post[];
    post: Post | null;
    pending: boolean;
}
