<template lang="pug">
  .wrapper
    .editor-header
      .editor-header__icon
      .editor-header__text Code Editor
    PrismEditor.code-editor( :code="value" lineNumbers language="css" )
</template>

<script>
import "prismjs";
// import "../static/css/prism-one-dark.css";
import PrismEditor from 'vue-prism-editor'

export default {
  components: {
    PrismEditor,
  },
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {}
  },
  computed: {
  }
}

</script>

<style lang="sass" scoped>
.code-editor
  // fix line number problem
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-start;

  & /deep/ .prism-editor__line-numbers
    width: 3rem;
    text-align: center;
    margin-top: 0;
    border-radius: 0px !important;
    padding-top: 12px;

  & /deep/ pre
    width: 350px;
    border-radius: 0px !important;
    padding: 1rem 1rem;
    margin-top: 0;
    padding-top: 12px;

    &:focus
      outline: none
  @media(max-width: 600px)
    display: none

.editor-header
  @apply relative w-full h-6 flex flex-row justify-center items-center text-sm
  background-color: #393f4a;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  &__icon
    @apply absolute h-3 w-3 rounded-full 
    top: .375rem
    left: 1.125rem
    animation: blinky 2.5s step-end infinite

  &__text
    @apply font-semibold text-gray-400

@keyframes blinky
  0%
    @apply bg-green-700

  50%
    @apply bg-gray-700

  100%
    @apply bg-green-700
</style>