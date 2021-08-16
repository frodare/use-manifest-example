import React, { useEffect } from 'react'
import { Manifest, DefaultControls, DefaultTable, Debug, useManifest } from 'use-manifest'

import users from '../../services/users'
import def from './definition'
import './index.css'

// const count = 1000

// const fetchRows = async (...args) => console.log('fetching rows', ...args) || new Array(count).fill(null).map((_,i) => [{firstName: 'Howdy ' + i,lastName: 'Boo' + i}])

// const fetchCount = async (...args) => console.log('fetching count', ...args) || count

const fetchRows = async (...args) => {
  // console.log('FETCHING ROWS', args)
  const r = await users(...args)
  return r.rows
}

const sleep = delay => new Promise((resolve, reject) => setTimeout(resolve, delay))

const fetchCount = async (...args) => {
  // console.log('***FETCHING COUNT', args)
  const r = await users(...args)
  await sleep(5000)
  return r.count
}

// const Content = () => {
//   const {rows, count, page, pageSize, load} = useManifest({ fetchCount, fetchRows })
//   const rows = useManifestRows()
// }

const trPropsHandler = d => {
  //console.log(d)
}


const Updater = ({  initialValues }) => {
  const { updateState } = useManifest()
  useEffect(() => {
    updateState({ pageSize: 2, page: 0, sorts: [{ id: "id", direction: "ASCENDING" }, { id: "lastName", direction: "DESCENDING" }] })
  }, [updateState])
  return null
}


const pageSizes = [10, 35, 101]
const pageSizeLabelGenerator = size => `(${size}) Display Amount`
const statusMessageGenerator = ({ count, lastOnPage, firstOnPage }) => {
  if (!count) {
    return null
  }
  if (count < 1) {
    return 'No Results'
  }
  return `${firstOnPage} - ${lastOnPage} / ${count}`
}

const Component = () => {
  const { setFilter, setPage } = useManifest()
  const _setPage = page => setPage(page - 1)
  return (
    <>
      <div className='section'>
        <button onClick={() => setFilter({ active: true })} > Active</button>
        <button onClick={() => setFilter({ active: false })} > Inactive</button>
        <button onClick={() => setFilter({ active: undefined })} > All</button>
      </div>
      {/* <Updater /> */}
      <div className='section'>
        <DefaultTable trPropsHandler={trPropsHandler} />
      </div>
      <div className='section'>
        <DefaultControls pageSizes={pageSizes} pageSizeLabelGenerator={pageSizeLabelGenerator} statusMessageGeneratorD={statusMessageGenerator} />
      </div>
      <div className='section'>
        <input type="text" id="pageField" name="pageField" />
        <button onClick={() => _setPage(document.getElementById('pageField').value)}>Go To Page</button>
      </div>
      <Debug />
    </>
  )
}

export default () =>
  <div className='App'>
    <Manifest fetchRows={fetchRows} fetchCount3={fetchCount} definition={def}>
      <Component />
      </Manifest>
  </div>
