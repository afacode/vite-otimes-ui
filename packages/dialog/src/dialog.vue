<template>
  <div class="el-dialog" v-if="visible">
    <div class="el-dialog__header">
      <slot name="title">
        <span class="el-dialog__title">{{title}}</span>
      </slot>
      <button
        v-if="showClose"
        aria-label="close"
        class="el-dialog__headerbtn"
        type="button"
        @click="handleClose"
      >
        <i class="el-dialog__close el-icon el-icon-close"></i>
      </button>
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
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      defalut: '提醒'
    },
    showClose: {
      type: Boolean,
      default: true,
    },
  },
  
  setup(props) {
    // init here
    const handleClose = () => {

    }
  },
})
</script>

<style lang="scss" scoped>
</style>
