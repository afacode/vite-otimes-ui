<template>
  <div>
  <o-button @click="c"  :disabled="true" :loading="true">111</o-button>
  <o-button @click="c" type="primary">222</o-button>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <h3 class="h3" @click="Add">{{$store.state.count}}</h3>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useStore } from 'vuex';
const c = (event: MouseEvent) => {
  console.log(event)
}
const store = useStore()
const Add = () => {
  store.commit('add')
}
</script>

<style lang="scss" scoped>
.h3 {
  background: #ccc;
}
</style>

