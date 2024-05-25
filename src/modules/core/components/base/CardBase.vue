<script setup lang="ts">

</script>

<template>
	<div class="card">
		<slot/>
	</div>
</template>

<style lang="scss" scoped>
.card {
  padding: 1rem;
	border-radius: var(--border);
	color: var(--on-surface);
  background-color: var(--surface);
}
</style>