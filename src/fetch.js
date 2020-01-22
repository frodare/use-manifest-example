const data = [
  { id: 1, name: 'aalso', active: true },
  { id: 2, name: 'bladfasjh', active: true },
  { id: 3, name: 'calso', active: true },
  { id: 4, name: 'dalso' },
  { id: 5, name: 'ealso' },
  { id: 6, name: 'falso' },
  { id: 7, name: 'galso' },
  { id: 8, name: 'halso', active: true },
  { id: 9, name: 'ialso', active: true },
  { id: 10, name: 'jalso', active: true },
  { id: 11, name: 'kalso', active: true },
  { id: 12, name: 'lalso' },
  { id: 13, name: 'malso' },
  { id: 14, name: 'nalso' },
  { id: 15, name: 'oalso' },
  { id: 16, name: 'palso', active: true },
  { id: 17, name: 'qalso', active: true },
  { id: 18, name: 'ralso', active: true },
  { id: 19, name: 'salso', active: true },
  { id: 20, name: 'ualso', active: true },
  { id: 21, name: 'valso', active: true },
  { id: 22, name: 'wladfasjh', active: true },
  { id: 23, name: 'xalso', active: true },
  { id: 24, name: 'yalso' },
  { id: 25, name: 'zalso' },
  { id: 26, name: 'aalso' },
  { id: 30, name: 'ealso', active: true },
  { id: 31, name: 'falso', active: true },
  { id: 32, name: 'galso' },
  { id: 33, name: 'halso' },
  { id: 34, name: 'ialso' },
  { id: 35, name: 'jalso' },
  { id: 36, name: 'kalso', active: true },
  { id: 37, name: 'lalso', active: true },
  { id: 38, name: 'malso', active: true },
  { id: 39, name: 'nalso', active: true },
  { id: 40, name: 'oalso', active: true },
  { id: 41, name: 'palso', active: true },
  { id: 42, name: 'qladfasjh', active: true },
  { id: 43, name: 'ralso', active: true },
  { id: 44, name: 'salso' },
  { id: 45, name: 'ualso' },
  { id: 46, name: 'valso' },
  { id: 47, name: 'walso' },
  { id: 48, name: 'xalso', active: true },
  { id: 49, name: 'yalso', active: true },
  { id: 50, name: 'zalso', active: true },
  { id: 51, name: 'aalso', active: true },
  { id: 52, name: 'balso' },
  { id: 53, name: 'calso' },
  { id: 54, name: 'dalso' },
  { id: 55, name: 'ealso' },
  { id: 56, name: 'falso', active: true },
  { id: 57, name: 'galso', active: true },
  { id: 58, name: 'halso', active: true },
  { id: 59, name: 'ialso', active: true },
  { id: 60, name: 'jalso', active: true },
  { id: 61, name: 'kalso', active: true },
  { id: 62, name: 'lladfasjh', active: true },
  { id: 63, name: 'malso', active: true },
  { id: 64, name: 'nalso' },
  { id: 65, name: 'oalso' },
  { id: 66, name: 'palso' },
  { id: 67, name: 'qalso' },
  { id: 68, name: 'ralso', active: true },
  { id: 69, name: 'salso', active: true },
  { id: 70, name: 'ualso', active: true },
  { id: 71, name: 'valso', active: true },
  { id: 72, name: 'walso' },
  { id: 73, name: 'xalso' },
  { id: 74, name: 'yalso' },
  { id: 75, name: 'zalso' },
  { id: 76, name: 'aalso', active: true },
  { id: 77, name: 'balso', active: true },
  { id: 78, name: 'calso', active: true },
  { id: 79, name: 'dalso', active: true }
]

export default async (filter, meta) => {
  await wait(500)
  const { page, pageSize, sorts } = meta
  const allRows = data.filter(r => filter.active === undefined || !!r.active === filter.active)

  if (sorts.length) {
    const { id, isAsc } = sorts[0]
    const mod = isAsc ? 1 : -1
    allRows.sort((a, b) => (a[id] > b[id] ? 1 : -1) * mod)
  }

  const rows = allRows.filter((r, i) => {
    const start = page * pageSize
    const end = start + pageSize

    return i >= start && i < end
  })

  return {
    rows,
    count: allRows.length
  }
}

const wait = delay => new Promise(resolve => setTimeout(() => resolve(), delay))
