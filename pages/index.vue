<template lang="pug">
  main
    section.section.section-hero#hero( :style="heroOpacity" )
      .section__body
        h1.section-hero__title Visual design tool that live-sync's CSS edits with your editor.
        h2.section-hero__body Design quicker. Devsync uses the browser's debugger to find your CSS and edit it in real time.
        button.section-hero__button( @click="goToBuy" ) Try it out!
        p.section-hero__sub-text 30-Day Money-Back Guarantee
      img.section-hero__browser-img( src="img/browser-preview.png" alt="Browser preview" :style="browserPreviewSlide" )
      img.section-hero__editor-img( src="img/editor-preview.png" alt="Editor preview" :style="editorPreviewSlide" )
      // .section-hero__editor-img( alt="Editor preview" :style="'background-image: url(\"img/editor-frame-square.png\");' + editorPreviewSlide" ) 
        pre(style="margin-left: 25%; margin-top: 18%;")
          code Hey man 
    section.section.info-section#info
      .section__body.info-section__backdrop
        h1.section__title Speed up your workflow
        h2.section__sub-title Edit processed CSS without switching context and save time.
        .flex.flex-row
          .info-section__demo-container
            img.info-section__demo-img( src="img/browser-demo.webp" alt="Browser demo")
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
    // section.section
      .section__body.section__body--left
        h1.section__title We support lie a lot of things
        h2.section__sub-title Oh so manny things like you dont even wanna know ma man!
    section.section.section--left.section-text#text
      .section__body.section__body--left
        h1.section__title Design & develop at the same time
        h2.section__sub-title Visually edit your design while automatically changing your code.
        .section-text__paragraphs
          .info-paragraph
            .info-paragraph__icon
              AppAlignLogo
            div
              .info-paragraph__title Stop context switching
              .info-paragraph__body Everytime you switch from browser to editor to adjust your design you lose time. Devsync enables you to directly apply adjustments in both places.
          .info-paragraph
            .info-paragraph__icon
              AppSizingLogo
            div
              .info-paragraph__title Design with your eyes
              .info-paragraph__body CSS determines both technical layout and visual aesthetic. Skip the step of predicting what your CSS will look like and the cumbersome process of adjusting from there. Directly design what looks good and save time.
          .info-paragraph
            .info-paragraph__icon
              AppPositionLogo
            div
              .info-paragraph__title VS Code integration, native & clean. 
              .info-paragraph__body Devsync integrates with Chrome, VS Code and soon with other editors. It is compatible with Webpack, Vue, React, SCSS, SASS.
      img.section-text__editor-img( src="img/editor-preview.png" alt="Editor preview" )

    section.section.section-cta#cta
      //- .section__body
      //-   h1.section__title Pay once and use on up to three devices.
      //-   h2.section__sub-title Get free updates for 1 year
      .cta-card( ref='cta' )
        h1.cta-card__title Get your DevSync licence <del>now</del> soon.
        p.cta-card__body  No hassle, 30 money back guarantee.
        form.cta-card__form( action="https://nickolasboyer.us12.list-manage.com/subscribe/post?u=55a5fbebab9bb447102de7229&amp;id=42d8840ff4" method="post" )
          input.cta-card__input( placeholder="email" type="email" value="" name="EMAIL" id="mce-EMAIL" required )
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          | <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_55a5fbebab9bb447102de7229_42d8840ff4" tabindex="-1" value=""></div>
          input.cta-card__button( type="submit" value="Reserve!" name="subscribe" id="mc-embedded-subscribe" )
    footer.footer
      img.footer__title( src="/img/logo-mono.svg" )
      ul.footer__link-list
        li.footer__link
          a( href="mailto:will@devsync.co" ) Contact
        li.footer__link
          a( href="/twitter" ) Twitter
        li.footer__link
          a( href="/faq" ) FAQ
        li.footer__link
          a( href="/tuts" ) Tutorials
    .wip-alert 🚧 This webpage is under active development
