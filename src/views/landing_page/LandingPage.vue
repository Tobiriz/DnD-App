<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LandingPage',
    setup() {
        return {}
    },
})
</script>

<template>
    <div class="" id="landing-page">
        <h1 class="text-center">
            Dungeons and Dragons
            <br>
            Tagebuch
        </h1>

        <RouterLink to="/diary" class="no-dec link-btn">
            Zum Tagebuch
        </RouterLink>

        <br>

        <RouterLink to="/imprint">Impressum</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@import 'LandingPage.scss';
</style>