<template>
  <article>
    <header>
      <figure v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <img :src="image" />
      </figure>
      <div>
        <h1>{{title}}</h1>
      </div>
    </header>
    <section>
      <p>{{text}}</p>
      <a :href="link" class="btn btn-blue btn-shadow rounded">View {{title}}</a>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    link: String,
    title: String,
    text: String,
    image: String
  }
}
</script>

<style lang="sass" scoped>

  @import '../assets/css/_variables.sass'
  article
    width: calc(25% - 30px)
    margin: 15px
    background: #fff
    box-shadow: 0 2px 5px 0 rgba(0,0,20,0.10)
    border-radius: 3px
    overflow: hidden

    @include breakpoint(m)
      width: calc(50% - 30px)

    @include breakpoint(s)
      width: calc(100% - 30px)

    header
      figure
        height: 167px
        background-position: center
        background-size: cover
        background-repeat: no-repeat
        img
          display: none
      div
        padding: 12px 15px 5px
        h1
          font-weight: 600
          font-size: 1em
          color: #44474A

    p
      font-size: 0.875em
      color: #777
      line-height: 1.5

    section
      padding: 0 15px 15px
</style>
