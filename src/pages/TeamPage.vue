<script setup lang="ts">
import type { Ref } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import CardTeam from '@/modules/pokemon/components/cards-team/CardTeam.vue'

import { useGetPokemonTeamData } from '../modules/pokemon/api/composables/use-get-pokemon-team-data'
import { useGetPokemonTeam } from '@/modules/pokemon/api/composables/use-get-pokemon-team'
import { usePutPokemons } from '@/modules/pokemon/api/composables/use-put-pokemons'

const { pokemonTeam, refetch } = await useGetPokemonTeam()
const { pokemonTeamData } = await useGetPokemonTeamData()

async function deletePokemon({ id, name }: { id: string; name: string }) {
  const isConfimDelte = confirm(`Remove "${name}" from your team?`)
  if (!isConfimDelte) return null
  const teamUpdated = pokemonTeam.value.filter((pokemonId) => pokemonId !== id)
  await usePutPokemons(teamUpdated)
  // FIXME: Refactorizar luego
  setTimeout(() => refetch(), 700)
}

function playSound(audioRef: Ref) {
  if (audioRef.value) audioRef.value.play()
}
</script>

<template>
  <DefaultLayout>
    <CardTeam
      class="card-team"
      v-for="pokemon in pokemonTeamData"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
      :image="pokemon.image"
      :types="pokemon.types"
      :stats="pokemon.stats"
      :cries="pokemon.cries"
      @click-sound="playSound"
      @click-delete="deletePokemon"
    />
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.card-team {
  margin-bottom: 1.5rem;
}
</style>
