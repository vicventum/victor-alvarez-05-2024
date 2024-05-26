<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { PokemonList } from '@/modules/pokemon/types/PokemonList'
import CardPokemon from '@/modules/pokemon/components/cards/CardPokemon.vue'

type Props = {
  pokemonTeam: string[]
  pokemonList: PokemonList[]
  maxPokemons?: number
  maxTeam?: number
}
type Emits = {
  'change-select-pokemons': [selectedPokemons: string[]]
}
const props = withDefaults(defineProps<Props>(), {
  maxPokemons: Infinity,
  maxTeam: Infinity
})
const emit = defineEmits<Emits>()
const selectedPokemons = ref(new Set<string>([]))

function addPokemon(id: string) {
  const isPokemonAdded = selectedPokemons.value.has(id)
  if (!isPokemonAdded) selectedPokemons.value.add(id)
  else selectedPokemons.value.delete(id)
}

const isCardBlocked = computed(
  () => props.pokemonTeam.length + selectedPokemons.value.size >= props.maxTeam
)

watch(
  () => selectedPokemons.value.size,
  () => {
    const arrSelectedPokemons = [...selectedPokemons.value]
    emit('change-select-pokemons', arrSelectedPokemons)
  }
)
watch(
  () => props.pokemonTeam,
  () => {
    selectedPokemons.value = new Set<string>([])
  },
  { deep: true }
)
</script>

<template>
  <main class="gallery">
    <template v-for="pokemon in pokemonList" :key="pokemon.id">
      <CardPokemon
        v-if="Number(pokemon.id) <= maxPokemons"
        :id="pokemon.id"
        :name="pokemon.name"
        :image="pokemon.image"
        :url="pokemon.url"
        :is-added="pokemonTeam.includes(pokemon.id)"
        :is-blocked="isCardBlocked"
        @select-pokemon="addPokemon"
      />
    </template>
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
