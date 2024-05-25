<script setup lang="ts">
import BaseButton from '@/modules/core/components/base/BaseButton.vue';
import BaseCard from '@/modules/core/components/base/BaseCard.vue'
</script>

<template>
  <BaseCard class="pokemon">
    <img
			class="pokemon__img"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
      alt="Pokemon image"
    />

		<div class="pokemon__content">
			<div class="pokemon__text">
				<span class="pokemon__id">#2</span>
				<h2>Ivysaur</h2>
			</div>

			<div class="pokemon__actions">
				<BaseButton>Add</BaseButton>
			</div>
		</div>
  </BaseCard>
</template>

<style lang="scss" scoped>
.pokemon {
	position: relative;
	cursor: pointer;

	transition-property: box-shadow, filter;
	transition-duration: 0.1s;
	transition-timing-function: ease-out;

	// height: 10rem;

	&:hover {
		filter: drop-shadow(0px 0px 1px var(--primary));
		// transform: scale(1.01);
	}

	&__img {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);

		width: 90px;
	}

	&__content {
		margin-top: 2.6rem;
		text-align: center;
	}
	&__id {
		color: var(--light-text);
	}

 	&__actions {
		margin-top: 1rem;
	}
}
</style>
