<template>
  <div class="main-container">
    <section class="wrapper flex wrap">
      <Profile 
        image="/martin.jpg"
        title="Homepinr"
        link="https://homepinr.com"
        text="A web application that I designed and build in vue.js"
      />
      <CardWrapper>
        <CardTitle title="📝 Experience" />
        <Experience 
          title="Freelance"
          location="Amsterdam"
          position="interaction designer & front-end designer"
          date="(Jul 2014 – Current)"
          text="As a freelancer I had the pleasure to work with some wonderful clients working on small to medium size projects. helping them with design & code."
        />
        <Experience 
          title="Waag Society"
          location="Amsterdam"
          position="Interaction Designer"
          date="(Oct 2013 – Jun 2017)"
          text="Working as an interaction designer at Waag society. I am responsible for the design, front-end and UI on different projects within the Waag. Mostly focusing on digital heritage, education, and future internet."
        />
        <Experience 
          title="Frenzy Media"
          location="Amsterdam"
          position="Front-end designer"
          date="(Nov 2009 – Sep 2011)"
          text="As a freelancer I had the pleasure to work with some wonderful clients working on small to medium size projects. helping them with design & code."
        />
        <CardTitle title="🎓 Latest education" />
        <Experience 
          title="Royal Academy of Art"
          location="The Hague"
          position="Interactive / Media / Design"
          date="(2011 – 2015)"
        />
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
  @import '../assets/css/_variables.sass'
  .main-container
    padding: 30px 0
    @include breakpoint(s)
      font-size: 87.5%
</style>
