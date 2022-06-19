<template>
  <div relative>
    <div flex="~ col" absolute left--6 top-0 bottom-0>
      <div
        v-for="(zone, idx) in zones.value"
        :key="zone.name"
        :class="itemHeight"
        flex="~ col none"
        text-xl
        justify-center
        items-center
      >
        <div text-xl flex="~ col" justify-center items-center w-5>
          <button
            v-if="idx !== 0"
            @click="moveZone(zone, -1)"
            i-ri-arrow-up-s-fill
            icon-btn
            title="Move up"
            m--1px
          ></button>
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
    <div of-x-auto of-visible>
      <div v-for="zone of zones.value" :key="zone.name" border="b base">
        <div flex="~ col" gap3 px3 items-center>
          <TimezoneItem :timezone="zone" :class="itemHeight" />
          <TimeDial :timezone="zone" />
        </div>
      </div>
    </div>
    <SelectionOverlay absolute inset-0 />
  </div>
</template>

<script setup lang="ts">
const itemHeight = 'h15'
</script>

<style scoped></style>
