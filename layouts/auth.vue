<script lang="ts" setup>
import { useLoadingStore } from "@/stores/loading.store"

const isLoadingStore = useLoadingStore()
const { isLoading } = storeToRefs(isLoadingStore)
</script>

<template>
	<div>
		<LayoutLoader v-if="isLoading" />
		<div v-else class="max-w-screen-xl mx-auto px-2">
			<slot />
		</div>
	</div>
</template>
