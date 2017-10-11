<template>
  <div class="card">
      <slot></slot>
  </div>
</template>

<style lang="sass" scoped>

  @import '../assets/css/_variables.sass'
  .card
    width: calc(58% - 30px)
    margin: 15px
    background: #fff
    box-shadow: 0 2px 5px 0 rgba(0,0,20,0.10)
    border-radius: 3px
    overflow: hidden

    @include breakpoint(m)
      width: calc(50% - 30px)

    @include breakpoint(s)
      width: calc(100% - 30px)
</style>
