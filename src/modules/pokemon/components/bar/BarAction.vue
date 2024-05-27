<script setup lang="ts">
import BaseCard from '@/modules/core/components/base/BaseCard.vue'
import BaseButton from '@/modules/core/components/base/BaseButton.vue'

type Props = {
  totalTeam?: number
  totalSelected?: number
  isButtonDisabled?: boolean
  maxTeam?: number
}
type Emits = {
  'add-team': []
}
const props = withDefaults(defineProps<Props>(), {
  totalTeam: 0,
  totalSelected: 0,
  isButtonDisabled: false,
  maxTeam: Infinity
})
const emit = defineEmits<Emits>()

function addTeam() {
  emit('add-team')
}
</script>

<template>
  <section class="bar">
    <BaseCard class="bar__inner">
      <div class="bar__content">
        <img class="bar__icon" src="@/assets/img/pokeball.svg" alt="Pokeball icon" />
        <h2 class="bar__team-title">My team:</h2>
        <span class="bar__team-number">{{ totalTeam }} / {{ maxTeam }} pokemons</span>
      </div>

      <div class="bar__actions">
        <BaseButton class="bar__add-btn" :disabled="isButtonDisabled" @click="addTeam">
          Add to my team ({{ totalSelected }})
        </BaseButton>
      </div>
    </BaseCard>
  </section>
</template>

<style lang="scss" scoped>
.bar {
  position: sticky;
  top: 0.5rem;
  z-index: 100;

  box-shadow: 0 2px 4px 0px var(--light-darken-1);

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 560px) {
      flex-direction: row;
    }
  }
  &__icon {
    width: 2.5rem;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  &__team-title {
    font-weight: bold;
    font-size: var(--h3-size);
    color: var(--light-text);
  }
  &__team-number {
    font-weight: 500;
    color: var(--primary-lighten-1);
  }
}
</style>
