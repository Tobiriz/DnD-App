<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'Diary',
    setup() {
        return {}
    },
    computed: {
        isCharactersOrCampaignsRoute(): boolean {
            const currentRoute = useRoute()
            return (
                currentRoute.path === '/diary/characters' ||
                currentRoute.path === '/diary/campaigns'
            )
        },
    },
})
</script>

<template>
    <div id="diary">
        <header>
            <RouterLink :to="{ path: '/diary/characters' }" class="text-center">
                Characters
            </RouterLink>

            <RouterLink :to="{ path: '/diary/campaigns' }" class="text-center">
                Campaigns
            </RouterLink>
        </header>

        <p>Diary</p>
        <RouterLink to="/">Home</RouterLink>

        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
@import 'Diary.scss';
</style>