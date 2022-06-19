<template>
  <div of-x-auto relative>
    <div
      v-for="(zone, idx) in zones.value"
      :key="zone.name"
      flex="~ gap3"
      p="x2 y2"
      border="b base"
      relative
    >
      <div text-xl flex="~ col" justify-center items-center w-5>
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
        <!-- <button
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
        ></button> -->
      </div>
      <TimezoneItem :timezone="zone" w-max>
        <TimeDial :timezone="zone" />
      </TimezoneItem>
    </div>
    <SelectionOverlay absolute inset-0 />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
