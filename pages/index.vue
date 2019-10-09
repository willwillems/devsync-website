<template>
  <div class="container">
    <div>
      <h1 class="title">
        DevSync coming soon...
      </h1>
  </div>
</template>

<script>

export default {
  components: {}
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
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 1px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
