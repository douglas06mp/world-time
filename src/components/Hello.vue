<template>
  <div>
    <h1>hello!! {{ name }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String
})
</script>

<style scoped></style>
