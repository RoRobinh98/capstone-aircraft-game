import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import "../ui/assets/style.css";
import vuetify from './plugins/vuetify';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlane)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const store = new Vuex.Store({
  state: {
    playerName: "",
    gameID: "",
    roleID: "",
    // assist with rejoining the game at the right page
    checkpoint: ""
  },
  mutations: {
    setGame(state, payload) {
      state.playerName = payload.playerName;
      state.gameID = payload.gameID;
    },

    setRole(state, payload){
      state.roleID = payload.roleID;
    },

    setCheckpoint(state, payload) {
      state.checkpoint = payload.checkpoint;
    }
  },
  plugins: [createPersistedState()]
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");


router.afterEach(to => {
  let page = to.name;
  if (page !== "Home") {
    store.commit("setCheckpoint", {
      checkpoint: page
    })
  }
});
