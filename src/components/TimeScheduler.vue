<template>
  <div relative select-none>
    <div flex="~ col" absolute left--6 top-0 bottom-0>
      <div
        v-for="(zone, idx) in zones.value"
        :key="zone.name"
        :style="{ height: `${timezoneItemHeight}px` }"
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
    <div of-x-auto of-visible relative>
      <div v-for="zone of zones.value" :key="zone.name" border="b base">
        <div flex="~ row" items-center w-max>
          <TimezoneItem
            :timezone="zone"
            :style="{
              width: `${timezoneItemWidth}px`,
              height: `${timezoneItemHeight}px`
            }"
            flex-none
            px3
          />
          <TimeDial :timezone="zone" />
        </div>
      </div>
    </div>
    <SelectionOverlay
      :style="{ left: `${timezoneItemWidth}px` }"
      absolute
      inset-0
      w-full
    />
  </div>
</template>

<script setup lang="ts">
const itemHeight = 'h15'
</script>

<style scoped></style>
