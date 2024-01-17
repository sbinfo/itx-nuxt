import { defineStore } from "pinia"

export const useLoadingStore = defineStore("isLoading", {
	state: () => ({
		isLoading: false,
	}),
	actions: {
		set(value: boolean) {
			this.$patch({ isLoading: value })
		},
	},
})
