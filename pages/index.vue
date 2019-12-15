<template lang="pug">
  main
    section.section.section-hero#hero
      .section__body
        h1.section__title Visual design tool that live-sync's CSS edits with your editor.
        h2.section__sub-title.section-hero__sub-title Design quicker. Devsync uses the browser's debugger to find your CSS and edit it in real-time.
        .m-2
          button.section-hero__button( @click="goToBuy" ) Watch Demo
          button.section-hero__button.section-hero__button--sec( @click="goToInfo" ) Read more
        p.section-hero__sub-text 30-Day Money-Back Guarantee
      img.section-hero__browser-img( src="img/browser-preview.webp" alt="Browser preview" :style="browserPreviewSlide" )
      img.section-hero__editor-img( src="img/editor-preview.webp" alt="Editor preview" :style="editorPreviewSlide" )
      // .section-hero__editor-img( alt="Editor preview" :style="'background-image: url(\"img/editor-frame-square.png\");' + editorPreviewSlide" ) 
        pre(style="margin-left: 25%; margin-top: 18%;")
          code Hey man 
    section.section.info-section#info
      .section__body.info-section__backdrop
        h1.section__title Speed up your workflow
        h2.section__sub-title Edit your CSS visually and save time.
        .flex.flex-row.items-center.mt-4
          .info-section__demo-container
            img.info-section__demo-img( src="img/browser-demo.webp" alt="Browser demo")
          ul.info-section__list
            li.info-section__list-item
              h3.info-section__list-item__title CSS that makes visual sense
              p
                | Create CSS that looks good and makes sense visually. Iterate quickly, try things out on a whim to see how they look but be able to save your work.
            li.info-section__list-item
              h3.info-section__list-item__title Live-sync your edits
              p
                | To maximize productivity your edits are applied live trough a low-latency websocket connection with your editor and injected in the webpage trough the Chrome debugger. All without reloading.
            li.info-section__list-item
              h3.info-section__list-item__title No unmaintainable mystery CSS
              p
                | All the CSS you add, edit or delete is part of a CSS rule you defined in your project. Rules Are added in a logical manner but feel free to run prettier on save, remember you are still working in your editor!
            li.info-section__list-item
              h3.info-section__list-item__title Keep full fine-grained controll
              p
                | Want to edit a weird CSS property, you can always just quickly hop into your editor.
    // section.section
      .section__body.section__body--left
        h1.section__title We support lie a lot of things
        h2.section__sub-title Oh so manny things like you dont even wanna know ma man!
    section.section.section--left.section-text#text( ref="text" )
      .section__body.section__body--left
        h1.section__title Design & develop at the same time
        h2.section__sub-title Visually edit your design while automatically changing your code.
        .section-text__paragraphs
          .info-paragraph
            AppAlignLogo.info-paragraph__icon
            div
              .info-paragraph__title Stop context switching
              .info-paragraph__body Everytime you switch from browser to editor to adjust your design you lose time and focus. Devsync enables you to directly apply adjustments in both places.
          .info-paragraph
            AppSizingLogo.info-paragraph__icon
            div
              .info-paragraph__title Design with your eyes
              .info-paragraph__body CSS determines both technical layout and visual aesthetic. Skip the step of predicting what your CSS will look like and the cumbersome process of adjusting from there. Directly design what looks good and save time.
          .info-paragraph
            AppPositionLogo.info-paragraph__icon
            div
              .info-paragraph__title Iterate quickly  
              .info-paragraph__body Try things out, quickly check out what your ideas look like and either save or discard them.
          .info-paragraph
            AppSettingsLogo.info-paragraph__icon
            div
              .info-paragraph__title Works with your tools
              .info-paragraph__body Devsync integrates with Chrome, VS Code and soon with other editors. It is compatible with most preprocessor, check below for compatibility.
      TheLiveCodeExample(v-if="thingy")
      // - img.section-text__editor-img( src="img/editor-preview.png" alt="Editor preview" )
    section.section
      .section__body
        h1.section__title Verified Compatibility
        h2.section__sub-title.m-2 Devsync works with every bundeler that correctly generates sourcemaps. Not all do by default. We've tested some populair setups for compatabillity.
        .compatibility-container
          a.compatibility-indicator(
            v-for="indicator in compatibility"
            :class=`{
              'compatibility-indicator--success': (indicator.status === 'success'),
              'compatibility-indicator--info':    (indicator.status === 'info'),
              'compatibility-indicator--warning': (indicator.status === 'warning'),
              'compatibility-indicator--error':   (indicator.status === 'error')
            }`
            :href="indicator.link"
          )
            img.compatibility-indicator__icon( :src="indicator.icon" )
            .compatibility-indicator__title {{ indicator.title }}
            svg.compatibility-indicator__status( viewBox="0 0 10 10" )
              polygon( points="0,10 10,10 10,0" fill="currentColor" )
      //- .flex.flex-row.items-center.justify-center.flex-wrap.m-4.max-w-4xl
        img( src="img/icons/mac.svg" ).platform-logo.h-10.w-10.m-6.my-2
        img( src="img/icons/windows.svg" ).platform-logo.h-10.w-10.m-6.my-2
        img( src="img/icons/linux.svg" ).platform-logo.h-10.w-10.m-6.my-2
    section.section.section-cta#cta( ref="cta" )
      TheCtaCard
      .section__body
        h1.section__title Stay up to date.
        h2.section__sub-title Get notified about updates and new features
        form.email-form( action="https://nickolasboyer.us12.list-manage.com/subscribe/post?u=55a5fbebab9bb447102de7229&amp;id=42d8840ff4" method="post" )
          input.email-form__input( placeholder="email" type="email" value="" name="EMAIL" id="mce-EMAIL" required )
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          | <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_55a5fbebab9bb447102de7229_42d8840ff4" tabindex="-1" value=""></div>
          input.email-form__button( type="submit" value="Subscribe!" name="subscribe" id="mc-embedded-subscribe" )
    footer.footer
      // img.footer__title( src="/img/logo-mono.svg" )
      ul.footer__link-list
        li.footer__link
          a( href="mailto:will@devsync.co" ) Contact
        li.footer__link
          a( href="/twitter" ) Twitter
        li.footer__link
          a( href="/faq" ) FAQ
        li.footer__link
          a( href="/tuts" ) Tutorials
