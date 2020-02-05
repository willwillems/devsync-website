<template lang="pug">
  section.section
    .section__content.section__content--left.my-16
      .section__body.section__body--left
        AppSizingLogo.feature-logo
        h1.section__title Edit visually
        h2.section__text
          ul.detail-list.detail-list--purple
            li Devsync aims to works like the visual editors you're used to.
            li Use your eyes to design instead of coding CSS property values.
            li Iterate quickly, try things out on a whim and see how they look.
      .section__display
        AppSelectAnimation
    .section__content.section__content--right.my-16
      .section__body.section__body--right
        AppAlignLogo.feature-logo
        h1.section__title Sync with your editor
        h2.section__text
          ul.detail-list.detail-list--right.detail-list--red
            li Sync edits in real time. No more finicking with devtools and losing your work.
            li Wanna mess with a random page? No problem. Devsync can always edit inline styles.
      .section__display
        AppEditAnimation
    .section__content.section__content--left.my-16
      .section__body.section__body--left
        AppPositionLogo.feature-logo
        h1.section__title Select the element you want to edit.
        h2.section__text
          ul.detail-list.detail-list--blue
            li Want to edit a weird CSS property, you can always just quickly hop into your editor.
            li Keep full controll over your process, wanna run prettier on save? Sure
      .section__display
        TheLiveCodeExample
</template>

<script>
import AppAlignLogo from '../../components/AppAlignLogo.vue'
import AppSizingLogo from '../../components/AppSizingLogo.vue'
import AppSelectAnimation from '../../components/AppSelectAnimation.vue'
import AppEditAnimation from '../../components/AppEditAnimation.vue'
import AppPositionLogo from '../../components/AppPositionLogo.vue'

import TheLiveCodeExample from '../../components/TheLiveCodeExample.vue'

export default {
  components: {
    AppAlignLogo,
    AppSizingLogo,
    AppSelectAnimation,
    AppEditAnimation,
    AppPositionLogo,
    TheLiveCodeExample,
  }
}
</script>

<style lang="sass" scoped>
$screen-sm-min: 576px
@mixin sm
   @media (max-width: #{$screen-sm-min})
       @content

.feature-logo
  @apply my-2

  @include sm
    @apply hidden

.detail-list
  li
    @apply relative ml-5 my-2

    &::before
      @apply absolute h-3 w-3 rounded-full
      content: ""
      top: calc(.5em - .25rem)
      left: -1.5rem
      // border: 2px solid transparent

  &--right
    @apply ml-0 mr-5

    li::before
      left: unset
      right: -1.25rem

.detail-list--purple li::before
  background-color: #ce51ff

.detail-list--red li::before
  background-color: #ff2c85

.detail-list--blue li::before
  background-color: #1e9aff
</style>