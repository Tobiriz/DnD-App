<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Imprint',
    setup() {
        return {}
    },
})
</script>

<template>
    <div>
        <p>Impressum</p>
        <RouterLink to="/">Home</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@import 'Imprint.scss';
</style>