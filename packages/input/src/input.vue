<template>
  <div>
    <input
      class
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :value="value"
      @input="handleInput"
    />
    <span>
      <i class></i>
    </span>
  </div>
</template>

<script lang='ts'>
interface BooleanFalseType {
  type: Boolean,
  default?: false
}
import { defineComponent, PropType } from 'vue'
import { ElementNode } from '@vue/compiler-dom';
export default defineComponent({
  name: 'OInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    value: null,
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    password: Object as PropType<BooleanFalseTyp>
  },
  emits: ['input'],
  setup(props, ctx) {
    // init here
    const handleInput = (e: any) => {
      ctx.emit('input', e.target.value)
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
