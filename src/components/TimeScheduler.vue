<template>
  <div>
    <div v-for="zone in zones.value" :key="zone.name" p="x4 y2" border="b base">
      <TimezoneItem :timezone="zone" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
