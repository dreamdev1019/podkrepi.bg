import React from 'react'

import AdminLayout from 'components/admin/navigation/AdminLayout'
import AdminContainer from 'components/admin/navigation/AdminContainer'
import GridAppbar from './grid/GridAppbar'
import BootcampGrid from './grid/BootcampGrid'
import DeleteModal from './DeleteModal'
import { Divider } from '@mui/material'

export default function BootcampPage() {
  return (
    <AdminLayout>
      <AdminContainer title={'Задачи'}>
        <GridAppbar />
        <Divider />
        <BootcampGrid />
      </AdminContainer>
    </AdminLayout>
  )
}
