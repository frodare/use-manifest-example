import React, { useState, useEffect } from 'react'
import { Manifest, DefaultControls, DefaultTable, Debug, useManifest } from 'use-manifest'

import users from '../../services/users'
import def from './definition'

// const count = 1000

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

const trPropsHandler = d => {
  //console.log(d)
}


const Updater = ({  initialValues }) => {
  const { updateState } = useManifest()
  useEffect(() => {
    updateState({ pageSize: 2, page: 20, sorts: [{id: "firstName", direction: "ASCENDING"}, {id: "lastName", direction: "DESCENDING"}] })
  }, [])
  return null
} 


const pageSizes = [10, 35, 101]
const pageSizeLableGenerator = size => `(${size}) Display Amount`
const statusMessageGenerator = ({ count, lastOnPage, firstOnPage }) => count < 1 ? 'No Results' : `${firstOnPage} - ${lastOnPage} / ${count}`

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
        <Updater />
        <DefaultTable trPropsHandler={trPropsHandler} />
        <DefaultControls pageSizes={pageSizes} pageSizeLableGenerator={pageSizeLableGenerator} statusMessageGenerator={statusMessageGenerator} />
        <Debug />
      </Manifest>
    </div>
  )
}
