'use strict'

const pad = (str, size) => (new Array(size + 1).join('0') + str).slice(-size)

const globalCount = (() => {
  let count = 0
  const window = window || global

  for (let i in window) {
    count++
  }

  return count
}())

const navi = navigator.mimeTypes.length + navigator.userAgent.length

const fingerprint = pad(navi.toString(36) + globalCount.toString(36), 4)

export default () => fingerprint
