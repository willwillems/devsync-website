<template lang="pug">
  main
    TheHeroSection( @toggleDemo="toggleDemo" :demoActive="demoActive")
    ThePanelSection
    TheFeatureSection
    // TheBulletSection
    TheCompatibilitySection
    TheCTASection
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
    .demo-overlay( v-if="overlayPosition" :style="overlayStyle" )
    transition( name="slide" )
      .demo( v-if="demoActive" )
        img.demo__mock( src="img/demo-mock-top.png" )
        TheFontStyleSection( @style="setHeroStyle" )
        img.demo__mock( src="img/demo-mock-bottom.png" )
    transition( name="slide-up" )
      TheCodeEditor.demo-editor( v-if="demoActive" v-model="styleVal" )
</template>

<script>
import TheCtaCard from '../components/TheCtaCard.vue'

import TheHeroSection from '../components/sections/TheHeroSection.vue'
import ThePanelSection from '../components/sections/ThePanelSection.vue'
import TheFeatureSection from '../components/sections/TheFeatureSection.vue'
import TheBulletSection from '../components/sections/TheBulletSection.vue'
import TheCompatibilitySection from '../components/sections/TheCompatibilitySection.vue'
import TheCTASection from '../components/sections/TheCTASection.vue'

import TheFontStyleSection from '../components/TheFontStyleSection.vue'
import TheCodeEditor from '../components/TheCodeEditor.vue'

export default {
  components: {
    TheCtaCard,
    TheHeroSection,
    ThePanelSection,
    TheFeatureSection,
    TheBulletSection,
    TheCompatibilitySection,
    TheCTASection,
    TheFontStyleSection,
    TheCodeEditor,
  },
  data() {
    return {
      offset: 0,
      demoActive: false,
      styleVal: '',
      overlayPosition: null,
    }
  },
  computed: {
    overlayStyle () {
      return `pointer-events: none; background-color: #4422FF22; border: 2px solid blue; position: absolute; top: ${this.overlayPosition.top}px; left: ${this.overlayPosition.left}px; width: ${this.overlayPosition.width}px; height: ${this.overlayPosition.height}px;`
    }
  },
  methods: {
    setHeroStyle (val) {
      this.styleVal = '/* Live example */ \n' + val +'\n'
      document.getElementById('hero-title').style = val
    },
    toggleDemo () {
      return (this.demoActive ? this.deactivateDemo : this.activateDemo)()
    },
    activateDemo () {
      if (window.innerWidth < 800) return alert('Please try out the demo on a larger screen.')
      this.demoActive = true
      this.$el.style = 'width: calc(100% - 340px);'

      const scrollHandler = e => {
        if (window.scrollY > window.innerHeight) {
          window.removeEventListener('scroll', scrollHandler)
          this.deactivateDemo()
        }
      }
      window.addEventListener('scroll', scrollHandler)

      document
        .getElementById('hero')
        .addEventListener('mousemove', this.handleOverlay)
      document
        .getElementById('hero')
        .addEventListener('mouseleave', this.hideOverlay)
    },
    deactivateDemo () {
      this.demoActive = false
      this.$el.style = ''

      document
          .getElementById('hero')
          .removeEventListener('mousemove', this.handleOverlay)
        document
          .getElementById('hero')
          .removeEventListener('mouseleave', this.hideOverlay)
        this.hideOverlay()
    },
    handleOverlay (ev) {    
      const bound = ev.srcElement.getBoundingClientRect()
      const { top, left, width, height } = bound
      console.log({ top, left, width, height })
      this.overlayPosition = { top, left, width, height }
    },
    hideOverlay () {
      this.overlayPosition = null
    }
  }
}
</script>

<style lang='sass'>
@import url('https://fonts.googleapis.com/css?family=Chivo:900&display=swap')
@import url('https://fonts.googleapis.com/css?family=Archivo+Black|Teko:700&display=swap')
@font-face
  font-family: CriteriaCF-ExtraBold
  src: url("https://daily-fire.com/_nuxt/fonts/018872f.eot?#iefix") format("embedded-opentype"), url("https://daily-fire.com/_nuxt/fonts/d873106.woff2") format("woff2"), url("https://daily-fire.com/_nuxt/fonts/624b172.woff") format("woff"), url("https://daily-fire.com/_nuxt/fonts/d7030bd.ttf") format("truetype"), url("https://daily-fire.com/_nuxt/img/04bebb0.svg#youworkforthem") format("svg")
  font-style: normal
  font-weight: 700
  font-display: swap
$screen-sm-min: 576px
@mixin sm
   @media (max-width: #{$screen-sm-min})
       @content

.section
  @apply relative flex flex-col items-center justify-center p-6 py-12 text-center overflow-visible overflow-x-hidden

  &--full
    @apply min-h-screen

  &__content
    @apply flex flex-col max-w-full justify-center items-center
    width: 1080px

    &--left
      @apply flex-row

    &--right
      @apply flex-row-reverse

    &--left, &--right
      @apply justify-between

      @include sm
        @apply flex-col-reverse

  &__body
    @apply flex flex-col items-center justify-center max-w-full p-2
    width: 1080px

    &--left
      @apply items-start text-left
      width: 32rem

    &--right
      @apply items-end text-right
      width: 32rem

  &__title
    @apply text-5xl font-bold m-1 max-w-3xl
    line-height: 1em // Tailwind doesn't provide unit, is annoying for demo
    font-family: 'CriteriaCF-ExtraBold', 'SF Pro Display', 'Arial' sans-serif

    @include sm
      @apply text-4xl

  &__sub-title
    @apply text-2xl leading-tight font-semibold text-gray-400 max-w-4xl m-2
    color: #a2a8b1;

    @include sm
      @apply text-xl

  &__text
    @apply text-xl leading-tight font-medium text-gray-400 max-w-4xl m-2

  &__display
    // transform: translateX(-20%);

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

.particles-js-canvas-el
  position: absolute
  top: 0
  z-index: -1


.demo
  @apply fixed top-0 right-0 bottom-0 h-full overflow-y-scroll overflow-x-hidden z-50
  width: 340px
  border-left: solid 1px #525252

  &__mock
    @apply w-full
    background-color: #2a2a2a
    filter: contrast(.9) blur(.1px)

.demo-editor
  @apply fixed
  bottom: -10px
  left: 50px

.slide-enter-active
  transition: transform .3s ease-in;

.slide-leave-active
  transition: transform .3s ease-out

.slide-enter, .slide-leave-to
  transform: translateX(100%);

.slide-up-enter-active
  transition: transform .3s ease-in;
  transition-delay: .2s;

.slide-up-leave-active
  transition: transform .3s ease-out;

.slide-up-enter, .slide-up-leave-to
  transform: translateY(100%);

</style>
