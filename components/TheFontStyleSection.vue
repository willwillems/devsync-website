<template lang="pug">
  section.fontstylesection
    AppSectionHeader( iconSrc="/img/demo/font-section.svg") Typography
    main.section-body
      .input-row
        AppDataList(
          @input="forceUpdate"
          title="Font Family"
          v-model="fontFamily"
          :disabled="!fontFamily"
          :placeholder="placeholder['font-family']"
          :list-options="fontOptions"
          :border-color="fontFamilyColor"
          :apply-property="'font-family'"
          data-controls-prop="font-family"
        )
        //- AppColorPicker(
        //-   title="Color"
        //-   v-model="color"
        //-   :disabled="!color"
        //-   :border-color="colorColor"
        //-   data-controls-prop="color"
        //- )
      .input-row
        AppInputSelect(
          @input="forceUpdate"
          title="Size"
          v-model="fontSize"
          :disabled="!fontSize"
          :placeholder="placeholder['font-size']"
          :select-options="sizeOptions"
          :border-color="fontSizeColor"
          data-controls-prop="font-size"
        )
        AppDataList(
          @input="forceUpdate"
          title="Weight"
          v-model="fontWeight"
          :disabled="!fontWeight"
          :placeholder="placeholder['font-weight']"
          :list-options="weightOptions"
          :border-color="fontWeightColor"
          :apply-property="'font-weight'"
          style="width: 150px"
          data-controls-prop="font-weight"
        )
        AppToggleButton(
          @input="forceUpdate"
          title="Italic"
          v-model="fontStyle"
          :button-icon="itallicButtonIcon"
          :border-color="fontStyleColor"
          on-value="italic"
          off-value="normal"
          data-controls-prop="font-style"
        )
      .input-row
        AppInputSelect(
          @input="forceUpdate"
          title="Height"
          v-model="lineHeight"
          :disabled="!lineHeight"
          :placeholder="placeholder['line-height']"
          :select-options="sizeOptions"
          :border-color="lineHeightColor"
          data-controls-prop="line-height"
        )
        AppMultiToggle(
          @input="forceUpdate"
          title="Align"
          v-model="textAlign"
          :disabled="!textAlign"
          :toggle-options="alignToggleOptions"
          :border-color="textAlignColor"
          style="width: 150px"
          data-controls-prop="text-align"
        )
        AppToggleButton(
          @input="forceUpdate"
          title="Wrap"
          v-model="whiteSpace"
          :button-icon="whiteSpaceButtonIcon"
          :border-color="whiteSpaceColor"
          on-value="nowrap"
          off-value="normal"
          style="flex-grow: 0;"
        )
</template>

<script>
import pipe     from 'lodash/fp/pipe'
import reverse  from 'lodash/fp/reverse' 
import keys     from 'lodash/fp/keys' 
import map      from 'lodash/fp/map' 
import max      from 'lodash/fp/max'

import AppSectionHeader from './demo/AppSectionHeader.vue'
import AppInput from './demo/AppInput.vue'
import AppInputSelect from './demo/AppInputSelect.vue'
import AppDataList from './demo/AppDataList.vue'
import AppMultiToggle from './demo/AppMultiToggle.vue'
import AppToggleButton from './demo/AppToggleButton.vue'
// import AppColorPicker from './demo/AppColorPicker.vue'

const sizeOptions = ['px', 'em', 'rem', '%']
const weightOptions = ['100', '200', '300', '400', '500', '600', '700', '800', '900']
const fontOptions = [
  'Arial',
  'Helvetica',
  'Times New Roman',
  'Times',
  'Courier New',
  'Courier',
  'Palatino',
  'Garamond',
  'Bookman',
  'Avant Garde',
  'Verdana',
  'Georgia',
  'Comic Sans MS',
  'Trebuchet MS',
  'Arial Black',
  'Impact'
]
const alignToggleOptions = [
  { title: 'left',    value: 'left',    icon: 'img/demo/format_align_left-24px.svg' },
  { title: 'right',   value: 'right',   icon: 'img/demo/format_align_right-24px.svg' },
  { title: 'center',  value: 'center',  icon: 'img/demo/format_align_center-24px.svg' },
  { title: 'justify', value: 'justify', icon: 'img/demo/format_align_justify-24px.svg' }
]

const itallicButtonIcon = 'img/demo/format_italic-24px.svg'
const whiteSpaceButtonIcon = [
  'img/demo/white-space-normal.svg',
  'img/demo/white-space-nowrap.svg'
]

export const getColorForProp = (prop) => function () {
  return 'rgb(100, 128, 239)'
}

const mapProp = name => {
  
}

export const mapProps = process.client
  ? function (propNames) {
    // create array of properties array, first el is name, second is optional alias
    const properties = Array.isArray(propNames)
      ? propNames.map(p => [p])
      : Object.entries(propNames).map(reverse)

    return properties.reduce((acc, [name, alias]) => {

      const get = function () {
        const styleRules = [...document.styleSheets]
          .reduce((cur, acc) => [...acc.cssRules, ...cur], [])
          .filter(el => el.selectorText && el.selectorText.includes(this.activeElSelector))
        const { styleMap, style } = styleRules[styleRules.length - 1]
        console.log(style)
        return style[alias]
      }
      const set = function (val) {
        const styleRules = [...document.styleSheets]
          .reduce((cur, acc) => [...acc.cssRules, ...cur], [])
          .filter(el => el.selectorText && el.selectorText.includes(this.activeElSelector))
        const { styleMap, style } = styleRules[styleRules.length - 1]
        try {
          return val === null ? styleMap.delete(name) : styleMap.set(name, val) // style[alias] = val
        } catch (e) {}
      }
      // store g & s under alias or else name in object, 'this' gets bound automatically
      return {...acc, [alias || name]: { cache: false, get, set }}
    }, {})
  }
  : () => {}

