import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World', col3: 'great' },
  { id: 2, col1: 'Podkrepi.bg', col2: 'is Awesome', col3: 'great' },
  { id: 3, col1: 'MUI', col2: 'Break my nerves', col3: 'great' },
  { id: 4, col1: 'MUI', col2: 'is Amazing', col3: 'great' },
]

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 250 },
  { field: 'col2', headerName: 'Column 2', width: 250 },
  { field: 'col3', headerName: 'Column 3', width: 250 },
]

export default function MyDataGrid() {
  return (
    <div style={{ height: 300, width: '60%', margin: '0 auto' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
