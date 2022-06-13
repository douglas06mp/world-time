import { Timezone } from '../type'
import timezoneRaw from 'timezones.json'

export const timezones: Timezone[] = timezoneRaw.flatMap((i) =>
  i.utc.map((u) => ({
    name: u,
    offset: i.offset,
    isdst: i.isdst
  }))
)
