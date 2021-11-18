<template>
  <div class="users">
    <div class="users__list">
      <button class="users__item users__item-heading" @click="sortName = true">Имя</button>
      <button class="users__item users__item-heading">Телефон</button>
    </div>
    <RowOne :usersList="getUsersList"  :sortName="sortName"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import RowOne from './rows/RowOne'

export default {
  name: 'UsersList',
  components: {
    RowOne
  },
  data () {
    return {
      sortName: false
    }
  },
  computed: {
    ...mapGetters(['getUsersList'])
  }
}
</script>

<style scoped>

.users {
  margin: 25px auto;
  width: 100%;
}

.users > .users__list {
  padding: 0;
}

.users__list {
  display: flex;
  justify-content: space-between;
}

.users__item {
  margin: 0;
  width: 100%;
  border: 1px solid #9c9c9c;
  padding: 7px 15px 7px 25px;
  text-align: left;
}

.users__item-heading {
  background: #ffffff;
  font-size: 16px;
  cursor: pointer;
}
</style>
