<template>
  <div relative>
    <input
      v-model="input"
      type="text"
      placeholder="Search timezone..."
      p="x3 y2"
      text-xl
      border="~ base rounded"
      w-full
      bg-transparent
    />
    <div v-show="input" absolute top-full bg-gray-900 left-0 right-0>
      <button v-for="i of searchResult" :key="i.refIndex" @click="add(i.item)" flex gap2>
        <div font-mono w-10 text-right>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
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
const searchResult = computed(() => {
  return fuse.search(input)
})

const add = (t: Timezone) => {
  addToTimezone(t)
  input = ''
  index = 0
}
</script>

<style></style>
