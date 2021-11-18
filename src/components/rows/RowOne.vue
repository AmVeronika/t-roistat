<template>
  <ul class="users__list">
    <li v-for="user in sortList" :key="user.id">
      <div class="users__row">
        <p :class="['users__item',{'users__item-addition' : user.children}]"> {{ user.name }}</p>
        <p class="users__item users__item-tel"> {{ user.tel }} </p>
      </div>
      <RowOne v-if="user.children" :usersList="user.children" :sortName="sortName"/>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'RowOne',
  props: {
    usersList: {
      type: Array,
      /* eslint-disable */
      default: []
    },
    sortName: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sortList () {
      const sortByName = function (d1, d2) { return (d1.name > d2.name) ? 1 : -1 }
      if (this.sortName) {
        /* eslint-disable */
        this.usersList = this.usersList.sort(sortByName)
      }
      return this.usersList
    }
  }
}
</script>

<style scoped>
.users__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
}

.users__row {
  display: flex;
  justify-content: flex-end;
}

.users__item {
  margin: 0;
  width: 100%;
  border: 1px solid #9c9c9c;
  padding: 7px 15px 7px 25px;
  text-align: left;
}

.users__item-tel {
  flex-basis: 200px;
  flex-shrink: 0;
  margin: 0;
  box-sizing: border-box;
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
  padding-left: 35px;
}
</style>
