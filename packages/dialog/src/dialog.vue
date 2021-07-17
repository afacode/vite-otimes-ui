<template>
  <div class="el-dialog">
    <div class="el-dialog__header">
      <slot name="title">
        <span class="el-dialog__title">{{title}}</span>
      </slot>
    </div>
    <template v-if="render">
      <div class="el-dialog__body">
        <slot></slot>
      </div>
    </template>
    <div v-if="$slots.footer" class="el-dialog__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ODialog',
  props: { 
    title: String
  },
  setup(props) {
    // init here
  },
})
</script>

<style lang="scss" scoped>
</style>
