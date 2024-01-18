<script lang="ts" setup>
import events from "@/services/events.data"
</script>

<template>
	<div class="flex py-4">
		<div class="basis-9/12">
			<EventTopBar />
			<EventItem v-for="event in events" :key="event.id" :event="event" />
		</div>
		<EventSidebar class="basis-3/12" />
	</div>
</template>
