<template lang="pug">
  section.section.section--full.section-cta#cta( ref="cta" )
    TheCtaCard
    .section__body
      h1.section__title Stay up to date.
      h2.section__sub-title Get notified about updates and new features
      form.email-form( action="https://nickolasboyer.us12.list-manage.com/subscribe/post?u=55a5fbebab9bb447102de7229&amp;id=42d8840ff4" method="post" )
        input.email-form__input( placeholder="email" type="email" value="" name="EMAIL" id="mce-EMAIL" required )
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        | <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_55a5fbebab9bb447102de7229_42d8840ff4" tabindex="-1" value=""></div>
        input.email-form__button( type="submit" value="Subscribe!" name="subscribe" id="mc-embedded-subscribe" )
</template>

<script>
import TheCtaCard from '../../components/TheCtaCard.vue'

export default {
  components: {
    TheCtaCard
  }
}
</script>

<style lang="sass" scoped>

.section-cta
  background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,1) 70%);

.email-form
  @apply flex flex-row justify-center m-4 whitespace-no-wrap max-w-full

  & > *:not(:first-child)
    @apply mt-2 ml-4

  &__input
    @apply py-2 px-6 mt-2 bg-white text-gray-800 font-bold text-xl 
    border-radius: 5px
    min-width: 120px

  &__button
    @apply py-2 px-6 bg-black text-gray-100 font-bold text-xl flex-shrink-0
    border-radius: 5px;
    transition: transform .3s ease-out
    min-width: 4rem
    border: 2px solid white

    &:hover, &:focus
      transform: scale(1.05)
      //box-shadow: inset 0 0 0 2px white;

    &:active
      @apply bg-white text-gray-900
</style>