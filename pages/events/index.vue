<script lang="ts" setup>
import events from "@/services/events.data"
console.log(events)
</script>

<template>
	<div>
		<EventItem v-for="event in events" :key="event.id" :event="event" />
	</div>
</template>
