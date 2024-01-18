<script lang="ts" setup>
import { useLoadingStore } from "@/stores/loading.store"
import { account } from "@/utils/appwrite"

const router = useRouter()
const isLoadingStore = useLoadingStore()

async function logout() {
	try {
		isLoadingStore.set(true)
		await account.deleteSession("current")
	} catch (error) {
		console.log("logout error: ", error)
	} finally {
		isLoadingStore.set(false)
		await router.push("auth")
	}
}
</script>

<template>
	<div class="dropdown dropdown-end">
		<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
			<div class="w-10 rounded-full">
				<img
					alt="Tailwind CSS Navbar component"
					src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
				/>
			</div>
		</div>
		<ul
			tabindex="0"
			class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-accent rounded-box w-52"
		>
			<li>
				<a class="justify-between">
					Profile
					<span class="badge">New</span>
				</a>
			</li>
			<li><a>Settings</a></li>
			<li><a @click="logout">Logout</a></li>
		</ul>
	</div>
</template>
