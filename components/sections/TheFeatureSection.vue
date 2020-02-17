<template lang="pug">
  section.section
    .section__content.section__content--left.my-16
      .section__body.section__body--left
        AppPositionLogo.feature-logo
        h1.section__title Edit visually.
        h2.section__text
          ul.detail-list.detail-list--purple
            li Design faster and be done quicker, apply edits using a familiar interface.
            li Use your eyes to design instead of manually trying out CSS property values.
            li Iterate quickly. A super-low latency connection enables you to quickly try things out and see how they look.
      .section__display
        video(style="max-width: 340px; border-radius: 5px;" autoplay muted loop )
          source( src="/video/demo1.mp4" type="video/mp4" )
        // AppSelectAnimation
    .section__content.section__content--right.my-16
      .section__body.section__body--right
        AppSyncLogo.feature-logo
        h1.section__title Sync with your editor.
        h2.section__text
          ul.detail-list.detail-list--right.detail-list--red
            li Sync edits in real time. No more finicking with devtools and losing your work.
            li Works with CSS, SASS, PostCSS, LESS and all other preprocessors that generate sourcemaps.
            li Stays fully editable. Need an obscure CSS property? Just jump into your editor.
      .section__display
        video(style="max-width: 340px; border-radius: 5px;" autoplay muted loop )
          source( src="/video/demo2.mp4" type="video/mp4" )
    // .section__content.section__content--left.my-16
      .section__body.section__body--left
        AppPositionLogo.feature-logo
        h1.section__title Edit any page.
        h2.section__text
          ul.detail-list.detail-list--blue
            li Wanna mess with a random page? No problem. Devsync can always edit inline styles.
      .section__display
        TheLiveCodeExample
</template>

<script>
import AppSyncLogo from '../../components/AppSyncLogo.vue'
import AppSizingLogo from '../../components/AppSizingLogo.vue'
import AppSelectAnimation from '../../components/AppSelectAnimation.vue'
import AppPositionLogo from '../../components/AppPositionLogo.vue'

import TheLiveCodeExample from '../../components/TheLiveCodeExample.vue'

export default {
  components: {
    AppSyncLogo,
    AppSizingLogo,
    AppSelectAnimation,
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
    // only on desktop
    @media (min-width: 600px)
      @apply ml-0 mr-5

      li::before
        left: unset
        right: -1.25rem

.detail-list--purple li::before
  background-color: #1e9aff

.detail-list--red li::before
  background-color: #ff2c85

.detail-list--blue li::before
  background-color: #ce51ff
</style>