</template>

<script>
import AppAlignLogo from '../components/AppAlignLogo.vue'
import AppSizingLogo from '../components/AppSizingLogo.vue'
import AppPositionLogo from '../components/AppPositionLogo.vue'
import AppSettingsLogo from '../components/AppSettingsLogo.vue'
import TheLiveCodeExample from '../components/TheLiveCodeExample.vue'
import TheCtaCard from '../components/TheCtaCard.vue'

const particleConfig = {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#999"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
}

export default {
  components: {
    AppAlignLogo,
    AppSizingLogo,
    AppPositionLogo,
    AppSettingsLogo,
    TheLiveCodeExample,
    TheCtaCard
  },
  data() {
    return {
      offset: 0,
      compatibility: [
        {
          title: 'HTML',
          icon: 'img/icons/html.svg',
          status: 'success',
        },
        {
          title: 'Webpack',
          icon: 'img/icons/webpack.svg',
          status: 'success',
          link: 'https://docs.devsync.co/compatibility/webpack.html'
        },
        {
          title: 'Rollup',
          icon: 'img/icons/rollup.svg',
          status: 'info',
          link: 'https://docs.devsync.co/compatibility/rollup.html'
        },
        {
          title: 'Vue JS',
          icon: 'img/icons/vue.svg',
          status: 'success',
          link: 'https://docs.devsync.co/compatibility/vue.html'
        },
        {
          title: 'Nuxt',
          icon: 'img/icons/nuxt.svg',
          status: 'success',
          link: 'https://docs.devsync.co/compatibility/vue.html#nuxt'
        },
        {
          title: 'React',
          icon: 'img/icons/react.svg',
          status: 'warning',
          link: 'https://docs.devsync.co/compatibility/react.html'
        },
        {
          title: 'Next',
          icon: 'img/icons/next.svg',
          status: 'warning',
          link: 'https://docs.devsync.co/compatibility/react.html#next'
        },
        {
          title: 'Gatsby',
          icon: 'img/icons/gatsby.svg',
          status: 'info',
          link: 'https://docs.devsync.co/compatibility/react.html#gatsby'
        },
        {
          title: 'Angular',
          icon: 'img/icons/angular.svg',
          status: 'warning',
          link: 'https://docs.devsync.co/compatibility/angular.html'
        },
        {
          title: 'Ember',
          icon: 'img/icons/ember.svg',
          status: 'error',
          link: 'https://docs.devsync.co/compatibility/ember.html'
        },
        {
          title: 'Svelte',
          icon: 'img/icons/svelte.svg',
          status: 'error',
          link: 'https://docs.devsync.co/compatibility/svelte.html'
        }
      ],
      thingy: true
    }
  },
  mounted () {
    // this.setParallax()
    // const eventHandler = () => requestAnimationFrame(this.setParallax)
    // window.addEventListener('resize', eventHandler)
    // window.addEventListener('scroll', eventHandler)
    // // Remove the scroll hanlder when the
    // // component is destroyed.
    // this.$on(`hook:destroyed`, () => {
    //   window.removeEventListener('resize', eventHandler)
    //   window.removeEventListener('scroll', eventHandler)
    // })
    
    require('particles.js')
    window.particlesJS('hero', particleConfig)
    
  },
  computed: {
    browserPreviewSlide () {
      return `transform: translateX(calc(-100% + 18vw - ${this.offset > 200 ? 200 : this.offset * 2}px)); opacity: ${this.offset > 200 ? 0 : 1 - (this.offset / 200)};`
    },
    editorPreviewSlide () {
      return `transform: translateX(calc(100% - 18vw + ${this.offset > 200 ? 200 : this.offset * 2}px)); opacity: ${this.offset > 200 ? 0 : 1 - (this.offset /2100)};`
    },
    heroOpacity () {
      return `opacity: ${this.offset > 250 ? 0 : 1 - (this.offset / 250)};`
    }
  },
  methods: {
    setParallax() {
      // THIS IS SHIT
      this.thingy = (window.innerWidth > 600) || ( (this.$refs['text'].getBoundingClientRect().y < window.innerHeight) && (this.$refs['text'].getBoundingClientRect().y > (window.innerHeight - this.$refs['text'].getBoundingClientRect().height)) )
      this.offset = window.scrollY
    },
    goToBuy() {
      document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })
    },
    goToInfo() {
      document.getElementById('info').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang='sass'>
// @import url('https://fonts.googleapis.com/css?family=Chivo:900&display=swap')
// @import url('https://fonts.googleapis.com/css?family=Archivo+Black|Teko:700&display=swap')
// @font-face
//   font-family: CriteriaCF-ExtraBold
//   src: url("https://daily-fire.com/_nuxt/fonts/018872f.eot?#iefix") format("embedded-opentype"), url("https://daily-fire.com/_nuxt/fonts/d873106.woff2") format("woff2"), url("https://daily-fire.com/_nuxt/fonts/624b172.woff") format("woff"), url("https://daily-fire.com/_nuxt/fonts/d7030bd.ttf") format("truetype"), url("https://daily-fire.com/_nuxt/img/04bebb0.svg#youworkforthem") format("svg")
//   font-style: normal
//   font-weight: 700
//   font-display: swap
$screen-sm-min: 576px
@mixin sm
   @media (max-width: #{$screen-sm-min})
       @content

.section
  @apply relative flex flex-col items-center justify-center p-6 min-h-screen text-center overflow-visible overflow-x-hidden

  &__body
    @apply flex flex-col items-center justify-center max-w-full p-2
    width: 1080px

    &--left
      @apply items-start text-left

  &__title
    @apply text-5xl leading-none font-bold m-1 max-w-3xl
    font-family: 'CriteriaCF-ExtraBold', 'SF Pro Display', 'Arial'

    @include sm
      @apply text-4xl

  &__sub-title
    @apply text-2xl leading-tight font-semibold text-gray-400 max-w-4xl m-2
    color: #a2a8b1;

    @include sm
      @apply text-xl

.footer
  @apply bg-black flex flex-col items-center justify-center h-32

  &__title
    @apply text-lg font-bold m-2 h-5 opacity-75

  &__link-list
    @apply flex flex-row flex-wrap justify-center my-6 max-w-6xl

  &__link
    @apply font-bold my-2 opacity-50 w-24 text-center

    &:hover
      @apply opacity-100


.section-hero
  @apply pt-16

  &__sub-title
    @apply max-w-2xl
  
  &__button
    @apply py-2 px-8 m-1 text-gray-100 text-2xl font-bold
    border-radius: 5px
    background-image: linear-gradient(149deg, #588BFFDD 0%, #B745F2DD 98%)
    transition: transform .3s ease-out

    &:hover
      transform: scale(1.05)

    &--sec
      background-image: none
      // box-shadow: inset 0 0 0 3px #cbd5e0 // inset border

  &__sub-text
    @apply text-sm font-light text-gray-400 m-1

  &__browser-img
    @apply absolute object-contain
    height: 80%
    top: 10%
    left: 0
    transform: translateX(calc(-100% + 18vw))

    @media (max-width: 920px)
      display: none

  &__editor-img
    @apply absolute object-contain
    height: 80%
    top: 10%
    right: 0

    @media (max-width: 920px)
      display: none

.info-section
  &__backdrop
    @apply p-12 rounded-lg
    background-color: #1d2027;
    min-height: 80vh;
    justify-content: flex-start;

  &__list
    @apply text-left max-w-lg pl-16

    // hotfix for mobile
    @media (max-width: 920px)
      margin-top: 0
      padding-left: 0

  &__list-item
    @apply my-6 font-medium text-gray-400
  
    &__title
      @apply inline-block text-xl font-bold text-gray-100 my-3 leading-none

      &::before
        @apply inline-block w-3 h-3 mx-4 rounded-full bg-gray-500
        content: ''
        margin-left: calc(-0.75rem - 1rem); // bring the bullet in front of the title (w - mr)
    
    &:first-child
      @apply mt-0
  
    &:nth-child(1) .info-section__list-item__title::before
      background-color: #70DABC
    
    &:nth-child(2) .info-section__list-item__title::before
      background-color: #F74C71

    &:nth-child(3) .info-section__list-item__title::before
      background-color: #FFA75F

    &:nth-child(4) .info-section__list-item__title::before
      background-color: #5FE4FF
  
  &__demo-container
    @apply m-6
    height: 100%
    margin-left: -40vw;

    @media (max-width: 920px)
      display: none

  &__demo-img
    max-width: 70vw

.section-text

  &__paragraphs
    @apply my-4

  &__editor-img
    @apply absolute object-contain
    top: 10%
    right: -20%
    min-width: 620px
    // transform: rotateX(50deg) rotate(-10deg) translateX(100px)

    @media (max-width: 920px)
      z-index: -10
      opacity: .2

.info-paragraph
  @apply flex flex-row text-left my-4 max-w-2xl
  margin: .5rem -0.5rem

  @include sm
    @apply flex-col

  &__icon
    @apply h-16 w-16 m-4 flex-shrink-0

  &__title
    @apply m-4 text-2xl font-bold leading-tight

  &__body
    @apply m-4 text-base font-medium leading-normal text-gray-500

.compatibility-container
  @apply flex flex-row items-center justify-center flex-wrap m-4 max-w-4xl

  @include sm
    @apply m-0 my-4

.compatibility-indicator
  @apply relative h-24 w-24 m-4 flex flex-col items-center justify-center bg-gray-800 opacity-75 overflow-hidden
  border-radius: 5px
  transition: opacity ease-out .3s

  @include sm
    @apply h-20 w-20 m-2

  &:hover
    @apply opacity-100

  &--success
    @apply text-green-600

  &--info
    @apply text-blue-600
  
  &--warning
    @apply text-yellow-600 opacity-50

  &--error
    @apply text-red-600 opacity-25
  
  &__title
    @apply text-xs leading-tight text-gray-300 font-semibold h-0 m-2

  &__icon
    height: 50%
    width: 50%

  &__status
    @apply absolute bottom-0 right-0 h-4 w-4

.section-cta
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,1) 70%);
  min-height: unset

.email-form
  @apply flex flex-row justify-center m-4 whitespace-no-wrap max-w-full

  & > *:not(:first-child)
    @apply mt-2 ml-4

  &__input
    @apply py-2 px-6 mt-2 bg-white text-gray-800 font-bold text-xl 
    border-radius: 5px
    min-width: 120px

  &__button
    @apply py-2 px-6 bg-black text-gray-100 font-bold text-xl flex-shrink-0
    border-radius: 5px;
    transition: transform .3s ease-out
    min-width: 4rem
    border: 2px solid white

    &:hover, &:focus
      transform: scale(1.05)
      //box-shadow: inset 0 0 0 2px white;

    &:active
      @apply bg-white text-gray-900

.wip-alert-container
  @apply fixed
  bottom: 24px;
  left: calc(50%)
  transform: translateX(-50%)
  animation: 1s ease-in-out 0s infinite alternate bounce

  input
    @apply appearance-none

.particles-js-canvas-el
  position: absolute
  top: 0
  z-index: -1
</style>
