<script setup lang="ts">
import { onUnmounted, type Ref } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BaseCard from '@/modules/core/components/base/BaseCard.vue'
import CardTeam from '@/modules/pokemon/components/cards-team/CardTeam.vue'

import { useGetPokemonTeamData } from '../modules/pokemon/api/composables/use-get-pokemon-team-data'
import { useGetPokemonTeam } from '@/modules/pokemon/api/composables/use-get-pokemon-team'
import { usePutPokemons } from '@/modules/pokemon/api/composables/use-put-pokemons'

const { pokemonTeam, refetch, cleanEffects: cleanEffectsTeam } = await useGetPokemonTeam()
const {
  pokemonTeamData,
  isLoading,
  isError,
  cleanEffects: cleanEffectsTeamData
} = await useGetPokemonTeamData()

async function deletePokemon({ id, name }: { id: string; name: string }) {
  const isConfirmDelete = confirm(`Remove "${name}" from your team?`)
  if (!isConfirmDelete) return null
  const teamUpdated = pokemonTeam.value.filter((pokemonId) => pokemonId !== id)
  await usePutPokemons(teamUpdated)
  // FIXME: Refactorizar luego
  setTimeout(() => refetch(), 700)
}

function playSound(audioRef: Ref) {
  if (audioRef.value) audioRef.value.play()
}

onUnmounted(() => {
  cleanEffectsTeamData()
  cleanEffectsTeam()
})
</script>

<template>
  <DefaultLayout>
    <h1 v-if="!pokemonTeamData.length" class="empty">
      You don't have pokemon on your team, catch some!
    </h1>
    <template v-else>
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
    </template>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.empty,
.loading,
.error {
  text-align: center;
}
.card-team {
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
</style>
