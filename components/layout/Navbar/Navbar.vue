<script lang="ts" setup>
import { MENU_DATA } from "@/components/layout/Navbar/menu.data"
</script>

<template>
	<div class="navbar bg-accent">
		<div class="navbar-start">
			<LayoutNavbarMobileMenu />
			<a class="btn btn-ghost text-2xl">ITX</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li v-for="menu in MENU_DATA" :key="menu.title">
					<NuxtLink :to="menu.link">
						<span>{{ menu.title }}</span>
					</NuxtLink>
				</li>
			</ul>
		</div>
		<div class="navbar-end">
			<LayoutNavbarProfile />
		</div>
	</div>
</template>
