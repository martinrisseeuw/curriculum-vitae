
<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>


<style lang="sass" scoped>
@import '../assets/css/_variables.sass'

header
  padding: 30px 30px 0px
  @include breakpoint(s)
    padding: 15px 15px 0px
  p
    margin-bottom: 0
  h1
    font-size: 1em
    font-weight: 400
    color: #4A4A4A
</style>
