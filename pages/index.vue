<template>
  <div class="main-container">
    <section class="wrapper flex wrap">
      <Profile 
        title="🇳🇱 Martin Risseeuw"
        image="/martin.jpg"
        text="Freelance interaction designer & developer, I make web things for cool people & companies. 👨🏻‍💻"
      />
      <CardWrapper>
        <CardTitle title="📝 Experience" />
        <Experience 
          title="Freelance"
          location="Amsterdam"
          position="interaction designer & front-end designer"
          date="(Jul 2014 – Current)"
          text="As a freelancer I had the pleasure to work with some wonderful clients working on small to medium size projects. Helping them with design & code."
        />
        <Experience 
          title="Waag Society"
          location="Amsterdam"
          position="Interaction Designer"
          date="(Oct 2013 – Jun 2017)"
          text="Working as an interaction designer at Waag society. I was responsible for the design, front-end and UI on different projects within the Waag. Mostly focusing on digital heritage, education, and future internet."
        />
        <Experience 
          title="FrenzyMedia"
          location="Amsterdam"
          position="Front-end designer"
          date="(Nov 2009 – Sep 2011)"
          text="During my time at FrenzyMedia, I worked on small to medium size websites doing the design and front-end development."
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
          tags="Design, Front-end, Vue.js, Nuxt"
        />
        <card 
          image="/incassolink-thumb.jpg"
          title="Incasso Link"
          link="https://incassolink.nl"
          text="Incasso Link makes sure you get paid for your work"
          tags="Design, Front-end, Vue.js"
        />
        <card 
          image="/cardslide-thumb.jpg"
          title="Secrid Cardslide"
          link="https://secrid.com/cardslide"
          text="A product presentation website for Secrid"
          tags="Full-stack development"
        />
        <card 
          image="/secrid-usa-thumb.jpg"
          title="Secrid USA"
          link="https://usa.secrid.com"
          text="The secrid webshop for the US region"
          tags="CSS animation, Full-stack"
        />
        <card 
          image="/hotelgrouper-thumb.jpg"
          title="HotelGrouper"
          link="https://hotelgrouper.com"
          text="A website to book hotels with group discount"
          tags="Design, Front-end"
        />
        <card 
          image="/openthings-thumb.jpg"
          title="Openthings"
          link="https://openthings.wiki"
          text="A platform to share knowledge and build things together"
          tags="Concept, Design, Front-end"
        />
        <card 
          image="/sensation.jpg"
          title="ID&T Sensation"
          link="http://sensation.com/legazine/"
          tags="Front-end, Interaction"
          text="The story of one of the biggest dance events in the world"
        />
        <card 
          image="/survey.jpg"
          title="Secrid Registration"
          link="https://register.secrid.com"
          text="An application to register your wallet, and answer a survey"
          tags="React, Redux, Redux Form"
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
  .section-header
    width: 100%
    padding: 30px 15px 15px
    text-align: center
    h2
      font-size: 1.2em
      font-weight: 600
  .main-container
    padding: 30px 0
    @include breakpoint(s)
      font-size: 87.5%
      padding: 10px 0
    .wrapper
      max-width: 1210px
      padding: 0 15px
      margin: auto
      @include breakpoint(s)
        padding: 0 5px
</style>
