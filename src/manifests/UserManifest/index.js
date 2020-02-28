import React, { useState } from 'react'
import { Manifest, useCell, DefaultManifestTable, Debug } from 'use-manifest'

import users from '../../services/users'
import def from './definition'

const count = 1000

// const fetchRows = async (...args) => console.log('fetching rows', ...args) || new Array(count).fill(null).map((_,i) => [{firstName: 'Howdy ' + i,lastName: 'Boo' + i}])

// const fetchCount = async (...args) => console.log('fetching count', ...args) || count

const fetchRows = async (...args) => {
  console.log('fetching rows', ...args)
  const r = await users(...args)
  return r.rows
}

const fetchCount = async (...args) => {
  console.log('fetching count', ...args)
  const r = await users(...args)
  return r.count
}

// const Content = () => {
//   const {rows, count, page, pageSize, load} = useManfiest({ fetchCount, fetchRows })
//   const rows = useManfiestRows()


// }


export default () => {

  const [filter, setFilter] = useState()


  return (
    <div className='App'>
      <button onClick={() => setFilter('test')}>test</button>

      <div>
        <button onClick={() => setFilter(true)}>Active</button>
        <button onClick={() => setFilter(false)}>Inactive</button>
        <button onClick={() => setFilter()}>All</button>
      </div>
      <Manifest fetchRows={fetchRows} fetchCount={fetchCount} filter={{ active: filter }} definition={def}>
        <DefaultManifestTable />
        <Debug />
      </Manifest>
    </div>
  )
}
