<template>
<div>
  <o-dialog title="title"></o-dialog>
  <o-dialog>
    <template v-slot:title>
      <h2>template title</h2>
    </template>
  </o-dialog>
</div>
</template>

<script lang="ts" setup>
  import ODialog from './dialog.vue'
</script>

