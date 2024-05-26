<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/modules/core/components/base/BaseButton.vue'
import BaseCard from '@/modules/core/components/base/BaseCard.vue'

type Props = {
  id: string
  name: string
  image: string
  // isBordered?: boolean
}
type Emits = {
  'select-pokemon': [id: string]
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const isSelected = ref(false)

function selectPokemon(id: string) {
  isSelected.value = !isSelected.value
  emit('select-pokemon', id)
}
</script>

<template>
  <BaseCard class="pokemon" :class="{ 'pokemon--bordered': isSelected }">
    <img class="pokemon__img" :src="image" :alt="`Pokemon ${name} image`" />

    <div class="pokemon__content">
      <div class="pokemon__text">
        <span class="pokemon__id">#{{ id }}</span>
        <h2 class="pokemon__name">{{ name }}</h2>
      </div>

      <div class="pokemon__actions">
        <BaseButton
          :background="!isSelected ? 'var(--primary)' : 'var(--light-text)'"
          @click="selectPokemon(id)"
        >
          {{ !isSelected ? 'Add' : 'Remove' }}
        </BaseButton>
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

  &--bordered {
    filter: drop-shadow(0px 0px 1px var(--primary));
  }

  &:hover {
    @extend .pokemon--bordered;
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
    filter: drop-shadow(0px 4px 4px var(--light-text));
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
