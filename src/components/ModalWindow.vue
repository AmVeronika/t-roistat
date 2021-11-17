<template>
  <div class="modal-window">
    <form class="modal-window__form">
      <label>
        Имя
        <input type="text">
      </label>
      <label>
        Телефон
        <input type="number">
      </label>
      <SelectCustom/>
    </form>
  </div>
</template>

<script>
import SelectCustom from './SelectCustom'

export default {
  name: 'ModalWindow',
  components: {
    SelectCustom
  }
}
</script>

<style scoped>

</style>