</template>

<script>
import AppAlignLogo from '../components/AppAlignLogo.vue'
import AppSizingLogo from '../components/AppSizingLogo.vue'
import AppPositionLogo from '../components/AppPositionLogo.vue'

export default {
  components: {
    AppAlignLogo,
    AppSizingLogo,
    AppPositionLogo
  },
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
  @apply relative flex flex-col items-center justify-center min-h-screen text-center overflow-visible overflow-x-hidden

  &__body
    @apply flex flex-col items-center justify-center max-w-full p-2
    width: 1080px

    &--left
      @apply items-start

  &__title
    @apply text-5xl leading-none font-bold m-1

  &__sub-title
    @apply text-2xl font-semibold text-gray-400 max-w-3xl m-1

.footer
  @apply bg-black flex flex-col items-center justify-center h-48

  &__title
    @apply text-lg font-bold m-2 h-5

  &__link-list
    @apply flex flex-row justify-center

  &__link
    @apply font-bold m-8 opacity-50

    &:hover
      @apply opacity-100


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
    @apply text-left max-w-lg mt-8 pl-16

    // hotfix for mobile
    @media (max-width: 920px)
      margin-top: 0
      padding-left: 0

  &__list-item
    @apply my-8 text-gray-400
  
    &__title
      @apply inline-block text-xl font-bold text-gray-100 my-3 leading-none

      &::before
        @apply inline-block w-3 h-3 mx-4 rounded-full bg-gray-500
        content: ''
        margin-left: calc(-0.75rem - 1rem); // bring the bullet in front of the title (w - mr)
  
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
  @apply flex flex-row text-left my-2 max-w-2xl

  &__icon
    @apply m-3 ml-0
    width: 60px

  &__title
    @apply m-3 mb-0 text-2xl font-bold leading-tight

  &__body
    @apply m-3 mt-2 text-base leading-snug text-gray-500

    

.section-cta
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,1) 70%);

  @media (max-width: 920px)
    min-height: unset

.cta-card
  @apply flex flex-col justify-between items-start py-12 px-16 rounded-lg text-left
  width: 1080px
  max-width: 100%
  background-image: url(/img/discount.svg), linear-gradient(176deg, #00000044 0%, #FAFAFA66 100%, #FFFFFF66 100%), linear-gradient(149deg, #588BFFDD 0%, #B745F2DD 98%)
  background-position: bottom 0rem right 0rem, center, center
  background-repeat: no-repeat
  background-size: 40%, 100%, 100%
  // box-shadow: 0 0 32px 0px #dbceb645
  margin: 32px
  margin-bottom: 0px

  &__title
    @apply text-5xl leading-none font-extrabold max-w-2xl
    
    del
      text-decoration-color: #e33c3c

  &__body
    @apply my-2 text-lg text-gray-100 font-semibold max-w-2xl

  &__form
    @apply flex flex-row flex-wrap justify-center whitespace-no-wrap

  &__input
    @apply py-3 px-8 mt-2 bg-white text-gray-800 font-bold text-xl
    border-radius: 5px

  &__button
    @apply py-3 px-8 mt-2 mx-4 bg-black text-gray-100 font-bold text-xl
    border-radius: 5px;
    transition: transform .3s ease-out

    &:hover, &:focus
      transform: scale(1.05)
      //box-shadow: inset 0 0 0 2px white;

    &:active
      @apply bg-white text-gray-900

.wip-alert
  @apply fixed py-2 px-4 bg-red-600 font-bold text-sm rounded-lg
  bottom: 24px;
  left: calc(50%)
  transform: translateX(-50%)
  animation: 1s ease-in-out 0s infinite alternate bounce
  box-sizing: border-box

  &:hover
    @apply bg-red-700

@keyframes bounce
  from
    transform: translateX(-50%) translateY(-4px)

  to
    transform: translateX(-50%) translateY(0px)
</style>
