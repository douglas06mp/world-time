import { Timezone } from '../type'

export const zones = $ref<Timezone[]>([])

export const addToTimezone = (timezone: Timezone) => {
  zones.push(timezone)
}
