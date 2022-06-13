<template>
  <div relative>
    <input
      v-model="input"
      type="text"
      placeholder="Search timezone..."
      px2
      py1
      border="~ gray/15 rounded"
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
import { timezones } from '../composables/data'
import { Timezone } from '../type'
import Fuse from 'fuse.js'
import { addToTimezone } from '../composables/state'

const fuse = new Fuse<Timezone>(timezones, {
  keys: ['name']
})

const input = ref('')
const searchResult = computed(() => {
  return fuse.search(input.value)
})

const add = (t: Timezone) => {
  addToTimezone(t)
  input.value = ''
}
</script>

<style></style>
