const MINUTE_IN_MILLISECONDS = 60000

export function getMilliseconds(num) {
  return num * MINUTE_IN_MILLISECONDS
}

export function getMinutes(num) {
  return num / MINUTE_IN_MILLISECONDS
}
