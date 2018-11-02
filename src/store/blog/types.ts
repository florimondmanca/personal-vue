export interface Post {
    slug: string;
    title: string;
    description: string;
    content: string;
    published: Date | null;
    tags: string[];
}

export interface BlogState {
    posts: Post[];
}
