import { defineStore } from "pinia"

interface IAuthStore {
	email: string
	name: string
	status: boolean
}

const defaultState: { user: IAuthStore } = {
	user: {
		email: "",
		name: "",
		status: false,
	},
}

export const useAuthStore = defineStore("auth", {
	state: () => defaultState,
	getters: {
		isAuth: state => state.user.status,
	},
	actions: {
		clear() {
			this.$patch(defaultState)
		},
		set(input: IAuthStore) {
			this.$patch({ user: input })
		},
	},
})
