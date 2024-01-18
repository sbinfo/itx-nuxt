<script lang="ts" setup>
const goToArchivePage = async () => {
	await navigateTo("/archive")
}
const goToAddEventPage = async () => {
	await navigateTo("/add-event")
}
</script>

<template>
	<div class="top-bar">
		<div>
			<button class="btn btn-sm btn-neutral mr-4">Tedbirler</button>
			<button class="btn btn-sm" @click="goToArchivePage">Arxiv</button>
		</div>
		<button
			class="btn btn-primary btn-outline btn-sm"
			@click="goToAddEventPage"
		>
			Tədbir yarat
			<Icon name="material-symbols:add" />
		</button>
	</div>
</template>

<style scoped>
.top-bar {
	@apply p-4 mb-4 flex justify-between items-center rounded border;
}
</style>
