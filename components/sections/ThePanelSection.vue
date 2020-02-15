<template lang="pug">
  section.section.info-section#info
    .section__body.info-section__backdrop
      h1.section__title Speed up your workflow
      h2.section__sub-title Edit your CSS visually and save time.
      .info-section__content
        .info-section__demo-container
          video.info-section__demo-img(
            v-for="(video, i) in videos"
            v-show="activeSection === i"
            @click="showFullScreenVideo(i, $event)"
            :alt="video.alt"
            :key="i"
            autoplay
            muted
            loop
          )
            source( :src="video.src" type="video/mp4" )
          img.info-section__demo-img( src="img/demo-coming.png" v-show="activeSection === 3")
        ul.info-section__list
          li.info-section__list-item( @mouseover="selectSection(0)" :class="{'info-section__list-item--active': (activeSection === 0)}" )
            h3.info-section__list-item__title Edit websites visually
            p
              | Design styling that looks good and makes sense. Iterate quickly. Try things out on a whim, see how they look and be able to save your work.
          li.info-section__list-item( @mouseover="selectSection(1)" :class="{'info-section__list-item--active': (activeSection === 1)}" )
            h3.info-section__list-item__title Sync with your editor
            p
              | Your edits are applied live trough a low-latency connection with your editor and injected in the webpage trough the Chrome debugger. All without reloading for maximum speed.
          li.info-section__list-item( @mouseover="selectSection(2)" :class="{'info-section__list-item--active': (activeSection === 2)}" )
            h3.info-section__list-item__title Edit any website
            p
              | Sometimes you just want to play around with a random website. Want to save your result? You can copy your edited CSS with one click.
          li.info-section__list-item( @mouseover="selectSection(3)" :class="{'info-section__list-item--active': (activeSection === 3)}" )
            h3.info-section__list-item__title No unmaintainable mystery CSS
            p
              | The CSS classes you edit are defined in your code. CSS is added in a logical manner but feel free to run something like prettier on save, remember you are still working in your editor!
    video.info-section__video-player( v-if="videoIsFullScreen" :alt="fullScreenVideo.alt" autoplay controls )
      source( :src="fullScreenVideo.src" type="video/mp4" )
</template>

<script>
const videos = [
  { src: 'video/demo-visual-edit.mp4',  alt: 'Vidual editing demo' },
  { src: 'video/demo-editor-sync.mp4',  alt: 'editor sync demo' },
  { src: 'video/demo-edit-any.mp4',     alt: 'Edit any demo' },
]

export default {
  data () {
    return {
      videos,
      activeSection: 0,
      fullScreenVideoIndex: -1,
      activeVideoSource: '',
      timer: null
    }
  },
  mounted () {
    this.selectSection(0, 3000)
  },
  computed: {
    videoIsFullScreen () {
      return this.fullScreenVideoIndex !== -1
    },
    fullScreenVideo () {
      return this.videos[this.fullScreenVideoIndex]
    }
  },
  methods: {
    selectSection (i, t) {
      // set new active section
      this.activeSection = i
      // clear timer if it was running still
      window.clearInterval(this.timer)
      // if delay was given, set new timeout with delay that selects next section
      if (t) this.timer = window.setTimeout(() => this.selectSection((this.activeSection === 3) ? 0 : this.activeSection + 1, t), t)
    },
    showFullScreenVideo (i, ev) {
      sa(`watch_video_${i}`)
      const videoElement = ev.target // save reference to video el
      videoElement.pause() // pause video ele
      this.fullScreenVideoIndex = i // set fullscreen video
      if (i > -1) {
        const unselectSection = (ev) => {
          if (ev.srcElement.tagName === 'VIDEO') return // if its the fs video element ignore
          this.fullScreenVideoIndex = -1 // reset the fs video
          videoElement.play() // ressume playing the demo video
          document.body.removeEventListener('click', unselectSection) // clean up event handler
        }
        document.body.addEventListener('click', unselectSection) // listen to click outside video el
      }
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
    @apply m-6 relative
    width: 30vw

    @media (max-width: 920px)
      display: none

    &::after // fs button
      content: ""
      position: absolute
      bottom: 1rem
      right: 1rem
      height: 3.5rem
      width: 3.5rem 
      border-radius: 50%
      background-color: #1d2027
      background-image: url("/img/fullscreen-icon.svg")
      background-size: 45%
      background-position: center
      background-repeat: no-repeat
      box-shadow: 0 0 20px 10px #1f1f1f7a
      pointer-events: none

  &__demo-img
    position: relative
    float: right
    min-width: 120vh
    height: auto
    border-radius: 4px
    box-shadow: 0 0 1rem 0.5rem #11111130
    background-color: #303030
    cursor: pointer // click to full screen

  &__video-player
    position: fixed;
    max-width: calc(100vw - 4rem)
    max-height: calc(100vh - 4rem)
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
    border-radius: 4px
    z-index: 10
</style>