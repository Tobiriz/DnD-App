<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Characters',
    setup() {
        return {}
    },
})
</script>

<template>
    <div>
        <p>Characters</p>
        <RouterLink to="/diary">Tagebuch</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@import 'Characters.scss';
</style>