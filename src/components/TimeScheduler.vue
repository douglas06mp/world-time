<template>
  <div>
    <div
      v-for="(zone, idx) in zones.value"
      :key="zone.name"
      p="x4 y2"
      border="b base"
      relative
    >
      <TimezoneItem :timezone="zone" />
      <div absolute left="-6" top-0 bottom-0 text-xl flex="~ col" justify-center>
        <button
          @click="removeZone(zone)"
          i-carbon-close
          icon-btn
          title="Remove"
          m--1px
        ></button>
        <button
          v-if="idx !== 0"
          @click="moveZone(zone, -1)"
          i-carbon-caret-up
          icon-btn
          title="Move up"
          m--1px
        ></button>
        <button
          v-if="idx !== zones.value.length - 1"
          @click="moveZone(zone, 1)"
          i-carbon-caret-down
          icon-btn
          title="Move down"
          m--1px
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
