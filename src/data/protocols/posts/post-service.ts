import axios from '../../../infra/http/http-client/axios';
import {Post} from "@/domain/models/post-model";

export class PostService {
  static async getPosts(): Promise<Array<Post> | Error> {
    try {
      const { data } = await axios.get('/posts');
      return data;
    } catch (error) {
      console.error(error);
      return new Error(error);
    }
  }
}
