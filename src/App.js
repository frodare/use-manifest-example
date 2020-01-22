import React, { useState } from 'react'
import './App.css'
import { Manifest, useCell } from 'use-manifest'
import fetch from './fetch'
import 'use-manifest/dist/index.css'

import users from './services/users'

import UserManifest from './manifests/UserManifest'

/*

const CustomCell = ({ columnIndex, rowIndex }) => {
  const { value } = useCell({ columnIndex, rowIndex })

  return <>{value ? 'Y' : 'N'}</>
}

const def = [
  { id: 'id', label: 'ID', sortable: true },
  { id: 'name', label: 'Name', sortable: true },
  { id: 'active', sortable: true, headerComponent: () => <>Active</>, cellComponent: CustomCell }
]

const App = () => {

  const [filter, setFilter] = useState()
  return (
    <div className='App'>
      <div>
        <button onClick={() => setFilter(true)}>Active</button>
        <button onClick={() => setFilter(false)}>Inactive</button>
        <button onClick={() => setFilter()}>All</button>
      </div>
      <Manifest fetch={fetch} filter={{ active: filter }} definition={def} />
    </div>
  )
}
*/

export default () => <UserManifest />
