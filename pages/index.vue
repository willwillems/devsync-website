<template lang="pug">
  main
    section.section.section-hero( :style="heroOpacity" )
      h1.section-hero__title Speed up development 10x
      h2.section-hero__body Modern in-browser visual editor that live-syncs with your IDE. Speed up your development, try it out!
      button.section-hero__button( @click="goToBuy" ) Download $69
      p.section-hero__sub-text 30-Day Money-Back Guarantee
      img.section-hero__browser-img( src="img/browser-preview.png" alt="Browser preview." :style="browserPreviewSlide" )
      img.section-hero__editor-img( src="img/editor-preview.png" alt="Editor preview." :style="editorPreviewSlide" )
    section.section.section-cta( style="justify-content: flex-start; height: calc(50vh + 64px);" )
      .cta-card( ref='cta' )
        div
          h1.cta-card__title Get your DevSync licence <del>now</del> soon.
          p.cta-card__body  No hassle, 30 money back guarantee.
        form( action="https://nickolasboyer.us12.list-manage.com/subscribe/post?u=55a5fbebab9bb447102de7229&amp;id=42d8840ff4" method="post" )
          input.cta-card__input( placeholder="email" type="email" value="" name="EMAIL" id="mce-EMAIL" required )
          // button.cta-card__button( type="submit" ) Get Notified!
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          | <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_55a5fbebab9bb447102de7229_42d8840ff4" tabindex="-1" value=""></div>
          input.cta-card__button( type="submit" value="Get Notified!" name="subscribe" id="mc-embedded-subscribe" )

</template>

<script>
export default {
  data() {
    return {
      offset: 0
    }
  },
  mounted () {
    this.setParallax()
    const eventHandler = () => requestAnimationFrame(this.setParallax)
    window.addEventListener('resize', eventHandler)
    window.addEventListener('scroll', eventHandler)
    // Remove the scroll hanlder when the
    // component is destroyed.
    this.$on(`hook:destroyed`, () => {
      window.removeEventListener('resize', eventHandler)
      window.removeEventListener('scroll', eventHandler)
    })
  },
  computed: {
    browserPreviewSlide () {
      return `transform: translateX(calc(-100% + 18vw - ${this.offset > 200 ? 200 : this.offset * 2}px)); opacity: ${this.offset > 100 ? 0 : 1 - (this.offset / 100)};`
    },
    editorPreviewSlide () {
      return `transform: translateX(calc(100% - 18vw + ${this.offset > 200 ? 200 : this.offset * 2}px)); opacity: ${this.offset > 100 ? 0 : 1 - (this.offset / 100)};`
    },
    heroOpacity () {
      return `opacity: ${this.offset > 100 ? 0 : 1 - (this.offset / 100)};`
    }
  },
  methods: {
    setParallax() {
      this.offset = window.scrollY
    },
    goToBuy() {
      this.$refs['cta'].scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang='sass'>
.section
  @apply relative flex flex-col items-center justify-center h-screen text-center overflow-x-hidden

.section-hero
  // background-image: radial-gradient(50% 17% at bottom, rgba(23,2,36,0.43) 0%, rgba(0,0,0,0.00) 83%)

  &__title
    @apply text-5xl leading-none font-bold m-1

  &__body
    @apply text-xl text-gray-100 max-w-2xl m-1
  
  &__button
    @apply py-2 px-6 m-3 rounded-lg text-xl font-bold
    background-image: linear-gradient(135deg, #FF7777 0%, #CB42FF 100%);

  &__sub-text
    @apply text-sm font-light text-gray-400

  &__browser-img
    @apply absolute object-contain
    height: 80%;
    top: 10%;
    left: 0;
    transform: translateX(calc(-100% + 18vw))

  &__editor-img
    @apply absolute object-contain
    height: 80%;
    top: 10%;
    right: 0;
    transform: translateX(calc(100% - 18vw))

.section-cta
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,1) 70%);

.cta-card
  @apply flex flex-col justify-between py-6 px-10 rounded-lg text-left
  width: 48rem
  max-width: 100%
  min-height: 12rem
  background-image: linear-gradient(176deg, #00000066 0%, #FAFAFA66 100%, #FFFFFF66 100%), linear-gradient(149deg, #588BFFDD 0%, #B745F2DD 98%)
  box-shadow: 0 0 32px 0px #dbceb645
  margin: 32px

  &__title
    @apply text-4xl leading-none font-extrabold max-w-md
    
    del
      text-decoration-color: #e33c3c

  &__body
    @apply my-2 text-base text-gray-100 max-w-2xl

  &__input
    @apply py-2 px-4 bg-white text-gray-800 font-bold
    border-radius: 5px;

  &__button
    @apply py-2 px-4 m-2 bg-black text-gray-100 font-bold
    border-radius: 5px;

    &:hover, &:focus
      box-shadow: inset 0 0 0 2px white;

    &:active
      @apply bg-white text-gray-900
</style>
