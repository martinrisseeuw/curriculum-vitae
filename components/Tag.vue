<template>
  <li class="tag" :class="{small: small}">
    {{text}}
  </li>
</template>

<script>
export default {
  props: {
    text: String,
    small: Boolean
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
    &.small
      padding: 2px 4px
      margin: 1px
      background: #f1f1f1
</style>
