<template>
  <o-button @click="c"  :disabled="true" :loading="true">111</o-button>
  <o-button @click="c" type="primary">222</o-button>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
const c = (event: MouseEvent) => {
  console.log(event)
}
</script>
