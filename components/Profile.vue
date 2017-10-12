<template>
  <article>
    <header>
      <figure v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <img :src="image" />
      </figure>
      <div>
        <h1>{{title}}</h1>
        <p>{{text}}</p>
      </div>
    </header>
    <section class="links">
      <a href="#">✉️ hello@martinr.nl</a><br/>
      <a href="#">🌎 http://martinr.nl</a><br/>
      <a href="#">📞 +31 681485887</a>
    </section>
    <footer>
      <ul>
        <Tag text="Sketch app" />
        <Tag text="Framer" />
        <Tag text="inVision" />
        <Tag text="Vue.js" />
        <Tag text="Paper prototype" />
        <Tag text="Nginx" />
        <Tag text="Directus" />
        <Tag text="Node.js" />
        <Tag text="Kirby CMS" />
        <Tag text="Wordpress" />
        <Tag text="Webpack" />
        <Tag text="React" />
        <Tag text="React Native" />
        <Tag text="👍🏻 And some other stuff" />
      </ul>
    </footer>
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
  article
    width: calc(42% - 30px)
    margin: 15px
    background: #fff
    box-shadow: 0 2px 5px 0 rgba(0,0,20,0.10)
    border-radius: 3px
    overflow: hidden
    text-align: center
    padding: 30px

    @include breakpoint(m)
      width: calc(50% - 30px)

    @include breakpoint(s)
      width: calc(100% - 20px)
      margin: 10px
      padding: 15px

    header
      border-bottom: 1px solid #F5F5F7
      padding: 0 0 30px 0
      p
        margin-bottom: 0
      figure
        margin: auto
        width: 139px
        height: 139px
        border-radius: 50%
        overflow: hidden
        background-position: center
        background-size: cover
        background-repeat: no-repeat
        img
          display: none
      div
        padding: 12px 15px 5px
        h1
          font-weight: 600
          font-size: 1.25em
          color: #727287
          margin-bottom: 6px
    .links
      padding: 30px 0
      border-bottom: 1px solid #F5F5F7
      a
        display: inline-block
        margin-bottom: 5px
        font-size: 1em
        &:last-child
          margin-bottom: 0
    p
      font-size: 1em
      color: #777
      line-height: 1.5

    footer
      padding: 30px 0 0
</style>
