<template lang="pug">
  label.input-container
    span.input-title {{ title }}
    input.input.input-dropdown(
      :value="value"
      v-on="listeners"
      v-bind="$attrs"
      :style="inputStyle + `border-color: ${borderColor || ''}`"
      :class=`{
        'input--disabled': disabled
      }`
      @click.meta="$emit('input', null)"
      @click="dropdownIsActive = true"
      @focus="dropdownIsActive = true"
      @blur="dropdownIsActive = false"
      @keydown="handleInputKeydown"
      ref="input"
    )
    ul.input-dropdown-list( v-show="dropdownIsActive" ref="dropdown")
      li.input-dropdown-element(
        v-for="(option, i) in listOptions"
        @mousedown.prevent="handleOptionMousedown(option)"
        :style="`${applyProperty}: ${option};`"
        :class=`{
          'input-dropdown-element--active': dropdownValue === option
        }`
      ) {{ option }}
</template>

<script>
export default {
  name: 'App-Data-List',
  inheritAttrs: false,
  props: {
    value: {
      required: true
    },
    title: {
      type: String
    },
    borderColor: {
      type: String
    },
    listOptions: {
      type: Array,
      required: true
    },
    applyProperty: {
      type: String,
      default: '',
      required: false
    },
    disabled: {
      type: Boolean
    },
  },
  data () {
    return {
      dropdownValue: '',
      dropdownIsActive: false
    }
  },
  computed: {
    inputStyle() {
      return this.applyProperty ? `${this.applyProperty}: ${this.value};` : ''
    },
    // TODO: Integrate these
    suggestions() {
      return this.listOptions
        .filter(str => str.match(this.value))
    },
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          if (this.value === event.target.value.trim()) return // vallue did not change, otherwise whitespace gets parsed and trimmed by browser
          this.$emit('input', event.target.value)
        }
      }
    }
  },
  methods: {
    handleInputKeydown (e) {
      // activate dropdown
      if ( e.keyCode === 40  // down
        || e.keyCode === 188 // comma
        ) this.dropdownIsActive = true
      // navigate DOWN trough list
      if (e.keyCode === 40) this.dropdownValue = this.dropdownValue
        ? this.listOptions[Math.min(this.listOptions.findIndex((el) => el === this.dropdownValue) + 1, this.listOptions.length - 1)]
        : this.listOptions[0]
      // navigate UP trough list
      if (e.keyCode === 38) this.dropdownValue = this.dropdownValue
        ? this.listOptions[Math.max(this.listOptions.findIndex((el) => el === this.dropdownValue) - 1, 0)]
        : this.listOptions[0]

      if ( e.keyCode === 40  // DOWN
        || e.keyCode === 38  // UP
      ) this.setNewDropdownValue()

      // On enter the choise has been made focus back on input
      if (e.keyCode === 13) this.dropdownIsActive = false // it already has focus

      return this.$nextTick(() => this.dropdownValue && document.querySelector('.input-dropdown-element--active').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' }))
    },
    handleOptionMousedown(option) {
      this.dropdownValue = option
      this.setNewDropdownValue()
      this.dropdownIsActive = false
    },
    setNewDropdownValue () {
      const newVal = this.value
        ? [ ...((a) => a.slice(0, a.length - 1))(this.value.split(',').map(s => s.trim())), this.dropdownValue ].join(', ')
        : this.dropdownValue
      this.$emit('input', newVal)
    },
    selectAll ({ srcElement }) {
      console.log(srcElement)
      srcElement.setSelectionRange(0, srcElement.value.length)
    }
  }
}
</script>

<style lang="sass" scoped>
.input-dropdown
  @apply bg-right bg-no-repeat
  background-image: url("/app/static/icons/arrow_drop_down-24px.svg")

.input-dropdown-list
  @apply absolute block overflow-y-scroll z-10
  color: inherit
  background-color: var(--input-bg-color)
  border: 2px solid var(--input-border-color)
  border-radius: 3px
  margin: 0 .5em;
  max-height: 10rem
  top: 100%
  width: calc(100% - 1em)

.input-dropdown-element
  @apply block h-6 w-full
  padding: .2rem .4rem
  text-align: left

  &:hover
    background-color: rgba(255,255,255, 0.2)

  &--active
    background-color: rgba(255,255,255, 0.2)

</style>
