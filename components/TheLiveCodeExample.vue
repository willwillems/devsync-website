<template lang="pug">
.example-container( @mouseover="demo" )
  .relative.w-full.h-full
    PrismEditor.code-editor( :code="codeExampleText" lineNumbers language="css" )
    .input-row.controller
      AppToggleButton(
        title="Italic"
        v-model="fontStyle"
        on-value="italic"
        off-value="normal"
        data-controls-prop="font-style"
      )
      AppDataList(
        title="Weight"
        v-model="fontWeight"
        :disabled="!fontWeight"
        :placeholder="''"
        :list-options="weightOptions"
        :apply-property="'font-weight'"
        data-controls-prop="font-weight"
      )
      AppInputSelect(
        title="Size"
        v-model="fontSize"
        :disabled="!fontSize"
        :placeholder="''"
        :select-options="sizeOptions"
        :border-color="''"
        data-controls-prop="font-size"
      )
    style {{ codeExampleText }}
</template>

<script>
import "prismjs";
// import "../static/css/prism-one-dark.css";
import PrismEditor from 'vue-prism-editor'

import AppInputSelect from './demo/AppInputSelect.vue'
import AppDataList from './demo/AppDataList.vue'
import AppToggleButton from './demo/AppToggleButton.vue'

const sizeOptions = ['px', 'em', 'rem', '%']
const weightOptions = ['100', '200', '300', '400', '500', '600', '700', '800', '900']

export default {
  components: {
    PrismEditor,
    AppInputSelect,
    AppDataList,
    AppToggleButton
  },
  data() {
    return {
      sizeOptions,
      weightOptions,
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '3rem',
      demoFired: false
    }
  },
  computed: {
    codeExampleText () {
      return `/* Live example */
.section-text .section__title {
  font-family: 'SF Pro Display';
  max-width: 48rem;
  font-weight: ${this.fontWeight};
  line-height: 1em;
  font-size: ${this.fontSize};
  font-style: ${this.fontStyle};
  transition: all linear .3s;
}











`
    }
  },
  methods: {
    demo () {
      if (this.demoFired === true) return
      this.demoFired = true
      window.setTimeout(() => this.fontSize = '2.9rem', 100)
      window.setTimeout(() => this.fontSize = '2.8rem', 400)
      window.setTimeout(() => this.fontSize = '2.7rem', 1000)
      window.setTimeout(() => this.fontSize = '2.6rem', 1500)
      window.setTimeout(() => this.fontSize = '2.5rem', 2000)

      window.setTimeout(() => this.fontStyle = 'italic', 4000)
      window.setTimeout(() => this.fontStyle = 'normal', 7000)
    }
  }
}

</script>

<style lang="sass" scoped>
.example-container
  position: absolute;
  top: 23%;
  right: 2rem;

.code-editor
  // fix line number problem
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-start;

  & /deep/ .prism-editor__line-numbers
    width: 3rem;

  & /deep/ pre
    width: 350px;
    border-radius: 5px;
    padding: 1rem 1rem

    &:focus
      outline: none
  @media(max-width: 600px)
    display: none

.controller
  text-align: left;
  padding: .6rem 1.2rem .8rem 1.2rem;
  border-radius: 5px;
  position: absolute;
  bottom: 18%;
  left: -20%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.18);
  font-size: 12px;

  @media(max-width: 600px)
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

/deep/ 
  --main-txt-color: #EDEDED
  --main-bg-color: #2A2A2A
  --header-bg-color: #373737
  --input-bg-color: #373737
  --input-txt-color: var(--main-txt-color)
  --input-border-color: #444444
  --input-title-color: #D6D6D6

  .toggle-button-input
    background-image: url('./demo/format_italic-24px.svg');

  .input-row
    @apply flex flex-row justify-between
    background-color: var(--main-bg-color)

  .input
    @apply inline-block h-8
    color: inherit
    margin: 2px .5em
    padding: .2rem .4rem
    background-color: var(--input-bg-color)
    border: 2px solid var(--input-border-color)
    border-radius: 3px
    font-family: 'Cousine', monospace

    &--disabled
      filter: opacity(0.5) contrast(0.7)

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
</style>