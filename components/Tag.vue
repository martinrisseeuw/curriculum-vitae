<template>
  <li class="tag">
    {{text}}
  </li>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/css/_variables.sass'
  .tag
    display: inline-block
    background: #EAE9E9
    border-radius: 3px
    font-size: 0.875em
    color: #766E6E
    padding: 5px 10px 5px
    margin: 4px
</style>
