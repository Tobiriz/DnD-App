import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/landing_page/LandingPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage,
        },
        {
            path: '/imprint',
            component: () => import('../views/imprint/Imprint.vue'),
        },
        {
            path: '/diary',
            component: () => import('../views/diary/Diary.vue'),
            children: [
                {
                    path: 'characters',
                    component: () => import('../views/diary/characters/Characters.vue'),
                },
                {
                    path: 'campaigns',
                    component: () => import('../views/diary/campaigns/Campaigns.vue'),
                },
            ],
        },
    ]
})

export default router;