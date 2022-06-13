<template>
  <button i-carbon-sun dark:i-carbon-moon @click="toggleDark()"></button>
</template>

<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped></style>
