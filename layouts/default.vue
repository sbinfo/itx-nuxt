<script lang="ts" setup>
// import { account } from "@/utils/appwrite"
import { useLoadingStore } from "@/stores/loading.store"

const router = useRouter()
const isLoadingStore = useLoadingStore()

onMounted(async () => {
	try {
		isLoadingStore.set(true)
		const user = await account.get()
		console.log("user: ", user)
	} catch (error) {
		router.push("/auth")
	} finally {
		isLoadingStore.set(false)
	}
})
</script>

<template>
	<div>
		<LayoutNavbar />
		<div class="max-w-screen-xl mx-auto px-2">
			<slot />
		</div>
	</div>
</template>
