<template lang="pug">
  .cta-card( ref='cta' )
    h1.cta-card__title Get your DevSync license now.
    p.cta-card__body No hassle, 30 day money back guarantee.
    a.cta-card__button( href="https://gum.co/qnXnf" ) Buy €39 <del class="small-del">€79</del>.
    img.cta-card__sticker( src="/img/money-cat.webp" alt="product hunt 50% discount" onerror="this.onerror=null; this.src='/img/money-cat.png'" )
</template>

<script>
export default {
  mounted () {
    this.$el.addEventListener('mousemove', () => sa('view_cta'), { once: true })
  }
}
</script>

<style lang="sass" scoped>
.cta-card
  @apply relative flex flex-col justify-between items-start py-12 px-16 m-32 mt-0 rounded-lg text-left
  width: 1080px
  max-width: 100% 
  background-image: linear-gradient(176deg, rgba(0,0,0,0.4) 0%, rgba(33,33,33,0.3) 100%), url(/img/cta-screenshot.png), linear-gradient(149deg, #588BFFDD 0%, #B745F2DD 98%)
  background-position: center, top 0 right -2rem, center
  background-repeat: no-repeat
  background-size: 100%, auto 100%, 100%
  // box-shadow: 0 0 32px 0px #dbceb645

  @media (max-width: 920px)
    @apply p-8
    background-image: linear-gradient(176deg, rgba(0,0,0,0.2) 0%, rgba(33,33,33,0.15) 100%), linear-gradient(149deg, #588BFFDD 0%, #B745F2DD 98%)
    background-position: center, center
    background-size: 100%, 100%

  del
    text-decoration-color: #e33c3c

    &.big-del
      position: relative
      text-decoration-color: transparent

      &::after
        content: ""
        background-color: #e33c3c
        height: .15em
        width: 100%
        position: absolute
        left: 0
        bottom: .5em
        transform: translateY(50%)

    &.small-del
      position: relative
      text-decoration-color: transparent

      &::after
        content: ""
        background-color: #e33c3c
        height: .15em
        width: 100%
        position: absolute
        left: 0
        bottom: 50%
        transform: translateY(50%)

  &__title
    @apply text-5xl leading-none font-extrabold max-w-2xl
    font-family: 'CriteriaCF-ExtraBold', 'SF Pro Display', 'Arial'

    @media (max-width: 500px)
      @apply text-4xl

  &__body
    @apply my-4 text-lg text-gray-100 font-medium max-w-2xl

  &__form
    @apply flex flex-row justify-center whitespace-no-wrap max-w-full

    & > *:not(:first-child)
      @apply mt-2 ml-4

  &__input
    @apply py-3 px-8 mt-2 bg-white text-gray-800 font-bold text-xl
    border-radius: 5px
    max-width: calc(100% - 4rem - 1rem)

  &__button
    @apply py-3 px-8 bg-black text-gray-100 font-bold text-xl
    border-radius: 5px;
    transition: transform .3s ease-out
    min-width: 4rem

    &:hover, &:focus
      transform: scale(1.05)
      //box-shadow: inset 0 0 0 2px white;

    &:active
      @apply bg-white text-gray-900

  &__sticker
    position: absolute
    top: .5rem
    right: -33px
    height: 60%

    @media (max-width: 920px)
      top: -3rem
      right: -1rem
      height: 6rem

</style>