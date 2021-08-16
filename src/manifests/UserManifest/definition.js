import React from 'react'
import { useCell } from 'use-manifest'

const PermissionsCell = props => {
  const { row } = useCell(props)
  const { accounts, admin } = row.permissions
  return (
    <>
      <div>
        Accounts: {accounts ? 'TRUE' : "false"}
      </div>
      <div>
        Admin: {admin ? 'TRUE' : "false"}
      </div>
    </>
  )
}

const BooleanCell = props => {
  const { value } = useCell(props)
  return (
    <span>
      {value ? 'TRUE' : "false"}
    </span>
  )
}

export default [
  {
    id: 'id',
    label: 'ID',
    sortable: true
  }, {
    id: 'active',
    label: 'Active',
    cellComponent: BooleanCell
  }, {
    id: 'date',
    label: 'Date',
    sortable: true
  }, {
    id: 'firstName',
    label: 'First Name',
    sortable: true
  }, {
    id: 'lastName',
    label: 'Last Name',
    sortable: true
  }, {
    id: 'age',
    label: 'Age',
    sortable: true
  }, {
    id: 'phone',
    label: 'Phone'
  }, {
    id: 'address',
    label: 'Address'
  }, {
    id: 'permissions',
    label: 'Permissions',
    cellComponent: PermissionsCell
  }
]
