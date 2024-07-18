<template>
  <div id="app">
    <Section0 />
    <AboutUs />
    <!-- Add other sections as components here -->
  </div>
</template>

<script>
import Section0 from './components/Section0.vue';
import AboutUs from "@/components/AboutUs.vue";

export default {
  name: 'App',
  components: {
    Section0,
    AboutUs
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
