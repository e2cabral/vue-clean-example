import Vue from 'vue';
import Vuex from 'vuex';

import posts from '@/infra/store/modules/posts.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
  },
});
