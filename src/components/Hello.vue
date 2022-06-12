<template>
  <div text="blue 4xl" font="sans normal">hello!! {{ uppercase }}</div>
  <div i-carbon-bee text="4xl yellow"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String
})

const uppercase = computed(() => props.name.toUpperCase())
</script>

<style scoped></style>
