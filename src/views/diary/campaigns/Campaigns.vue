<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Campaigns',
    setup() {
        return {}
    },
})
</script>

<template>
    <div>
        <p>Campaigns</p>
        <RouterLink to="/diary">Tagebuch</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@import 'Campaigns.scss';
</style>