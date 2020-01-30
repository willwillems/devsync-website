<template lang="pug">
  .edit-animation
    .chat-window
      .chat-message
        .chat-message__img
        .chat-message__text
          | Wassup?
      .chat-message
        .chat-message__img
        .chat-message__text
          | Doing anything?
      .chat-message.chat-message--right
        .chat-message__img
        .chat-message__text
          | Idunno wussp there?
      .chat-message
        .chat-message__img
        .chat-message__text
          | Not much, banging some Mall Grab though my KRK's 🔥
      .chat-message.chat-message--right
        .chat-message__img
        .chat-message__text
          | Nice!
      
</template>

<script>
export default {
  mounted () {
    const styleRule = [...document.styleSheets]
      .reduce((cur, acc) => [...acc.cssRules, ...cur], [])
      .find(el => el.selectorText && el.selectorText.includes('.chat-window'))
    const styleMap = styleRule.styleMap
    
  }
}
</script>

<style lang="sass" scoped>
// .edit-animation

.chat-window
  min-width: 360px

.chat-message
  @apply flex flex-row items-end m-1 text-left

  &__img
    @apply bg-orange-500 h-8 w-8 m-1 rounded-full 

  &__text
    @apply bg-teal-500 rounded-full py-3 px-6 m-1 font-medium
    max-width: 80%

  &--right
    @apply flex-row-reverse text-right

    .chat-message__img
      animation-name: toggle
      animation-duration: 1.5s 
      animation-timing-function: step-end 
      animation-delay: 0
      animation-direction: alternate
      animation-iteration-count: infinite
      animation-fill-mode: none
      animation-play-state: running


@keyframes toggle
  0%
    @apply bg-red-500

  50%
    @apply bg-orange-500

  100%
    @apply bg-red-500

</style>
