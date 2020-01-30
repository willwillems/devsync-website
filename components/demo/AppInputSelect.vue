<template lang="pug">
  label.input-container.input-select-container
    span.input-title {{ title }}
    .input.input-select( :style="`border-color: ${borderColor || ''};`" :class=`{ 'input--disabled': disabled }` )
      input.input-select__input( :value="inputValue" @input="setInput" @keydown="detectUnit" @mousedown="mouseClick" @click.meta="$emit('input', null)" :placeholder="inputPlaceholder" v-bind="$attrs" ref="input" )
      select.input-select__select( :value="selectValue" @input="setSelect" @keydown="selectKeypress" ref="select" )
        option( value="" ) {{ selectPlaceholder }}
        option( v-for="option in selectOptions" :value="option") {{ option }}
</template>

<script>
import throttle from 'lodash/fp/throttle'

const maxDecimals     = 5
const smallStepUnits  = ['rem', 'em', '']
const numericRegex    = /^-?[0-9\.]+/
const unitRegex       = /[a-z%]+$/

const toMaxDecimalString = (num) => String(+(num).toFixed(maxDecimals))

const regexMatch = (regex) => (value) => value
  ? value.match(regex)
    ? value.match(regex)[0]
    : '' // no match empty string
  : value // falue is falsy return value

export default {
  name: 'App-Input-Select',
  inheritAttrs: false,
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    selectOptions: {
      type: Array
    },
    borderColor: {
      type: String
    },
    disabled: {
      type: Boolean
    },
  },
  computed: {
    inputValue: {
      get() { return regexMatch(numericRegex)(this.value) || '' },
      set(val) { this.$emit('input', `${val}${this.selectValue}`) }
    },
    selectValue: {
      get() { return regexMatch(unitRegex)(this.value) || '' },
      set(val) { this.$emit('input', `${this.inputValue}${val}`) }
    },
    inputPlaceholder () {
      return regexMatch(numericRegex)(this.placeholder) || ''
    },
    selectPlaceholder () {
      return regexMatch(unitRegex)(this.placeholder) || ''
    }
  },
  methods: {
    setInput (ev) { this.inputValue = ev.target.value },
    setSelect (ev) { this.selectValue = ev.target.value },
    detectUnit (event) {
      // if key is a letter skip to the select and let it select a unit
      if( 65 <= event.keyCode && event.keyCode <= 90 ) return this.$refs['select'].focus()
      // on up and down add/subtract 1 or 10 if shift is engaged 
      const stepSize = smallStepUnits.includes(this.selectValue) ? .1 : 1
      if( event.keyCode === 38 ) return (event.preventDefault(), this.inputValue = toMaxDecimalString(Number(this.inputValue) + (event.shiftKey ? 10 : 1 * stepSize)) )
      if( event.keyCode === 40 ) return (event.preventDefault(), this.inputValue = toMaxDecimalString(Number(this.inputValue) - (event.shiftKey ? 10 : 1 * stepSize)) )
    },
    selectKeypress (ev) {
      if( event.keyCode === 37 ) return (event.preventDefault(), this.$refs['input'].focus())
    },
    mouseClick (ev) {
      // store the previous location, set to start location
      const startLocation = ev.y
      const startValue = Number(this.inputValue)
      // on move ad the vertical movement to the input value
      const onMove = throttle(5)((ev) => {
        this.inputValue = toMaxDecimalString(startValue + ((startLocation - ev.y) / (smallStepUnits.includes(this.selectValue) ? 10 : 1)))
      })
      // on mouse up remove all event listeners on the window
      const endMove = () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', endMove);
      }
      // add eventlisteners to the window
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', endMove); 
    }
  }
}
</script>

<style lang="scss" scoped>
.input-select-container {
  min-width: 6rem;
  flex-grow: 0; // this input should not grow first
}

.input-select {
  display: flex;
  flex-direction: row;
  padding: 0;

  &__input, &__select {
    margin: 0;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 0;
    background-color: inherit;
    padding: 0 .2rem;
    width: 2.5rem;
    text-align: center;
  }

  &__input {
    flex-grow: 1;
    width: 4em;
    min-width: 3em;
    text-align: left;
    padding: 0 .25em 0 1em;
  }

  &__select {
    flex-grow: 0;
    border-left: 2px solid var(--input-border-color);
    appearance: none;
    -webkit-appearance: none;
    padding: 0 .5rem;
  }
}
</style>