<template lang="pug">
  section.section.info-section#info
    .section__body.info-section__backdrop
      h1.section__title Speed up your workflow
      h2.section__sub-title Edit your CSS visually and save time.
      .info-section__content
        .info-section__demo-container
          img.info-section__demo-img( v-if="activeSection >= 0" src="img/browser-demo.webp" alt="Browser demo")
          video.info-section__demo-img( v-else-if="activeSection === 1" alt="Browser demo" autoplay muted )
            source( src="img/ROOKHOK%20PREVIEW.mp4" type="video/mp4" )
          video.info-section__demo-img( v-else alt="Browser demo" autoplay muted )
            source( src="img/ROOKHOK%20PREVIEW.mp4" type="video/mp4" )
        ul.info-section__list
          li.info-section__list-item( @mouseover="selectSection(0)" :class="{'info-section__list-item--active': (activeSection === 0)}" )
            h3.info-section__list-item__title Edit websites visually
            p
              | Create CSS that looks good and makes sense. Iterate quickly. Try things out on a whim, see how they look and be able to save your work.
          li.info-section__list-item( @mouseover="selectSection(1)" :class="{'info-section__list-item--active': (activeSection === 1)}" )
            h3.info-section__list-item__title Sync with your editor
            p
              | Your edits are applied live trough a low-latency connection with your editor and injected in the webpage trough the Chrome debugger. All without reloading for maximum speed.
          li.info-section__list-item( @mouseover="selectSection(2)" :class="{'info-section__list-item--active': (activeSection === 2)}" )
            h3.info-section__list-item__title No unmaintainable mystery CSS
            p
              | The CSS classes you edit are defined in your project. CSS is added in a logical manner but feel free to run prettier on save, remember you are still working in your editor!
          li.info-section__list-item( @mouseover="selectSection(3)" :class="{'info-section__list-item--active': (activeSection === 3)}" )
            h3.info-section__list-item__title Edit any website
            p
              | Sometimes you just want to play around with a random website. Once your done either copy your edits with one click or just close Devsync.
</template>

<script>
export default {
  data () {
    return {
      activeSection: 0,
      timer: null
    }
  },
  mounted () {
    this.selectSection(0, 3000)
  },
  methods: {
    selectSection (i, t) {
      // set new active section
      this.activeSection = i
      // clear timer if it was running still
      window.clearInterval(this.timer)
      // if delay was given, set new timeout with delay that selects next section
      if (t) this.timer = window.setTimeout(() => this.selectSection((this.activeSection === 3) ? 0 : this.activeSection + 1, t), t)
    }
  }
}
</script>

<style lang="sass" scoped>
.info-section
  &__backdrop
    @apply p-12 rounded-lg
    background-color: #1d2027;
    min-height: 80vh;
    justify-content: flex-start;

  &__content
    @apply  flex flex-row items-center mt-4

  &__list
    @apply text-left

    // hotfix for mobile
    @media (max-width: 920px)
      width: 100%
      margin-top: 0
      padding-left: 0

  &__list-item
    @apply my-2 font-medium text-gray-400
    padding: .5rem 2rem 1rem 4rem
    border-radius: 10px
    background-color: #80808000
    transition: background-color .3s ease-in
  
    &__title
      @apply inline-block text-xl font-bold text-gray-100 my-3 leading-none

      &::before
        @apply inline-block w-3 h-3 mx-4 rounded-full bg-gray-500
        content: ''
        margin-left: calc(-0.75rem - 1rem); // bring the bullet in front of the title (w - mr)

    &--active
      background-color: #8080801c

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
    width: 30vw

    @media (max-width: 920px)
      display: none

  &__demo-img
    float: right
    min-width: 120vh
    height: auto
</style>