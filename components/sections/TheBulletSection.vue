<template lang="pug">
  section.section.section--left.section-text#text( ref="text" )
    .section__body.section__body--left
      h1.section__title Design & develop at the same time
      h2.section__sub-title Visually edit your design while automatically changing your code.
      .section-text__paragraphs
        .info-paragraph
          AppAlignLogo.info-paragraph__icon
          div
            .info-paragraph__title Stop context switching
            .info-paragraph__body Everytime you switch from browser to editor to adjust your design you lose time and focus. Devsync enables you to directly apply adjustments in both places.
        .info-paragraph
          AppSizingLogo.info-paragraph__icon
          div
            .info-paragraph__title Design with your eyes
            .info-paragraph__body CSS determines both technical layout and visual aesthetic. Skip the step of predicting what your CSS will look like and the cumbersome process of adjusting from there. Directly design what looks good and save time.
        .info-paragraph
          AppPositionLogo.info-paragraph__icon
          div
            .info-paragraph__title Iterate quickly  
            .info-paragraph__body Try things out, quickly check out what your ideas look like and either save or discard them.
        .info-paragraph
          AppSettingsLogo.info-paragraph__icon
          div
            .info-paragraph__title Works with your tools
            .info-paragraph__body Devsync integrates with Chrome, VS Code and soon with other editors. It is compatible with most preprocessor, check below for compatibility.
    TheLiveCodeExample
    // - img.section-text__editor-img( src="img/editor-preview.png" alt="Editor preview" )
</template>

<script>
import AppAlignLogo from '../../components/AppAlignLogo.vue'
import AppSizingLogo from '../../components/AppSizingLogo.vue'
import AppPositionLogo from '../../components/AppPositionLogo.vue'
import AppSettingsLogo from '../../components/AppSettingsLogo.vue'

import TheLiveCodeExample from '../../components/TheLiveCodeExample.vue'

export default {
  components: {
    AppAlignLogo,
    AppSizingLogo,
    AppPositionLogo,
    AppSettingsLogo,
    TheLiveCodeExample
  },
}
</script>

<style lang="sass" scoped>
$screen-sm-min: 576px
@mixin sm
   @media (max-width: #{$screen-sm-min})
       @content

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
  @apply flex flex-row text-left my-4 max-w-2xl
  margin: .5rem -0.5rem

  @include sm
    @apply flex-col

  &__icon
    @apply h-16 w-16 m-4 flex-shrink-0

  &__title
    @apply m-4 text-2xl font-bold leading-tight

  &__body
    @apply m-4 text-base font-medium leading-normal text-gray-500
</style>