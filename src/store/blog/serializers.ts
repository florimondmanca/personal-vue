import {Post} from './types';

export const PostSerializer = {
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
