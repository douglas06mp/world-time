<template>
  <div flex="~ col md:row" gap3 py1>
    <div flex="~ wrap" gap3 items-center>
      <div :title="`${timezone.offset} GMT`" font-bold w-8 ma op80 text-center>
        <div v-if="timezone.name === homeZone.value" i-ri-home-2-fill ma op50></div>
        <div v-else text-sky6>{{ offset }}</div>
      </div>
      <div flex="~ col" text-left flex-auto w-30>
        <div>
          {{ city }}
          <sup border="~ base rounded" px1>{{ timezone.abbr }}</sup>
        </div>
        <div text-sm leading-1em op50>{{ state }}</div>
      </div>
      <div tabular-nums text-sm w-20>{{ time }}</div>
    </div>
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
  hour12: true,
  hour: 'numeric',
  minute: 'numeric'
})

const state = $computed(() => timezone.name.split('/')[0])
const city = $computed(() => timezone.name.split('/')[1]?.replace(/_/g, ' '))
const offset = $computed(() => {
  const offset = timezone.offset - homeOffset.value
  return offset > 0 ? `+${offset}` : offset
})
const time = $computed(() => formatter.format(now.value))
</script>

<style scoped></style>
