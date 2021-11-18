<template>
<button class="button">
<slot></slot>
</button>
</template>

<script>
export default {
  name: 'MainButton'
}
</script>

<style scoped>
.button {
  width: fit-content;
  padding: 5px 25px;
  background: #dddddd;
  border: 1px solid #9c9c9c;
  border-radius: 15px;
  transition-duration: 0.4s;
}
.button:hover {
  background-color: rgba(0, 0, 0, 0.79); /* Green */
  color: white;
  cursor: pointer;
}
</style>
