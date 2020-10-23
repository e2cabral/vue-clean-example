<template>
  <div class="home">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.title }}</strong><br>
        {{ post.body }}<br>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Component, Vue } from 'vue-property-decorator';
import { Post } from '@/domain/models/post-model';
import GET_POSTS from '@/infra/store/types/actions/actions.type';

@Component
export default class Home extends Vue {
  get posts(): Array<Post> {
    return this.$store.getters.posts;
  }

  mounted() {
    this.getPosts();
  }

  getPosts() {
    this.$store.dispatch(GET_POSTS);
  }
}
</script>
