<template>
  <div flex gap2 py1>
    <div font-bold w-8 ma op80>
      {{ offset }}
    </div>
    <div flex="~ col" text-left>
      <div>{{ city }}</div>
      <div text-sm leading-1em op50>{{ state }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timezone } from '../type'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const state = $computed(() => timezone.name.split('/')[0])
const city = $computed(() => timezone.name.split('/')[1])
const offset = $computed(() =>
  timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset
)
</script>

<style scoped></style>
