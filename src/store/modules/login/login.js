export const login = {
  state: {
    islogin: false,
    token: '777',
    count:null
  },
  getters: {
    loginToken: state => { return state.token}
  },
  mutations: {
    loginsuccess(state, payload) {
      // state.obj = { ...state.obj, newProp: 123 }
      let {isLogin} = payload;
      state.islogin =isLogin;
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit},paylod) {
      if ((state.count) % 2 === 1) {
        commit('loginsuccess');
      }
    }
  }
}
