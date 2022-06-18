<template>
  <div>
    <div
      v-for="(zone, idx) in zones.value"
      :key="zone.name"
      p="x4 y2"
      border="b base"
      relative
    >
      <TimezoneItem :timezone="zone">
        <TimeDial :timezone="zone" />
      </TimezoneItem>
      <div absolute left="-6" top-0 bottom-0 text-xl flex="~ col" justify-center>
        <button
          v-if="homeZone.value !== zone.name"
          @click="removeZone(zone)"
          i-ri-close-fill
          icon-btn
          title="Remove"
          m--1px
        ></button>
        <button
          v-if="homeZone.value !== zone.name"
          @click="setHomeZone(zone)"
          i-ri-home-2-fill
          icon-btn
          title="Set to home zone"
          m--1px
          scale-75
        ></button>
        <button
          v-if="idx !== 0"
          @click="moveZone(zone, -1)"
          i-ri-arrow-up-s-fill
          icon-btn
          title="Move up"
          m--1px
        ></button>
        <button
          v-if="idx !== zones.value.length - 1"
          @click="moveZone(zone, 1)"
          i-ri-arrow-down-s-fill
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
