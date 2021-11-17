<template>
  <div class="users-wrapp">
    <main-button class="users-wrapp__btn">Добавить</main-button>
    <UsersList/>
  </div>
</template>

<script>
import MainButton from './MainButton'
import UsersList from './UsersList'
import {mapActions} from 'vuex'

export default {
  name: 'Users',
  components: {
    MainButton,
    UsersList
  },
  methods: {
    ...mapActions(['fetchDataUsersList'])
  },
  mounted () {
    this.fetchDataUsersList()
  }
}
</script>

<style scoped>
.users-wrapp {
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
}
.users-wrapp__btn {
  align-self: end;
}
</style>
