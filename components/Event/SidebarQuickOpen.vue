<script lang="ts" setup>
import { quickMenus } from "@/components/Event/quick-menu.data"
</script>

<template>
	<div class="">
		<h3 class="mb-4 text-xl font-semibold">Sürətli keçid</h3>
		<div>
			<ul
				v-for="(menu, index) in quickMenus"
				:key="index"
				:class="{ 'mb-8': menu.name !== 'tags' }"
			>
				<li
					v-for="item in menu.value"
					:key="item.title"
					class="text-sm leading-normal"
				>
					<NuxtLink :href="item.link" class="underline">{{
						item.title
					}}</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
