<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return {}
  },
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
@import 'App.scss';
</style>
