<template>
  <article class="experience-item">
    <header>
      <h1>Martinr, Amsterdam</h1>
      <h2>Freelance interaction designer & front-end designer (Jul 2014 – Current)</h2>
    </header>
    <section>
      <p>As a freelancer I had the pleasure to work with some wonderful clients working on small to medium size projects. helping them with design & code.</p>
    </section>
  </article>
</template>

<script>
import Tag from '~/components/Tag.vue'

export default {
  props: {
    link: String,
    title: String,
    text: String,
    image: String
  },
  components: {
    Tag
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/css/_variables.sass'
  .experience-item
    padding: 15px 30px
    header
      h1
        font-weight: 700
        font-size: 1.3125em
        color: #4A90E2
      h2
        font-weight: 600
        font-size: 1em
        color: #44474A
    section
      p:last-child
        margin-bottom: 0
</style>
