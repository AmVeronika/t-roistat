<template>
  <div id="app">
    <Users @open="toggleWindowModal"/>
    <transition name="show">
    <ModalWindow v-show="isShowModal" @close="toggleWindowModal"/>
    </transition>
  </div>
</template>

<script>

import Users from './components/Users'
import ModalWindow from './components/ModalWindow'

export default {
  name: 'App',
  components: {
    Users,
    ModalWindow
  },
  data: () => ({
    isShowModal: false
  }),
  methods: {
    toggleWindowModal (togle) {
      this.isShowModal = togle
    }
  }
}
</script>

<style>
.show-enter-active, .show-leave-active {
  transition: opacity .5s;
}
.show-enter, .show-leave-to {
  opacity: 0;
}
</style>
