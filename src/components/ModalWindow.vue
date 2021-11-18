<template>
  <div class="modal-window" @mousedown="closeWindowModal">
    <form  class="modal-window__form" @mousedown.stop @submit.prevent="sendingData">
      <div class="modal-window__title">
        <h3 class="modal-window__header">Добавление пользователя</h3>
        <button class="modal-window__btn" @click="closeWindowModal" type="button">&#10007;</button>
      </div>
      <label class="modal-window__label">
        Имя
        <input v-model="name" class="modal-window__input" type="text" required>
      </label>
      <label class="modal-window__label">
        Телефон
        <input v-model="tel" class="modal-window__input" type="number" required>
      </label>
      <div class="modal-window__label">
        Начальник
        <SelectCustom @chef="selectionChief" />
      </div>
      <main-button>Сохранить</main-button>
    </form>
  </div>
</template>

<script>
import SelectCustom from './SelectCustom'
import MainButton from './MainButton'
import {v4 as uuidv4} from 'uuid'
import {mapMutations} from 'vuex'

export default {
  name: 'ModalWindow',
  components: {
    SelectCustom,
    MainButton
  },
  data () {
    return {
      name: null,
      tel: null,
      chief: null
    }
  },
  methods: {
    ...mapMutations(['setNewUser', 'setInitialSelectNames']),
    closeWindowModal () {
      this.$emit('close', false)
    },
    selectionChief (selection) {
      this.chief = selection
    },
    sendingData () {
      let userData = {
        user: {
          id: uuidv4(),
          name: this.name,
          tel: this.tel
        },
        chief: this.chief
      }
      this.setNewUser(userData)
      this.name = null
      this.tel = null
      this.closeWindowModal()
    }
  },
  mounted () {
    this.setInitialSelectNames()
  }
}
</script>

<style scoped>
.modal-window {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.73);
  z-index: 10;
}

.modal-window__form {
  width: 350px;
  padding: 10px 15px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: stretch;
}

.modal-window__title {
  display: flex;
  justify-content: space-between;
}

.modal-window__header {
  font-size: 18px;
}

.modal-window__btn {
  width: min-content;
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.modal-window__label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-window__input {
  width: 200px;
  padding: 2px 5px;
  font-size: 16px;
}
</style>
