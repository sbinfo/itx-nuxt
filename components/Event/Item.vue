<script lang="ts" setup>
const props = defineProps(["event"])
console.log(props)
</script>

<template>
	<div class="flex p-4 mb-4 rounded border">
		<div class="flex items-center mr-4">
			<img :src="event.image" alt="" class="w-48 min-w-48 max-w-48 rounded" />
		</div>
		<div>
			<h3 class="text-xl text-itx-success font-semibold leading-tight mb-1">
				{{ event.title }}
			</h3>
			<div class="flex justify-between w-60 text-itx-secondary text-sm mb-2">
				<span>{{ event.date }}</span> &bull;
				<span>{{ event.location }}</span> &bull;
				<span>{{ event.price }}</span>
			</div>
			<div class="mb-1 leading-snug">{{ event.text }}</div>
			<div>
				<span
					v-for="tag in event.tags"
					:key="tag"
					class="mr-3 text-sm text-itx-secondary cursor-pointer italic"
					>{{ tag }}</span
				>
			</div>
		</div>
	</div>
</template>
