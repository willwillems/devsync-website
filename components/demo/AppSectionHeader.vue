<template lang="pug">
  header.section-header
    img.section-header__icon( v-if="iconSrc" :src="iconSrc" alt="header-icon" )
    slot
</template>

<script>
export default {
  name: 'App-Header',
  props: {
    iconSrc: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.section-header {
  background-color: var(--header-bg-color);
  height: 1.5rem;
  line-height: 1.5rem;
  width: 100%;
  padding: 0 10px;
  font-weight: bold;

  &__icon {
    display: inline-block;
    vertical-align: top;
    padding: .25em;
    height: 1.5rem;
    width: 1.5rem;
  }
}
</style>