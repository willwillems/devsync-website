<template lang="pug">
  label.input-container
    span.input-title {{ title }}
    .toggle-options( :class=`{ 'input--disabled': disabled }` :style="`border-color: ${borderColor || ''}`" @click.meta="$emit('input', null)" )
      input.toggle-option(
        v-for="option in toggleOptions"
        type="radio"
        :value="option.value"
        :checked="value === option.value"
        :title="option.title"
        :style="`background-image: url(${option.icon});`"
        :name="inputName"
        v-on="listeners"
        v-bind="$attrs"
      )

</template>

<script>
export default {
  name: 'App-Multi-Toggle',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    title: {
      type: String
    },
    toggleOptions: {
      type: Array
    },
    borderColor: {
      type: String
    },
    inputName: {
      type: String,
      default() { return `toggle-${Math.floor(Math.random()*1e9)}` }
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

<style scoped lang="sass">
.toggle-options
  @apply flex flex-row flex-no-wrap items-center p-0 h-8
  color: inherit
  margin: 2px .5em
  background-color: var(--input-bg-color)
  border: 2px solid var(--input-border-color)
  border-radius: 3px
  font-family: 'Cousine', monospace
  white-space: nowrap
  overflow: hidden

.toggle-option
  @apply bg-center bg-no-repeat bg-transparent appearance-none flex-grow
  height: 2rem
  width: 2rem

  &:hover
    background-color: #303030
  
  &:checked
    background-color: #222222
</style>