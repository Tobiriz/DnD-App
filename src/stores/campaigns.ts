import { defineStore } from 'pinia';
import { Campaign } from '../classes/campaign.class';

export const useCampaignsStore = defineStore({
    id: 'campaigns',

    state: () => ({
        campaigns: [] as Campaign[],
        selectedCampaign: null as Campaign | null,
    }),

    getters: {
        
    },

    actions: {

    },
});