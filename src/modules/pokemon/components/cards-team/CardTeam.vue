<script setup lang="ts">
import { ref, type Ref } from 'vue'
import BaseButton from '@/modules/core/components/base/BaseButton.vue'
import BaseCard from '@/modules/core/components/base/BaseCard.vue'
import BaseTag from '@/modules/core/components/base/BaseTag.vue'

type Props = {
  id: string
  name: string
  image?: string
  types: string[]
  stats: object[]
  cries: { latest: string; legacy: string }
}
type Emits = {
  'click-sound': [Ref]
  'click-delete': [{ id: string; name: string }]
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const audioRef = ref()

function clickSound() {
  emit('click-sound', audioRef)
}
function clickDelete({ id, name }: { id: string; name: string }) {
  emit('click-delete', { id, name })
}
</script>

<template>
  <BaseCard class="card">
    <img class="card__image" :src="image" :alt="`Pokemon ${name} image`" />

    <div class="card__content">
      <h2 class="card__title">
        {{ name }} <span class="card__id h4">#{{ id }}</span>
      </h2>
      <div class="card__types">
        <h3 class="card__types-title h4">Types</h3>

        <div class="card__types-tags">
          <BaseTag class="card__types-tag caption" v-for="type in types" :key="type">
            {{ type }}
          </BaseTag>
        </div>
      </div>
    </div>

    <div class="card__actions">
      <audio ref="audioRef" :src="cries.latest" />
      <BaseButton class="card__sound" @click="clickSound">Sound</BaseButton>
      <BaseButton
        class="card__sound"
        background="hsla(2, 100%, 64%, 0.09)"
        color="var(--light-text)"
        @click="clickDelete({ id, name })"
      >
        Delete
      </BaseButton>
    </div>
  </BaseCard>
</template>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: 7rem 1fr auto;
  // align-items: center;
  gap: 1rem;

  height: 150px;

  &__image {
    width: 100%;
    height: 100%;
  }

  &__content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  &__title {
    text-transform: capitalize;
  }
  &__id {
    color: var(--light-text);
  }

  &__types-title {
    color: var(--light-text);
  }
  &__types-tag {
    margin-right: 0.5rem;
  }

  &__actions {
    align-self: center;
    display: flex;
    gap: 0.5rem;
  }
}
</style>
