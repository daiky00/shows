import Vue from 'vue';
import Vuex from 'vuex';
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import axios from 'axios';
 
Vue.use(Vuex);

const API = 'https://gist.githubusercontent.com/memikequinn/475999c535ef4e1341f1262484244c68/raw/d77d0f6f4d7e53d7bf5dd7bd1997b27d291d4b0b/db.json';

interface State {
  shows: Array<any>
}

const state: State  = {
  shows: []
}

const actions: ActionTree<State, any> = {
  LoadShows({ commit }): any {
    axios({url: API}).then((response) => {
      const shows = JSON.parse(JSON.stringify(response.data));
      commit('SetShows', shows);
    }, (error) => {
      console.log(error);
    });
  }
}

const mutations: MutationTree<State> = {
  SetShows(state, shows ) {
    state.shows = shows;
  }
}

const getters: GetterTree<State, any> = {
    GetShows(state) { 
      return state.shows
    }
}


export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
