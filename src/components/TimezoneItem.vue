<template>
  <div flex="~ wrap" gap2 py1 w-full items-center>
    <div font-bold w-8 ma op80>
      {{ offset }}
    </div>
    <div flex="~ col" text-left flex-auto>
      <div>
        {{ city }}
        <sup border="~ base rounded" px1>{{ timezone.abbr }}</sup>
      </div>
      <div text-sm leading-1em op50>{{ state }}</div>
    </div>
    <div tabular-nums>{{ time }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Timezone } from '../type'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  hour12: false,
  hour: 'numeric',
  minute: 'numeric'
})

const state = $computed(() => timezone.name.split('/')[0])
const city = $computed(() => timezone.name.split('/')[1].replace(/_/g, ' '))
const offset = $computed(() =>
  timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset
)
const time = $computed(() => formatter.format(now.value))
</script>

<style scoped></style>
