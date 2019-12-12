<template lang="pug">
  label.input-container
    span.input-title {{ title }}
    input.input.toggle-button-input(
        type="checkbox"
        :value="onValue"
        :checked="value === onValue"
        :title="value ? 'checked' : 'unchecked'"
        v-on="listeners"
        v-bind="$attrs"
        :class=`{ 'input--disabled': disabled }`
        :style="`border-color: ${borderColor || ''};`"
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
      type: String
    },
  },
  computed: {
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
</style>