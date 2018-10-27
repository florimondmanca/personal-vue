import http from '@/common/http';
import Post, {PostSerializer} from '@/common/post';

export default {
    async list(): Promise<Post[]> {
        const resp = await http.get('posts?draft=3');
        return resp.data.results.map(PostSerializer.parse);
    },
};
