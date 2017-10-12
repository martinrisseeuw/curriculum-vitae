<template>
  <article>
    <header>
      <figure v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <img :src="image" />
      </figure>
      <div class="tags" v-if="tags">
        <Tag 
          v-for="(tag, index) in tagArray"
          v-bind:text="tag"
          v-bind:key="index"
          v-bind:small="true"
        />
      </div>
      <div>
        <h1>{{title}}</h1>
      </div>
    </header>
    <section>
      <p>{{text}}</p>
      <a :href="link" class="btn btn-blue btn-shadow rounded">View project</a>
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
    image: String,
    tags: String
  },
  computed: {
    tagArray () {
      return this.tags.split(',')
    }
  },
  components: {
    Tag
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
      width: calc(100% - 20px)
      margin: 10px

    header
      figure
        height: 167px
        background-position: center
        background-size: cover
        background-repeat: no-repeat
        img
          display: none
      .tags
        padding: 13px 13px
        position: absolute
        left: 0
        bottom: 35px
      div
        padding: 12px 15px 5px
        h1
          font-weight: 600
          font-size: 1em
          color: #44474A

    p
      font-size: 1
      color: #777
      line-height: 1.5

    section
      padding: 0 15px 15px
</style>
