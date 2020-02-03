import React, { useState } from 'react'
import { Manifest, useCell, DefaultManifestTable, Debug } from 'use-manifest'

import users from '../../services/users'
import def from './definition'


const fetchRows = async () => [{firstName: 'Howdy'}, {lastName: 'Boo'}]

const fetchCount = async () => 2

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
