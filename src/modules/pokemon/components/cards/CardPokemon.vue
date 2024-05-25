<script setup lang="ts">
import BaseButton from '@/modules/core/components/base/BaseButton.vue'
import BaseCard from '@/modules/core/components/base/BaseCard.vue'

type Props = {
  id: string
  name: string
  image: string
}

defineProps<Props>()
</script>

<template>
  <BaseCard class="pokemon">
    <img class="pokemon__img" :src="image" :alt="`Pokemon ${name} image`" />

    <div class="pokemon__content">
      <div class="pokemon__text">
        <span class="pokemon__id">#{{ id }}</span>
        <h2 class="pokemon__name">{{ name }}</h2>
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
    height: 90px;
    // width: 90px;
    width: auto;
    max-width: 140px;

    transform: translateX(-50%) translateY(-50%);
  }

  &__content {
    margin-top: 2.6rem;
    text-align: center;
  }
  &__id {
    color: var(--light-text);
  }
  &__name {
    text-transform: capitalize;
  }

  &__actions {
    margin-top: 1rem;
  }
}
</style>
