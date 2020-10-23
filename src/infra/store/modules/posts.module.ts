import GET_POSTS from '@/infra/store/types/actions/actions.type';
import SET_POSTS from '@/infra/store/types/mutations/mutations.type';
import { Post } from '@/domain/models/post-model';
import { PostService } from '@/data/protocols/posts/post-service';

export const state: { posts: Array<Post> } = { posts: [] };

export const actions = {
  async [GET_POSTS](context: { commit: Function }): Promise<Array<Post> | Error> {
    try {
      const posts = await PostService.getPosts();
      context.commit(SET_POSTS, posts);
      return posts;
    } catch (error) {
      console.error(error);
      return new Error(error);
    }
  },
};

export const mutations = {
  [SET_POSTS](state: { posts: Array<Post> }, posts: Array<Post>) {
    state.posts = posts;
  },
};

const getters = {
  posts(state: { posts: Array<Post> }): Array<Post> {
    return state.posts;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
