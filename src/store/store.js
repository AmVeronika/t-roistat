import Vue from 'vue'
import Vuex from 'vuex'
import {v4 as uuidv4} from 'uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // массив пользователей
    usersList: [{
      id: uuidv4(),
      name: 'Марина',
      tel: '+7 941 123 21 42'
    },
    {
      id: uuidv4(),
      name: 'Пётр',
      tel: '+7 941 123 21 42'
    },
    {
      id: uuidv4(),
      name: 'Алексей',
      tel: '+7 941 123 21 42',
      children: [
        {
          id: uuidv4(),
          name: 'Иван',
          tel: '+7 941 123 21 42'
        },
        {
          id: uuidv4(),
          name: 'Александр',
          tel: '+7 941 123 21 42',
          children: [
            {
              id: uuidv4(),
              name: 'Максим',
              tel: '+7 941 123 21 42'
            }]
        }
      ]
    },
    {
      id: uuidv4(),
      name: 'Борис',
      tel: '+7 941 123 21 42'
    }
    ],
    selectNamesList: [{id: null, name: 'Пропустить'}]
  },
  getters: {
    getUsersList: state => state.usersList,
    getSelectNamesList: state => state.selectNamesList
  },
  mutations: {
    setUsersList (state, payload) {
      state.usersList = payload
      localStorage.setItem('users', JSON.stringify(state.usersList))
    },
    setUsersListLocal (state) {
      localStorage.setItem('users', JSON.stringify(state.usersList))
    },
    setNewUser (state, payload) {
      const {user, chief} = payload
      state.selectNamesList.push({id: user.id, name: user.name})
      const searchChief = (arr) => {
        arr.forEach((el) => {
          if (el.id === chief) {
            if (el.hasOwnProperty('children')) {
              el.children.push(user)
            } else {
              Vue.set(el, 'children', [user])
            }
          } else if (el.hasOwnProperty('children')) {
            return searchChief(el.children)
          }
        })
      }
      if (!chief) {
        return state.usersList.push(user)
      } else {
        searchChief(state.usersList)
      }
      localStorage.setItem('users', JSON.stringify(state.usersList))
    },
    setInitialSelectNames (state) {
      const getDataUsers = (arr) => {
        arr.forEach(el => {
          state.selectNamesList.push({id: el.id, name: el.name})
          if (el.hasOwnProperty('children')) {
            getDataUsers(el.children)
          }
        })
      }
      getDataUsers(state.usersList)
    }
  },
  actions: {
    fetchDataUsersList ({commit}) {
      // для отображения новых данных при перезагрузке страницы
      let users = localStorage.getItem('users')
      let data = JSON.parse(users)
      if (data) {
        commit('setUsersList', data)
      }
    }
  }
})
