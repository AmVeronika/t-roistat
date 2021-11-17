<template>
  <div class="settings-select">
    <div class="settings-select__title" @click="toggleMenu">
      {{ getSelected }}
      <p
        :class="[toggleSelect ? 'arrow' : '']">
        &#9660;
      </p>
    </div>
    <transition name="form">
    <div v-if="toggleSelect" class="settings-select__form">
      <label
        class="settings-select__option"
        v-for="user in getUsersList"
        :key="user.id"
        @change="selectItem(user.name)"
      >
        <input class="settings-select__input" type="radio"/>
        {{ user.name }}
      </label>
    </div>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'SelectCustom',
  data () {
    return {
      getSelected: 'null',
      toggleSelect: false
    }
  },
  methods: {
    // ...mapMutations(["changeSelected"]),
    toggleMenu () {
      this.toggleSelect = !this.toggleSelect
    },
    selectItem (user) {
      this.getSelected = user
      this.toggleSelect = false
    }
  },
  computed: {
    ...mapGetters(['getUsersList'])
  }
}
</script>

<style scoped>
.arrow {
  transform: rotate3d(1, 0, 0, 180deg);
}

.settings-select {
  min-width: 150px;
  max-width: max-content;
  position: relative;
}

.settings-select__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.79);
}
.settings-select__title > p {
  margin: 0;
}
.settings-select__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.79);
  position: absolute;
  top: 33px;
  left: 0;
}

.settings-select__option {
  padding: 5px;
  cursor: pointer;
  transition: 0.2s ease-out;
}

.settings-select__option:hover {
  color: #9c9c9c;
  transition: 0.2s ease-out;
}

.settings-select__input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-enter-active {
  transition: all .3s ease;
}
.form-leave-active {
  transition: all .2s cubic-bezier(1.0, 1.0, 1.0, 1.0);
}
.form-enter, .form-leave-to {
  transform: translateY(-17px);
  opacity: 0;
}
</style>
