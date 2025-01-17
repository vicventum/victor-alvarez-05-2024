<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseButton from '@/modules/core/components/base/BaseButton.vue'
import BaseCard from '@/modules/core/components/base/BaseCard.vue'

type Props = {
  id: string
  name: string
  image: string
  isAdded?: boolean
  isBlocked?: boolean
}
type Emits = {
  'select-pokemon': [id: string]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const isSelected = ref(false)

function selectPokemon(id: string) {
  isSelected.value = !isSelected.value
  emit('select-pokemon', id)
}

const cardComputedClasses = computed(() => {
  return {
    'pokemon--blocked': props.isBlocked,
    'pokemon--bordered-added': props.isAdded,
    'pokemon--bordered-selected': isSelected.value
  }
})
const buttonText = computed(() => {
  if (props.isAdded) return 'Added'
  return isSelected.value ? 'Remove' : 'Add'
})
</script>

<template>
  <BaseCard class="pokemon" :class="cardComputedClasses">
    <img class="pokemon__img" :src="image" :alt="`Pokemon ${name} image`" />

    <div class="pokemon__content">
      <div class="pokemon__text">
        <span class="pokemon__id">#{{ id }}</span>
        <h2 class="pokemon__name">{{ name }}</h2>
      </div>

      <div class="pokemon__actions">
        <BaseButton
          :background="isSelected || isAdded ? 'var(--light-text)' : 'var(--primary)'"
          :disabled="isAdded || (isBlocked && !isSelected)"
          @click="selectPokemon(id)"
        >
          {{ buttonText }}
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<style lang="scss" scoped>
.pokemon {
  position: relative;
  // cursor: pointer;

  transition-property: box-shadow, filter;
  transition-duration: 0.1s;
  transition-timing-function: ease-out;

  // height: 10rem;
  &--blocked {
    filter: brightness(0.9);
  }
  &--bordered-selected {
    filter: drop-shadow(0px 0px 1px var(--primary));
  }
  &--bordered-added {
    filter: drop-shadow(0px 0px 1px var(--light-text));
  }

  &:hover:not(.pokemon--bordered-added, .pokemon--blocked) {
    @media (min-width: 560px) {
      // @extend .pokemon--bordered-selected;
      filter: drop-shadow(0px 0px 1px var(--primary));
    }
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
