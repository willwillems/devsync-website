<template lang="pug">
  main
    section.section.section-hero( :style="heroOpacity" )
      h1.section-hero__title Visual design tool that live-sync's CSS edits with your editor.
      h2.section-hero__body Design quicker. Devsync uses the browser's debugger to find your CSS and edit it in real time.
      button.section-hero__button( @click="goToBuy" ) Try it out!
      p.section-hero__sub-text 30-Day Money-Back Guarantee
      img.section-hero__browser-img( src="img/browser-preview.png" alt="Browser preview" :style="browserPreviewSlide" )
      img.section-hero__editor-img( src="img/editor-preview.png" alt="Editor preview" :style="editorPreviewSlide" )
    section.section.info-section
      .info-section__backdrop
        h1.section__title Speed up your workflow
        h2.section__sub-title Edit processed CSS without switching context and save time.
        .flex.flex-row
          .demo-container( style="height: 80vh; margin-left: -50vw;" )
            img.info-section__demo( src="img/browser-demo.webp" alt="Browser demo")
          ul.info-section__list
            li.info-section__list-item
              h3.info-section__list-item__title Live Sync
              p
                |Your edits are applied live and injected in the webpage you’re editing in order to provide a seamless on the fly experience that boosts your productivity.
            li.info-section__list-item
              h3.info-section__list-item__title Edit Visually
              p
                | See what you are doing. Use your editor to explicitly define style behaviour and Devsync to express your design visually.
            li.info-section__list-item
              h3.info-section__list-item__title Optimized for productivity
              p
                |We found out which CSS properties are used most and put them right at your finger tips. One click away.
            li.info-section__list-item
              h3.info-section__list-item__title Delete, add and update
              p
                |You can delete, add and update all available CSS properties from our extention even with the option to save right from the browser.
    section.section.section-cta
      .cta-card( ref='cta' )
        div
          h1.cta-card__title Get your DevSync licence <del>now</del> soon.
          p.cta-card__body  No hassle, 30 money back guarantee.
        form( action="https://nickolasboyer.us12.list-manage.com/subscribe/post?u=55a5fbebab9bb447102de7229&amp;id=42d8840ff4" method="post" )
          input.cta-card__input( placeholder="email" type="email" value="" name="EMAIL" id="mce-EMAIL" required )
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
      this.offset = window.scrollY
    },
    goToBuy() {
      this.$refs['cta'].scrollIntoView({ behavior: 'smooth' })
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

.section
  @apply relative flex flex-col items-center justify-center h-screen text-center overflow-x-hidden

  &__title
    @apply text-5xl leading-none font-bold m-1

  &__sub-title
    @apply text-2xl text-gray-100 max-w-3xl m-1

.footer
  @apply bg-black flex flex-col items-center justify-center h-48

.section-hero
  background-image: radial-gradient(50% 17% at top, rgba(23,2,36,0.43) 0%, rgba(0,0,0,0.0) 100%)

  &__title
    @apply text-5xl leading-none font-bold max-w-3xl m-1
    font-family: 'SF Pro Display';

  &__body
    @apply text-xl text-gray-100 max-w-2xl m-1
  
  &__button
    @apply py-2 px-6 m-3 rounded-lg text-xl font-bold
    background-image: linear-gradient(135deg, #FF7777 0%, #CB42FF 100%);
    transition: transform .3s ease-out

    &:hover
      transform: scale(1.05)

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

.info-section
  &__backdrop
    @apply flex flex-col items-center p-12 rounded-lg
    background-color: #212126;
    width: 1080px;
    min-height: 80vh;
    max-width: calc(100% - 4rem)
    justify-content: flex-start;

  &__list
    @apply text-left max-w-lg mt-8 pl-16

  &__list-item
    @apply my-8 text-sm
  
    &__title
      @apply inline-block text-xl font-bold text-gray-100 my-1 leading-none

      &::before
        @apply inline-block w-3 h-3 mx-2 rounded-full bg-gray-500
        content: ''
        margin-left: calc(-0.75rem - 0.5rem); // bring the bullet in front of the title
  
    &:nth-child(1) .info-section__list-item__title::before
      background-color: #70DABC
    
    &:nth-child(2) .info-section__list-item__title::before
      background-color: #F74C71

    &:nth-child(3) .info-section__list-item__title::before
      background-color: #FFA75F

    &:nth-child(4) .info-section__list-item__title::before
      background-color: #5FE4FF
  
  &__demo
    // @apply absolute left-0
    max-height: 80vh;
    max-width: 100%;

.section-cta
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,1) 70%);

.cta-card
  @apply flex flex-col justify-between py-10 px-12 rounded-lg text-left
  width: 64rem
  max-width: 100%
  background-image: url(/img/discount.svg), linear-gradient(176deg, #00000077 0%, #FAFAFA88 100%, #FFFFFF88 100%), linear-gradient(149deg, #588BFFDD 0%, #B745F2DD 98%)
  background-position: bottom right, center, center
  background-repeat: no-repeat
  box-shadow: 0 0 32px 0px #dbceb645
  margin: 32px

  &__title
    @apply text-5xl leading-none font-extrabold max-w-2xl
    
    del
      text-decoration-color: #e33c3c

  &__body
    @apply mt-2 mb-4 text-lg text-gray-100 font-semibold max-w-2xl

  &__input
    @apply py-2 px-6 bg-white text-gray-800 font-bold text-xl
    border-radius: 5px;

  &__button
    @apply py-2 px-6 mx-4 bg-black text-gray-100 font-bold text-xl
    border-radius: 5px;
    transition: transform .3s ease-out

    &:hover, &:focus
      transform: scale(1.05)
      //box-shadow: inset 0 0 0 2px white;

    &:active
      @apply bg-white text-gray-900
</style>
