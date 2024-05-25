<script setup lang="ts">
import type { PokemonList } from '@/modules/pokemon/types/PokemonList'
import CardPokemon from '@/modules/pokemon/components/cards/CardPokemon.vue'

type Props = {
  pokemonList: PokemonList[]
} 
const props = defineProps<Props>()
</script>

<template>
  <main class="gallery">
    <CardPokemon v-for="pokemon in pokemonList" :key="pokemon.id" />
  </main>
</template>

<style lang="scss" scoped>
.gallery {
  display: grid;
  // ? El `minmax` es para obligar a que el contenido de una columna no puede ser más grande que una sección del grid
  grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));

  column-gap: 2rem;
  row-gap: 4rem;
}
</style>
