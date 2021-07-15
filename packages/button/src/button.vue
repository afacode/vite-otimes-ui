<template>
  <button :class="[
    'el-button',
    type ? 'el-button--' + type : '',
    buttonSize ? 'el-button--' + buttonSize : '',
    {
      'is-disabled': buttonDisabled,
      'is-loading': loading,
      }
    ]"
    :disabled="buttonDisabled || loading"
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import type { PropType } from 'vue'

type ButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>

export default defineComponent({
  name: 'OButton',
  props: {
    type: {
      type: String as ButtonType,
      default: 'default',
    },
    buttonSize: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  emit: ['click'],
  setup(props, ctx) {
    const buttonDisabled = computed(() => {
      return props.disabled
    })
    const handleClick = (event: MouseEvent) => {
      ctx.emit('click', event)
    }
    return {
      buttonDisabled,
      handleClick
    }
  }
})
</script>

