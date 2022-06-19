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
let edgeStart = $ref(0)
let edgeEnd = $ref(0)
const leftEdge = $computed(() => Math.min(edgeStart, edgeEnd))
const rightEdge = $computed(() => Math.max(edgeStart, edgeEnd))
const width = $computed(() => Math.abs(edgeStart - edgeEnd))

function rounded(x: number) {
  let n = Math.round(x / dayCellWidth)
  n = Math.max(0, n)
  n = Math.min(24, n)
  return n * dayCellWidth
}

const position = computed(() => ({
  left: `${leftEdge}px`,
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${width}px`
}))

const leftWhiteout = computed(() => ({
  left: 0,
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${leftEdge}px`
}))

const rightWhiteout = computed(() => ({
  right: 0,
  left: `${rightEdge}px`,
  top: `${top}px`,
  bottom: `${bottom}px`
}))

const { pressed } = useMousePressed()
const { x, y } = useMouse()
const overlay = ref<HTMLElement>()
const box = reactive(useElementBounding(overlay))

whenever(
  pressed,
  (i) => {
    edgeStart = rounded(x.value - box.left)
    edgeEnd = edgeStart
  },
  { flush: 'sync' }
)

watchEffect(() => {
  if (!pressed.value) return
  edgeEnd = rounded(x.value - box.left)
})
</script>

<style scoped></style>
