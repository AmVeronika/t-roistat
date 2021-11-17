<template>
  <div class="users">
    <div class="users__list">
      <button class="users__item users__item-heading">Имя</button>
      <button class="users__item users__item-heading">Телефон</button>
    </div>
    <div>
      <div v-for="user in getUsersList" :key="user.id">
        <div class="users__list">
          <p :class="['users__item',{'users__item-addition' : user.children}]"> {{ user.name }}</p>
          <p class="users__item"> {{ user.tel }} </p>
        </div>
        <div class="users__list" v-for="child in user.children" :key="child.id">
          <p :class="['users__item', 'users__item-child',{'users__item-addition' : child.children}]"> {{ child.name }}</p>
          <p class="users__item"> {{ child.tel }} </p>
        </div>
      </div>
    </div>
<!--    users__item-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
// import {v4 as uuidv4} from 'uuid';

export default {
  name: 'UsersList',
  computed: {
    ...mapGetters(['getUsersList'])
  }
}
</script>

<style scoped>

.users{
  margin: 25px auto;
  width: 100%;
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
.users__item-heading{
  background: #ffffff;
  font-size: 16px;
}
.users__item-addition {
  position: relative;
}
.users__item-addition:after {
  content: '+';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 7px;
}

.users__item-child {
}
</style>
