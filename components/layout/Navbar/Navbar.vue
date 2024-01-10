<script lang="ts" setup>
import { MENU_DATA } from "@/components/layout/Navbar/menu.data"
</script>

<template>
	<div class="bg-accent">
		<div class="navbar max-w-screen-xl mx-auto">
			<div class="navbar-start">
				<LayoutNavbarMobileMenu />
				<a class="btn btn-ghost text-xl">ITX.AZ</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li v-for="menu in MENU_DATA" :key="menu.title" class="mx-1">
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
	</div>
</template>
