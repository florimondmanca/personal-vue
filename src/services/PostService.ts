import http from '@/common/http';
import querystring from '@/common/querystring';
import Post, {PostSerializer} from '@/models/Post';

export default {
    /* Get a list of blog posts */
    async list(options: { draft?: boolean, tag?: string } = {}): Promise<Post[]> {
        const params: any = {
            draft: options.draft ? '2' : '3',
        };
        if (options.tag) {
            params.tag = options.tag;
        }
        const resp = await http.get('posts' + querystring.stringify(params));
        return resp.data.results.map(PostSerializer.parse);
    },
    /* Retrieve a particular blog posts */
    async retrieve(slug: string): Promise<Post> {
        const res = await http.get(`posts/${slug}`);
        return PostSerializer.parse(res.data);
    },
};
