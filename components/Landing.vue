<template>
  <header>
    <h1>Hi there, I'm using Nuxt.js!</h1>
    <h2>Click <nuxt-link to="/about">here</nuxt-link> to learn more about this project.</h2>
    <h3>Let's check out <nuxt-link to="/fluent">Fluent in action.</nuxt-link> </h3>
  </header>
</template>


<script>
export default {
  methods : {},
  data: {
    greeting: "hello!"
  }
}
</script>

<style>
body {
  color: teal;
}
  a {
    color: blue;
  }
</style>
