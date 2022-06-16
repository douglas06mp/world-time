<template>
  <div flex="~ gap1" of-auto items-end>
    <template v-for="(day, idx) of days" :key="idx">
      <div v-if="day.length" flex border="~ sky7/30 rounded" of-hidden>
        <div
          v-for="i in day"
          :key="i"
          :class="[
            isMidnight(i) ? 'bg-sky7/70 text-white' : isNight(i) ? 'bg-sky7/20' : ''
          ]"
          flex="~ col none"
          w-7
          h-8
          items-center
          justify-center
        >
          <div v-if="i">{{ i }}</div>
          <div v-else text="xs white" leading-1em text-center>
            {{ format(now.value, 'MMM') }}
            {{ format(now.value, 'dd') }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { Timezone } from '@/type'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const hours = $computed(() =>
  Array.from({ length: 24 }, (_, i) => i + timezone.offset + 1)
)
const lastDay = $computed(() => hours.filter((i) => i < 0).map((i) => (i + 24) % 24))
const today = $computed(() => hours.filter((i) => i >= 0 && i < 24))
const tomorrow = $computed(() => hours.filter((i) => i >= 24).map((i) => i % 24))

const days = $computed(() => [lastDay, today, tomorrow])

const isMidnight = (h: number) => h <= 5 || h >= 22
const isNight = (h: number) => h <= 7 || h >= 18
</script>

<style scoped></style>
