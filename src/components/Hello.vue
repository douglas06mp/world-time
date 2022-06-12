<template>
  <div>
    <h1>hello!! {{ uppercase }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String
})

const uppercase = computed(() => props.name.toUpperCase())
</script>

<style scoped></style>
