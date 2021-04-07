import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null
  },
  getters:{

  },
  mutators: {
    setUser(state,data){
      state.user = data;
      localStorage.setItem("user",JSON.stringify(user))
    }
  }
})
