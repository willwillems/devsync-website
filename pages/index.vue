<template>
  <div class="container">
    <div>
      <h1 class="title">
        DevSync coming soon {{ dottie }}
      </h1>
  </div>
</template>

<script>
const dotties = {
  '...': '.  ',
  '.  ': '.. ',
  '.. ': '...'
}

export default {
  data() {
    return {
      dottie: '...'
    }
  },
  mounted () {
    window.setInterval(() => this.dottie = dotties[this.dottie], 1000)
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: bolder;
  font-size: 24px;
  letter-spacing: 1px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
