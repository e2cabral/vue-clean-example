import { GET_POSTS, GET_POST } from '@/infra/store/types/actions/actions.type';
import { SET_POSTS, SET_POST } from '@/infra/store/types/mutations/mutations.type';
import { Post } from '@/domain/models/post-model';
import { PostService } from '@/data/protocols/posts/post-service';

export const state: { posts: Array<Post>; post: Post | null } = { posts: [], post: null };

// <editor-fold desc="Actions">
export const actions = {
  // @desc Return all posts stored
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

  // @desc Return an specific post
  async [GET_POST](context: { commit: Function }, id: number): Promise<Post | Error> {
    try {
      const post = await PostService.getPost(id);
      context.commit(SET_POST, post);
      return post;
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  },
};
// </editor-fold>

// <editor-fold desc="Mutations">
export const mutations = {
  [SET_POSTS](state: { posts: Array<Post> }, posts: Array<Post>) {
    state.posts = posts;
  },

  [SET_POST](state: { post: Post }, post: Post) {
    state.post = post;
  },
};
// </editor-fold>

// <editor-fold desc="Getters">
const getters = {
  posts(state: { posts: Array<Post> }): Array<Post> {
    return state.posts;
  },

  post(state: { post: Post }): Post {
    return state.post;
  },
};
// </editor-fold>

export default {
  state,
  actions,
  mutations,
  getters,
};
