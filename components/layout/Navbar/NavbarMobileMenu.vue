<script lang="js" setup>
import { MENU_DATA } from "@/components/layout/Navbar/menu.data"

const isMenuOpen = ref(false)
</script>

<template>
	<div class="mobile-menu">
		<div
			tabindex="0"
			@onmousedown="test"
			class="btn btn-ghost btn-square lg:hidden"
		>
			<label class="btn btn-square swap swap-rotate">
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" v-model="isMenuOpen" />
				<!-- hamburger icon -->
				<img
					src="/icons/hamburger-icon.svg"
					alt=""
					class="swap-off fill-current"
				/>
				<!-- close icon -->
				<img src="/icons/close-icon.svg" alt="" class="swap-on fill-current" />
			</label>
		</div>
		<ul
			v-show="isMenuOpen"
			tabindex="0"
			class="absolute left-1 menu menu-sm mt-3 z-[1] p-2 shadow bg-accent rounded-box w-52"
		>
			<li v-for="menu in MENU_DATA" :key="menu.title">
				<NuxtLink :to="menu.link">
					<span>{{ menu.title }}</span>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>
