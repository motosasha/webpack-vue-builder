<script>
import HelloWorld from "./components/HelloWorld";
import VueLogo from "@icons/vue";
import WebpackLogo from "@icons/webpack";

export default {
  name: "MyExample",
  components: {
    HelloWorld,
    VueLogo,
    WebpackLogo,
  },
};
</script>

<template>
  <div>
    <a class="link" href="https://webpack.js.org/" target="_blank">
      <WebpackLogo class="logo" alt="Webpack logo" />
    </a>
    <a class="link" href="https://vuejs.org/" target="_blank">
      <VueLogo class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Webpack + Vue" />
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #1c78c0aa);
  }

  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
