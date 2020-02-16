<template lang="pug">
  .demo-walktrough-window
    div
      .demo-walktrough-window__text {{activeStepText}}
      .demo-walktrough-window__button-container
        button.demo-walktrough-window__skip-button( @click="previousStep" )
          <svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Artboard" transform="translate(-4.000000, -4.000000)">
                      <g id="arrow_back-24px">
                          <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                          <path d="M19,11 L7.83,11 L12.71,6.12 C13.1,5.73 13.1,5.09 12.71,4.7 C12.32,4.31 11.69,4.31 11.3,4.7 L4.71,11.29 C4.32,11.68 4.32,12.31 4.71,12.7 L11.3,19.29 C11.69,19.68 12.32,19.68 12.71,19.29 C13.1,18.9 13.1,18.27 12.71,17.88 L7.83,13 L19,13 C19.55,13 20,12.55 20,12 C20,11.45 19.55,11 19,11 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
                      </g>
                  </g>
              </g>
          </svg>
        button.demo-walktrough-window__skip-button( @click="nextStep" )
          <svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Artboard" transform="translate(-4.000000, -4.000000)">
                      <g id="arrow_back-24px">
                          <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                          <path d="M19,11 L7.83,11 L12.71,6.12 C13.1,5.73 13.1,5.09 12.71,4.7 C12.32,4.31 11.69,4.31 11.3,4.7 L4.71,11.29 C4.32,11.68 4.32,12.31 4.71,12.7 L11.3,19.29 C11.69,19.68 12.32,19.68 12.71,19.29 C13.1,18.9 13.1,18.27 12.71,17.88 L7.83,13 L19,13 C19.55,13 20,12.55 20,12 C20,11.45 19.55,11 19,11 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero" transform="translate(12.208750, 11.995000) scale(-1, 1) translate(-12.208750, -11.995000) "></path>
                      </g>
                  </g>
              </g>
          </svg>
      button.demo-walktrough-window__close-button( @click="closePopup" ) close
</template>

<script>
const steps = [
  'Hi! 👋 Welcome to our demo. We\'ve tried to port Devsync to the browser but some things might not work perfectly.',
  'Devsync syncs your edits with your code editor. To simulate that we\'ve created a little editor in the left corner of your screen.',
  'To keep it simple and limit the complexity of the demo we\'ve only ported our typography section. Read further to get started!',
  'To start editing CSS select an element on the page by clicking it. We\'ve already preselected the title of this page for you.',
  'To modify or create a property just slect the relevant input and start typing. The colored border indicates an active input.',
  'Finally to delete a property hold CMD/CTRL and click the relevant input.'
]
export default {
  data () {
    return {
      activeStepIndex: 0,
      steps
    }
  },
  computed: {
    activeStepText () {
      return this.steps[this.activeStepIndex]
    }
  },
  methods: {
    nextStep () {
      this.activeStepIndex = Math.min(this.activeStepIndex + 1, this.steps.length - 1)
    },
    previousStep () {
      this.activeStepIndex = Math.max(this.activeStepIndex - 1, 0)
    },
    closePopup () {
      this.$emit('close')
      alert('close')
    }
  }
}
</script>

<style lang="sass">
.demo-walktrough-window
  @apply fixed p-4 pb-8 font-bold rounded-lg z-10 shadow-lg max-w-xs
  top: 2rem
  right: 1rem
  border: solid #3b3b3b 2px;
  background-color: #2a2a2a;
  color: #e2e2e2;

  &__button-container
    @apply absolute
    left: .5rem
    bottom: .25rem

  &__skip-button
    @apply appearance-none m-2 h-3 w-3 opacity-50

    &:hover
      @apply opacity-100

  &__close-button
    @apply absolute appearance-none m-2 opacity-50 leading-none
    right: .5rem
    bottom: .25rem

    &:hover
      @apply opacity-100

</style>