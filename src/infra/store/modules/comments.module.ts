import { GET_SOMETHING } from "@/infra/store/types/actions/actions.type";
import { SET_SOMETHING } from "@/infra/store/types/mutations/mutations.type";

const initialState = {
  something: [],
};

export const state = { ...initialState };

export const actions = {
  async [GET_SOMETHING] (context: { commit: Function }) {
    context.commit(SET_SOMETHING, []);
    return [];
  }
}

export const mutations = {
  [SET_SOMETHING] (state: { something: Array<string> }, something: Array<string>) {
    state.something = something;
  }
}

const getters = {
  something(state: { something: Array<string> }): Array<string> {
    return state.something;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
};
