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
    loginsuccess(state, paylod) {
      state.islogin = paylod.islogin
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit},paylod) {
      if ((state.count) % 2 === 1) {
        // commit('increment');
      }
    }
  }
}
