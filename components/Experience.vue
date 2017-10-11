<template>
  <article class="experience-item">
    <header>
      <h1>{{title}}, <span>{{location}}</span></h1>
      <h2>{{position}}, <span>{{date}}</span></h2>
    </header>
    <section v-if="text">
      <p>{{text}}</p>
    </section>
  </article>
</template>

<script>
import Tag from '~/components/Tag.vue'

export default {
  props: {
    title: String,
    location: String,
    position: String,
    text: String,
    date: String
  },
  components: {
    Tag
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/css/_variables.sass'
  .experience-item
    padding: 10px 30px 10px
    @include breakpoint(s)
      padding: 10px 15px 10px
    header
      h1
        font-weight: 700
        font-size: 1.3125em
        color: #4A90E2
        // span
        //   color: #777
        //   font-weight: 600
        //   font-size: 0.875em
      h2
        font-weight: 600
        font-size: 1em
        color: #44474A
        span
          color: #777
          font-weight: 400
          font-size: 0.875em
    section
      p:last-child
        margin-bottom: 0
</style>
