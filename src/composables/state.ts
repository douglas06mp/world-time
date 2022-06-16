import { Timezone } from '../type'

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

export const now = useNow({ interval: 30000 })
export const zoneNames = useStorage<string[]>('world-time-zones', [])

export const currentZone = ref(userTimezone)
export const currentOffset = ref(
  timezones.find((i) => i.name === currentZone.value).offset
)

export const zones = computed(() =>
  zoneNames.value.map((name) => timezones.find((i) => i.name === name))
)

export const addToTimezone = (timezone: Timezone) => {
  zoneNames.value.push(timezone.name)
}

export const removeZone = (timezone: Timezone) => {
  zoneNames.value = zoneNames.value.filter((name) => name !== timezone.name)
}

export const moveZone = (timezone: Timezone, delta: 1 | -1) => {
  const index = zoneNames.value.indexOf(timezone.name)
  if (index === -1) return

  const target = index + delta
  const other = zoneNames.value[target]
  zoneNames.value[target] = timezone.name
  zoneNames.value[index] = other
}

if (!zones.value.length) zoneNames.value.push(userTimezone)
