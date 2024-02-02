<script setup>
import { ref } from "vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button class="button" type="button" @click="count++">count is {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test HMR</p>
  </div>
</template>

<style lang="scss" scoped>
.button {
  padding: 0.6em 1.2em;
  font-weight: 500;
  font-size: 1em;
  font-family: inherit;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.25s;
}

.button:hover {
  border-color: #646cff;
}

.button:focus,
.button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  .button {
    background-color: #f9f9f9;
  }
}
</style>
