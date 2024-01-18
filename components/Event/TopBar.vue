<template>
	<div class="top-bar">
		<div>
			<button class="btn btn-sm btn-neutral mr-4">Tedbirler</button>
			<button class="btn btn-sm">Arxiv</button>
		</div>
		<button class="btn btn-primary btn-outline btn-sm">
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
