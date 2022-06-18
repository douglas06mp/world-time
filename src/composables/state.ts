import { Timezone } from '../type'

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone
export interface State {
  name?: string
  description?: string
  zones: string[]
  home: string
  date: Date
  selection: Selection[]
}

export interface Selection {
  from: Date
  to: Date
}

export const storage = useStorage<State>('world-time-state', {
  zones: [userTimezone],
  home: userTimezone,
  date: new Date(),
  selection: []
})

export const now = useNow({ interval: 30000 })
export const zoneNames = toRef(storage.value, 'zones')
export const homeZone = toRef(storage.value, 'home')
export const homeOffset = computed(
  () => timezones.find((i) => i.name === homeZone.value)?.offset || 0
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

export const setHomeZone = (timezone: Timezone) => {
  homeZone.value = timezone.name
}

if (!zoneNames.value?.length) zoneNames.value = [userTimezone]
