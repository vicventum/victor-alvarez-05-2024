<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useGetPokemonTeamData } from '../modules/pokemon/api/composables/use-get-pokemon-team-data'
import { useGetPokemonTeam } from '@/modules/pokemon/api/composables/use-get-pokemon-team'

const { pokemonTeam, refetch } = await useGetPokemonTeam()
console.log('🚀 ~ totalPokemonTeam:', pokemonTeam.value)
const { pokemonTeamData } = await useGetPokemonTeamData(pokemonTeam.value)
</script>

<template>
  <DefaultLayout> {{ pokemonTeamData }} </DefaultLayout>
</template>
