<script setup lang="ts">
import CardPokemon from '@/modules/pokemon/components/cards/CardPokemon.vue'
</script>

<template>
  <main class="gallery">
    <CardPokemon v-for="n in 25" :key="n" />
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
