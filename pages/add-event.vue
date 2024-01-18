<script lang="ts" setup>
import { ref } from "vue"
const titleRef = ref("")
const priceRef = ref("")
const locationRef = ref("")
const contentRef = ref("")
</script>

<template>
	<div class="py-4">
		<h1 class="text-2xl font-semibold text-center mb-4">
			Yeni tedbit elave et
		</h1>

		<form class="flex flex-wrap w-2/6 mx-auto">
			<input
				v-model="titleRef"
				type="text"
				placeholder="title"
				class="input input-bordered w-full mb-4"
			/>
			<input
				v-model="priceRef"
				type="number"
				placeholder="price"
				class="input input-bordered w-full mb-4"
			/>
			<input
				v-model="locationRef"
				type="text"
				placeholder="location"
				class="input input-bordered w-full mb-4"
			/>
			<textarea
				v-model="contentRef"
				type="text"
				placeholder="content"
				class="textarea textarea-bordered w-full mb-4"
			/>
			<button class="btn">Moderaciyaya gonder</button>
		</form>
	</div>
</template>
