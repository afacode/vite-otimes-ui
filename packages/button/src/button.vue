<template>
  <button :class="[
    'el-button',
    `el-button--${type}`,
    buttonSize ? 'el-button--' + buttonSize : '',
    {
      'is-disabled': buttonDisabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      }
    ]" :disabled="buttonDisabled || loading" :autofocus="autofocus" :type="nativeType" @click="handleClick">
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'

type ButtonType = PropType<
  'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'
>
type ButtonNativeType = PropType<'button' | 'submit' | 'reset'>

export default defineComponent({
  name: 'OButton',
  props: {
    type: {
      type: String as ButtonType,
      default: 'default'
    },
    buttonSize: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    autofocus: Boolean,
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String as ButtonNativeType,
      default: 'button',
      validator: (val: string) => {
        return ['button', 'submit', 'reset'].includes(val)
      }
    }
  },
  emits: ['click'],
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

