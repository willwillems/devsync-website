<template lang="pug">
  section.section.section--full.section-hero#hero
    .section__body
      h1.section__title.section-hero__title#hero-title Stop finicking with your CSS. Perfect your design <i>visually</i>.
      h2.section__sub-title.section-hero__sub-title Design quicker. Devsync uses the browser's debugger to find your CSS and edit it in your editor. Live.
      .m-2
        button.section-hero__button( @click="$emit('toggleDemo')" ) {{ demoActive ? 'Deactivate Demo' : 'Activate Demo' }}
        button.section-hero__button.section-hero__button--sec( @click="goToInfo" ) Read more
      p.section-hero__sub-text 30-Day Money-Back Guarantee
    img.section-hero__browser-img( src="img/browser-preview.webp" alt="Browser preview" )
    img.section-hero__editor-img( src="img/editor-preview.webp" alt="Editor preview" )
</template>

<script>

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
  props: {
    demoActive: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    require('particles.js')
    window.particlesJS('hero', particleConfig)
  },
  methods: {
    goToBuy() {
      document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })
    },
    goToInfo() {
      document.getElementById('info').scrollIntoView({ behavior: 'smooth' })
      if (this.demoActive) this.$emit('toggleDemo')
    }
  }
}
</script>

<style lang="sass" scoped>
.section-hero

  &__title
    @apply max-w-4xl

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
    z-index: -1

    @media (max-width: 920px)
      display: none

  &__editor-img
    @apply absolute object-contain
    height: 80%
    top: 10%
    right: 0
    transform: translateX(calc(100% - 18vw))
    z-index: -1

    @media (max-width: 920px)
      display: none

</style>