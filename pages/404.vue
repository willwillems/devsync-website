<template lang="pug">
  main.fourohfour
    h1.fourohfour__title 404
    p.fourohfour__body  Sorry this page currently does not exist.
    a.fourohfour__link( href="/" )
      <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard">
                  <g id="home-24px">
                      <polygon id="Path" points="2 2 26 2 26 26 2 26"></polygon>
                      <path d="M14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.2680135 6.2680135,0 14,0 Z M13.33,5.6 L4.97,13.13 C4.63,13.43 4.84,14 5.3,14 L7,14 L7,21 C7,21.55 7.45,22 8,22 L11,22 C11.55,22 12,21.55 12,21 L12,16 L16,16 L16,21 C16,21.55 16.45,22 17,22 L20,22 C20.55,22 21,21.55 21,21 L21,14 L22.7,14 C23.16,14 23.38,13.43 23.03,13.13 L14.67,5.6 C14.29,5.26 13.71,5.26 13.33,5.6 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                  </g>
              </g>
          </g>
      </svg>
</template>

<style lang='sass'>
.fourohfour
  @apply text-center p-2
  margin-top: calc(35vh - 60px)

  &__title
    @apply font-bold leading-tight
    font-size: 120px

  &__body
    @apply font-bold text-xl

  &__link
    @apply inline-block m-4
</style>
