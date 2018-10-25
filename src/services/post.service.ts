import http from '@/common/http';
import Post, {PostSerializer} from '@/common/post';

export default {
    list(): Promise<Post[]> {
        return http.get('posts?draft=3')
            .then((data: any) => data.results.map(PostSerializer.parse));
    },
};
