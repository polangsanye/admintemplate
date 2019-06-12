const login = {
  state: {
    islogin: false,
    token: '',
    count:null
  },
  getters: {
    leftMenus: state => { return state.islogin}
  },
  mutations: {
    loginsuccess(state, paylod) {
      state.islogin = paylod.islogin
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit}) {
      if ((state.count) % 2 === 1) {
        // commit('increment');
      }
    }
  }
}