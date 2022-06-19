<template>
  <div v-show="pressed" pointer-events-none ref="overlay">
    <div :style="leftWhiteout" absolute bg-base op80></div>
    <div :style="position" absolute border="3 green6 rounded" shadow></div>
    <div :style="rightWhiteout" absolute bg-base op80></div>
  </div>
</template>

<script setup lang="ts">
const top = $ref(0)
const bottom = $ref(0)
let leftEdge = $ref(400)
let rightEdge = $ref(100)
const left = $computed(() => Math.min(leftEdge, rightEdge))
const right = $computed(() => Math.max(leftEdge, rightEdge))

const position = computed(() => ({
  left: `${left}px`,
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${right - left}px`
}))

const leftWhiteout = computed(() => ({
  left: 0,
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${left}px`
}))

const rightWhiteout = computed(() => ({
  right: 0,
  left: `${right}px`,
  top: `${top}px`,
  bottom: `${bottom}px`
}))

const { pressed } = useMousePressed()
const { x, y } = useMouse()
const overlay = ref<HTMLElement>()
const box = reactive(useElementBounding(overlay))

useEventListener('mousedown', (e) => {
  leftEdge = x.value - box.left
})

watchEffect(() => {
  if (!pressed.value) return
  rightEdge = x.value - box.left
})
</script>

<style scoped></style>
