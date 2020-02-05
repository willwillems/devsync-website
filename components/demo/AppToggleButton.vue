<template lang="pug">
  label.input-container.toggle-button-input__container
    span.input-title {{ title }}
    input.input.toggle-button-input(
        type="checkbox"
        :value="onValue"
        :checked="value === onValue"
        :title="value ? 'checked' : 'unchecked'"
        v-on="listeners"
        v-bind="$attrs"
        :class=`{ 'input--disabled': disabled }`
        :style="`border-color: ${borderColor || ''}; background-image: url(${activeButtonIcon});`"
        @click.meta.prevent="$emit('input', null)"
      )

</template>

<script>
export default {
  name: 'App-Toggle-Button',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    onValue: {
      type: String,
      required: true,
    },
    offValue: {
      type: String,
      default: '',
    },
    title: {
      type: String
    },
    borderColor: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    buttonIcon: {
      validator: val => (
        typeof val === 'string'
        || ( val.length === 2
          && typeof val[0] === 'string'
          && typeof val[1] === 'string'
          )
      )
    },
  },
  computed: {
    activeButtonIcon () {
      if ( typeof this.buttonIcon === 'string' ) return this.buttonIcon
      if ( typeof this.buttonIcon === 'object' ) return (this.value === this.onValue)
        ? this.buttonIcon[1]
        : this.buttonIcon[0]
      return ''
    },
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit('input', event.target.checked ? this.onValue : this.offValue)
        }
      }
    }
  }
}
</script>

<style scoped lang="sass">
.toggle-button-input
  @apply bg-center bg-no-repeat appearance-none
  height: 2rem
  width: 2rem

  &:hover
    background-color: #303030
  
  &:checked
    background-color: #222222

  &__container
    @apply flex-grow-0
</style>