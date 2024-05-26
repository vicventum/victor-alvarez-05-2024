<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useGetPokemonTeamData } from '../modules/pokemon/api/composables/use-get-pokemon-team-data'
import { useGetPokemonTeam } from '@/modules/pokemon/api/composables/use-get-pokemon-team'
import CardTeam from '@/modules/pokemon/components/cards-team/CardTeam.vue'

const { pokemonTeam } = await useGetPokemonTeam()
const { pokemonTeamData, refetch } = await useGetPokemonTeamData(pokemonTeam.value)
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
    />
  </DefaultLayout>
</template>

<style lang="scss" scoped>
.card-team {
  margin-bottom: 1.5rem;
}
</style>
