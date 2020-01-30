<template lang="pug">
  section.section
    .section__content.section__content--left.my-16
      .section__body.section__body--left
        AppSizingLogo.feature-logo
        h1.section__title Select the element you want to edit.
        h2.section__text Devsync works just like the visual editors you're used to.
      .section__display
        AppSelectAnimation
    .section__content.section__content--right.my-16
      .section__body.section__body--right
        AppAlignLogo.feature-logo
        h1.section__title Select the element you want to edit.
        h2.section__text Devsync works just like the visual editors you're used to.
      .section__display
        AppEditAnimation
    .section__content.section__content--left.my-16
      .section__body.section__body--left
        AppPositionLogo.feature-logo
        h1.section__title Select the element you want to edit.
        h2.section__text Devsync works just like the visual editors you're used to.
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
</style>