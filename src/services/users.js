import Chance from 'chance'

const chance = new Chance()
export const count = 600
let data

export const getData = () => {
  if (!data) buildData()
  return data
}

const getPermissions = () => ({
  payments: chance.bool(),
  accounts: chance.bool(),
  admin: chance.bool(),
  userAccess: chance.bool()
})

const computeRow = index => ({
  id: index,
  date: chance.date().toDateString(),
  firstName: chance.first(),
  lastName: chance.last(),
  age: chance.age(),
  phone: chance.phone(),
  address: chance.address(),
  active: chance.bool(),
  permissions: getPermissions()
})

const buildData = () => {
  data = []
  for (let i = 0; i < count; i++) {
    data.push(computeRow(i))
  }
}

const sorter = id => (a, b) => {
  var nameA = a[id]
  var nameB = b[id]
  if (typeof nameA === 'string') nameA = nameA.toUpperCase()
  if (typeof nameB === 'string') nameB = nameB.toUpperCase()
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1
  return 0
}

const fetchPage = (filter, { page = 0, pageSize = 10, sorts }) => {
  let pD = data
  if (filter) {
    pD = pD.filter(r => filter.active === undefined || !!r.active === filter.active)
  }
  const pageData = []
  const start = page * pageSize
  for (let i = start; i < (start + pageSize); i++) {
    if (i >= 0 && i < pD.length) {
      pageData.push(pD[i])
    }
  }
  return pageData
}

const fetchFilteredCount = filter => {
  if (!filter) return data.length
  return data.filter(r => filter.active === undefined || !!r.active === filter.active).length
}

const sortData = sorts => {
  if (!sorts || !sorts.length) return
  const sort = sorts[0]

  if (!sort || !sort.id) return
  data.sort(sorter(sort.id))

  if (!sort.isAsc) {
    data.reverse()
  }
}

export const compileResult = (filter, meta) => {
  if (!data) buildData()
  sortData(meta.sorts)
  return {
    rows: fetchPage(filter, meta),
    count: filter ? fetchFilteredCount(filter) : count
  }
}

const delay = 1000 // 300

export default (filter = {}, meta={}) => new Promise((resolve, reject) => {
  window.setTimeout(() => resolve(compileResult(filter, meta)), 500 + chance.integer({min: 0, max: delay}))
})
