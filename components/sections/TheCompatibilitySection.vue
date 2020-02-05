<template lang="pug">
  section.section
    .section__body
      h1.section__title Verified Compatibility
      h2.section__sub-title.m-2 Devsync works with every bundeler that correctly generates sourcemaps. Not all do by default. We've tested some populair setups for compatibility.
      .compatibility-container
        a.compatibility-indicator(
          v-for="indicator in compatibility"
          :class=`{
            'compatibility-indicator--success': (indicator.status === 'success'),
            'compatibility-indicator--info':    (indicator.status === 'info'),
            'compatibility-indicator--warning': (indicator.status === 'warning'),
            'compatibility-indicator--error':   (indicator.status === 'error')
          }`
          :href="indicator.link"
        )
          img.compatibility-indicator__icon( :src="indicator.icon" )
          .compatibility-indicator__title {{ indicator.title }}
          svg.compatibility-indicator__status( viewBox="0 0 10 10" )
            polygon( points="0,10 10,10 10,0" fill="currentColor" )
    //- .flex.flex-row.items-center.justify-center.flex-wrap.m-4.max-w-4xl
      img( src="img/icons/mac.svg" ).platform-logo.h-10.w-10.m-6.my-2
      img( src="img/icons/windows.svg" ).platform-logo.h-10.w-10.m-6.my-2
      img( src="img/icons/linux.svg" ).platform-logo.h-10.w-10.m-6.my-2
</template>

<script>
const compatibility = [
  {
    title: 'HTML',
    icon: 'img/icons/html.svg',
    status: 'success',
  },
  {
    title: 'Webpack',
    icon: 'img/icons/webpack.svg',
    status: 'success',
    link: 'https://docs.devsync.co/compatibility/webpack.html'
  },
  {
    title: 'Rollup',
    icon: 'img/icons/rollup.svg',
    status: 'info',
    link: 'https://docs.devsync.co/compatibility/rollup.html'
  },
  {
    title: 'Vue JS',
    icon: 'img/icons/vue.svg',
    status: 'success',
    link: 'https://docs.devsync.co/compatibility/vue.html'
  },
  {
    title: 'Nuxt',
    icon: 'img/icons/nuxt.svg',
    status: 'success',
    link: 'https://docs.devsync.co/compatibility/vue.html#nuxt'
  },
  {
    title: 'React',
    icon: 'img/icons/react.svg',
    status: 'warning',
    link: 'https://docs.devsync.co/compatibility/react.html'
  },
  {
    title: 'Next',
    icon: 'img/icons/next.svg',
    status: 'warning',
    link: 'https://docs.devsync.co/compatibility/react.html#next'
  },
  {
    title: 'Gatsby',
    icon: 'img/icons/gatsby.svg',
    status: 'info',
    link: 'https://docs.devsync.co/compatibility/react.html#gatsby'
  },
  {
    title: 'Angular',
    icon: 'img/icons/angular.svg',
    status: 'warning',
    link: 'https://docs.devsync.co/compatibility/angular.html'
  },
  {
    title: 'Ember',
    icon: 'img/icons/ember.svg',
    status: 'error',
    link: 'https://docs.devsync.co/compatibility/ember.html'
  },
  {
    title: 'Svelte',
    icon: 'img/icons/svelte.svg',
    status: 'error',
    link: 'https://docs.devsync.co/compatibility/svelte.html'
  }
]

export default {
  data() {
    return {
      compatibility
    }
  }
}
</script>

<style lang="sass" scoped>
$screen-sm-min: 576px
@mixin sm
   @media (max-width: #{$screen-sm-min})
       @content

.compatibility-container
  @apply flex flex-row items-center justify-center flex-wrap m-4 max-w-4xl

  @include sm
    @apply m-0 my-4

.compatibility-indicator
  @apply relative h-24 w-24 m-4 flex flex-col items-center justify-center bg-gray-800 opacity-75 overflow-hidden
  border-radius: 5px
  transition: opacity ease-out .3s

  @include sm
    @apply h-20 w-20 m-2

  &:hover
    @apply opacity-100

  &--success
    @apply text-green-600

  &--info
    @apply text-blue-600
  
  &--warning
    @apply text-yellow-600 opacity-50

  &--error
    @apply text-red-600 opacity-25
  
  &__title
    @apply text-xs leading-tight text-gray-300 font-semibold h-0 m-2

  &__icon
    height: 50%
    width: 50%

  &__status
    @apply absolute bottom-0 right-0 h-4 w-4

</style>