export default {
  name: 'Font-Style-Section',
  components: {
    AppSectionHeader,
    AppInput,
    AppInputSelect,
    AppDataList,
    AppMultiToggle,
    AppToggleButton,
//    AppColorPicker,
  },
  data() {
    return {
      activeElSelector: 'section__title',
      sizeOptions,
      fontOptions,
      weightOptions,
      alignToggleOptions,
      itallicButtonIcon,
      whiteSpaceButtonIcon,
      // color: '#ffffff',
      // fontSize: '3 rem',
      // lineHeight: '1 em', 
      // fontFamily: '\'SF Pro Display\'',
      // textAlign: 'center',
      // fontStyle: '',
      // fontWeight: '600',
      // whiteSpace: '',
    }
  },
  mounted () {
    this.forceUpdate()
    document
      .getElementById('hero')
      .addEventListener('click', this.handleClick)
  },
  beforeDestroy () {
    document
      .getElementById('hero')
      .removeEventListener('click', this.handleClick)
  },
  computed: {
    cssText () {
      return `color: ${this.color};
font-size: ${this.fontSize};
line-height: ${this.lineHeight}; 
font-family: ${this.fontFamily};
text-align: ${this.textAlign};
font-style: ${this.fontStyle};
font-weight: ${this.fontWeight};
white-space: ${this.whiteSpace};`
    },
    ...mapProps({
      color: 'color',
      fontSize: 'font-size',
      lineHeight: 'line-height', 
      fontFamily: 'font-family',
      textAlign: 'text-align',
      fontStyle: 'font-style',
      fontWeight: 'font-weight',
      whiteSpace: 'white-space',
    }),
    colorColor: { cache: false, get() { return this.color ? 'rgb(100, 128, 239)' : '' } }, // getColorForProp('color'),
    fontSizeColor: { cache: false, get() { return this.fontSize ? 'rgb(100, 128, 239)' : '' } },// { return getColorForIndex(Math.max(...Object.keys(this.$store.getters.styleMap['top']))) },
    lineHeightColor: { cache: false, get() { return this.lineHeight ? 'rgb(100, 128, 239)' : '' } }, // () { return getColorForIndex(Math.max(...Object.keys(this.$store.getters.styleMap['position']))) }
    fontFamilyColor: { cache: false, get() { return this.fontFamily ? 'rgb(100, 128, 239)' : '' } },
    textAlignColor: { cache: false, get() { return this.textAlign ? 'rgb(100, 128, 239)' : '' } },
    fontStyleColor: { cache: false, get() { return this.fontStyle ? 'rgb(100, 128, 239)' : '' } },
    fontWeightColor: { cache: false, get() { return this.fontWeight ? 'rgb(100, 128, 239)' : '' } },
    whiteSpaceColor: { cache: false, get() { return this.whiteSpace ? 'rgb(100, 128, 239)' : '' } },
    placeholder () {
      return {} // this.$store.getters.shadowRules
    }
  },
  methods: {
    deleteProp (name) {
      
    },
    forceUpdate () {
      this.$forceUpdate()
      const styleRules = [...document.styleSheets]
        .reduce((cur, acc) => [...acc.cssRules, ...cur], [])
        .filter(el => el.selectorText && el.selectorText.includes('.' + this.activeElSelector))
      const { cssText } = styleRules[styleRules.length - 1]
      this.$emit('style', cssText.split(';').join(';\n ').split('{').join('{\n ').split('  }').join('}\n'))
    },
    handleClick (e) {
      if (e.srcElement.classList[0].includes('button')) return 
      this.activeElSelector = e.srcElement.classList[0]
      this.forceUpdate()
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Cousine:400&display=swap')

\:root
  --main-txt-color: #EDEDED
  --main-bg-color: #2A2A2A
  --header-bg-color: #373737
  --input-bg-color: #373737
  --input-txt-color: var(--main-txt-color)
  --input-border-color: #444444
  --input-title-color: #D6D6D6

.fontstylesection
  @apply m-0 p-0
  color: var(--main-txt-color)
  background-color: var(--main-bg-color)
  font-family: 'Helvetica Neue', sans-serif
  font-size: 16px
  box-sizing: border-box

// This (16px - 75%) is the default in chrome, this is for explicitness only
.fontstylesection
  @apply text-left
  font-size: 12px
  width: 340px
  font-family: "Helvetica Neue"
  font-weight: 500

  .section-body
    @apply w-full
    padding: 10px

  // Input styling

  .input-row
    @apply flex flex-row justify-between

  .input-column
    @apply flex flex-col justify-between flex-grow

  .input-container
    @apply relative inline-flex flex-col flex-grow
    color: var(--input-txt-color)

  .input-title
    @apply block
    font-size: 10px
    color: var(--input-title-color)
    margin: 1px calc(.5em + 2px)

  .input
    @apply inline-block h-8
    color: inherit
    margin: 2px .5em
    padding: .2rem .4rem
    background-color: var(--input-bg-color)
    border: 2px solid var(--input-border-color)
    border-radius: 3px
    font-family: 'Cousine', monospace
    white-space: nowrap

    &--disabled
      filter: opacity(0.5) contrast(0.7)


  .error-message-container
    @apply fixed bottom-0 left-0 right-0 flex flex-col items-center
</style>