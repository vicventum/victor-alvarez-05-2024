<script setup lang="ts">
import { ref, watch } from 'vue'
import type { PokemonList } from '@/modules/pokemon/types/PokemonList'
import CardPokemon from '@/modules/pokemon/components/cards/CardPokemon.vue'
import { utilIsDifferentArray } from '@/modules/core/utils/util-is-different-array'

type Props = {
  pokemonList: PokemonList[]
}
type Emits = {
  'change-select-pokemons': [selectedPokemons: string[]]
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// const selectedPokemons = []
const selectedPokemons = ref(new Set<string>([]))

function addPokemon(id: string) {
  console.log('🟠 ~ addPokemon ~ id:', id, selectedPokemons)
  const isPokemonAdded = selectedPokemons.value.has(id)
  if (isPokemonAdded) {
    selectedPokemons.value.delete(id)
  } else {
    selectedPokemons.value.add(id)
  }
}

watch(
  () => selectedPokemons.value.size,
  () => {
    const arrSelectedPokemons = [...selectedPokemons.value]
    emit('change-select-pokemons', arrSelectedPokemons)
  }
)
</script>

<template>
  <main class="gallery">
    <CardPokemon
      v-for="pokemon in pokemonList"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
      :image="pokemon.image"
      :url="pokemon.url"
      @select-pokemon="addPokemon"
    />
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
