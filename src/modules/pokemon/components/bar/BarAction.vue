<script setup lang="ts">
import BaseCard from '@/modules/core/components/base/BaseCard.vue'
import BaseButton from '@/modules/core/components/base/BaseButton.vue'

type Props = {
  totalTeam?: number
}
type Emits = {
  'add-team': []
}
const props = withDefaults(defineProps<Props>(), {
  totalTeam: 0
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
        <span class="bar__team-number">{{ totalTeam }} pokemons</span>
      </div>

      <div class="bar__actions">
        <BaseButton class="bar__add-btn" @click="addTeam">Add to my team</BaseButton>
      </div>
    </BaseCard>
  </section>
</template>

<style lang="scss" scoped>
.bar {
  position: sticky;
  top: .5rem;
  z-index: 100;

  box-shadow: 0 2px 4px 0px var(--light-darken-1);

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
