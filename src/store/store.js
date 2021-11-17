import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersList: [] // массив пользователей
  },
  getters: {
    getUsersList: state => state.usersList
  },
  mutations: {
    setUsersList (state, payload) {
      state.usersList.push(...payload)
    }
  },
  actions: {
    async fetchDataUsersList ({ commit }) {
      // для отображения новых данных при перезагрузке страницы
      // let users = sessionStorage.getItem('users')
      // let data = JSON.parse(users)
      let res
      // if (data) {
      //   res = data
      // } else {
      const response = await fetch(
        'https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/roistat.json'
      )
      res = await response.json()
      //   sessionStorage.setItem('users', JSON.stringify(res))
      // }
      commit('setUsersList', res)
    }
  }
})
