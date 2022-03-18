import { Button, Drawer } from '@mui/material'
import * as React from 'react'
import DrawerList from './DrawerList'

function BootcampDrawer() {
  return (
    <>
      <Button>Left menu</Button>
      <Drawer>
        <DrawerList />
      </Drawer>
    </>
  )
}

export default BootcampDrawer
