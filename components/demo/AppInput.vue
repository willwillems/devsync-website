<template lang="pug">
  label.input-container.app-input-input
    span.input-title {{ title }}
    input.input(
      :value="value"
      v-on="listeners"
      v-bind="$attrs"
      :style="`border-color: ${borderColor || ''};`"
      :class=`{
        'input--disabled': disabled
      }`
      @click.meta="$emit('input', null)"
    )
</template>

<script>
export default {
  name: 'App-Input',
  inheritAttrs: false,
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    borderColor: {
      type: String
    },
    disabled: {
      type: Boolean
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit('input', event.target.value)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.app-input-input {
  min-width: 0;
}
</style>