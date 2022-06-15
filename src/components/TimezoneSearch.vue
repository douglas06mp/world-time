<template>
  <div relative>
    <input
      v-model="input"
      @keydown="onKeywdown"
      type="text"
      placeholder="Search timezone..."
      p="x3 y2"
      text-xl
      border="~ base rounded"
      w-full
      bg-transparent
    />
    <div
      v-show="input"
      absolute
      top-full
      bg-base
      border="~ base"
      p1
      left-0
      right-0
      max-h-100
      overflow-auto
    >
      <button
        v-for="(i, idx) of searchResult"
        :key="i.refIndex"
        :class="idx === index ? 'bg-gray:10' : ''"
        @click="add(i.item)"
        block
        w-full
        flex
        gap2
      >
        <TimezoneItem :timezone="i.item" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timezone } from '../type'
import Fuse from 'fuse.js'

const fuse = new Fuse<Timezone>(timezones, {
  keys: ['name']
})

let input = $ref('')
let index = $ref(0)
const searchResult = $computed(() => {
  return fuse.search(input)
})

const add = (t: Timezone) => {
  addToTimezone(t)
  input = ''
  index = 0
}

const onKeywdown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown') index = (index + 1) % searchResult.length
  else if (e.key === 'ArrowUp')
    index = (index - 1 + searchResult.length) % searchResult.length
  else if (e.key === 'Enter') add(searchResult[index].item)
}
</script>

<style></style>
