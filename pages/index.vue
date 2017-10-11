<template>
  <div class="main-container">
    <section class="wrapper flex wrap">
      <Profile 
        image="/homepinr.jpg"
        title="Homepinr"
        link="https://homepinr.com"
        text="A web application that I designed and build in vue.js"
      />
      <CardWrapper>
        <CardTitle title="Experience" />
        <Experience />
        <Experience />
        <Experience />
      </CardWrapper>
    </section>
    <section class="wrapper flex wrap">
        <card 
          image="/homepinr.jpg"
          title="Homepinr"
          link="https://homepinr.com"
          text="A web application that I designed and build in vue.js"
        />
        <card 
          image="/homepinr.jpg"
          title="Homepinr"
          link="https://homepinr.com"
          text="A web application that I designed and build in vue.js"
        />
        <card 
          image="/homepinr.jpg"
          title="Homepinr"
          link="https://homepinr.com"
          text="A web application that I designed and build in vue.js"
        />
        <card 
          image="/homepinr.jpg"
          title="Homepinr"
          link="https://homepinr.com"
          text="A web application that I designed and build in vue.js"
        />
        <card 
          image="/homepinr.jpg"
          title="Homepinr"
          link="https://homepinr.com"
          text="A web application that I designed and build in vue.js"
        />
        <card 
          image="/homepinr.jpg"
          title="Homepinr"
          link="https://homepinr.com"
          text="A web application that I designed and build in vue.js"
        />
        <card 
          image="/homepinr.jpg"
          title="Homepinr"
          link="https://homepinr.com"
          text="A web application that I designed and build in vue.js"
        />
        <card 
          image="/homepinr.jpg"
          title="Homepinr"
          link="https://homepinr.com"
          text="A web application that I designed and build in vue.js"
        />
    </section>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import Profile from '~/components/Profile.vue'
import Experience from '~/components/Experience.vue'
import CardWrapper from '~/components/CardWrapper.vue'
import CardTitle from '~/components/CardTitle.vue'

export default {
  components: {
    Card,
    Profile,
    Experience,
    CardWrapper,
    CardTitle
  }
}
</script>

<style lang="sass" scoped>
  .main-container
    padding: 30px 0
</style>
