<template>
  <div class="home">
    <ul style="width: 80%; text-align: center;">
      <li
        v-for="post in posts"
        :key="post.id"
        @click="dispatchPost(post.id)"
        style="padding: 2rem 0;">
        <strong>{{ post.title }}</strong><br>
        {{ post.body }}<br>
      </li>
    </ul>
    <div v-if="post">
      {{ post }}
    </div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Component, Vue } from 'vue-property-decorator';
import { Post } from '@/domain/models/post-model';
import { GET_POSTS, GET_POST } from '@/infra/store/types/actions/actions.type';

@Component
export default class Home extends Vue {
  // <editor-fold desc="Computed">
  get posts(): Array<Post> {
    return this.$store.getters.posts;
  }

  get post(): Post {
    return this.$store.getters.post;
  }
  // </editor-fold>

  // <editor-fold desc="Mounted">
  mounted() {
    this.dispatchPosts();
  }
  // </editor-fold>

  dispatchPosts() {
    this.$store.dispatch(GET_POSTS);
  }

  dispatchPost(id: number) {
    this.$store.dispatch(GET_POST, id);
  }
}
</script>
