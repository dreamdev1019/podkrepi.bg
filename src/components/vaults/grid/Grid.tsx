import React, { useState } from 'react'
import { UseQueryResult } from 'react-query'
import { useTranslation } from 'next-i18next'
import { observer } from 'mobx-react'
import { Box } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridColumns,
  GridRenderCellParams,
  GridSelectionModel,
} from '@mui/x-data-grid'

import { VaultResponse } from 'gql/vault'
import { useVaultsList } from 'common/hooks/vaults'
import { routes } from 'common/routes'
import { ModalStore } from 'stores/dashboard/ModalStore'
import GridActions from 'components/admin/GridActions'

import DetailsModal from './DetailsModal'
import DeleteModal from './DeleteModal'
import DeleteAllModal from './DeleteAllModal'

export default observer(function Grid() {
  const { t } = useTranslation('vaults')
  const { data }: UseQueryResult<VaultResponse[]> = useVaultsList()
  const [pageSize, setPageSize] = useState(5)
  const { setSelectedIdsToDelete } = ModalStore

  setSelectedIdsToDelete([])

  const commonProps: Partial<GridColDef> = {
    align: 'left',
    width: 150,
    headerAlign: 'left',
  }

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: t('name'),
      flex: 1,
      ...commonProps,
    },
    {
      field: 'currency',
      headerName: t('currency'),
      ...commonProps,
    },
    {
      field: 'amount',
      headerName: t('amount'),
      ...commonProps,
    },
    {
      field: 'createdAt',
      headerName: t('createdAt'),
      ...commonProps,
    },
    {
      field: 'updatedAt',
      headerName: t('updatedAt'),
      ...commonProps,
    },
    {
      field: 'campaignId',
      headerName: t('campaignId'),
      ...commonProps,
      width: 450,
    },
    {
      field: 'actions',
      headerName: t('actions'),
      width: 120,
      type: 'actions',
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams): React.ReactNode => {
        return (
          <GridActions
            id={params.row.id}
            name={params.row.name}
            editLink={routes.admin.vaults.edit(params.row.id)}
          />
        )
      },
    },
  ]

  return (
    <>
      <Box sx={{ marginTop: '2%', mx: 'auto', width: 700 }}>
        <DataGrid
          style={{
            background: 'white',
            position: 'absolute',
            height: 'calc(100vh - 300px)',
            border: 'none',
            width: 'calc(100% - 48px)',
            left: '24px',
            overflowY: 'auto',
            overflowX: 'hidden',
            borderRadius: '0 0 13px 13px',
          }}
          rows={data || []}
          columns={columns}
          rowsPerPageOptions={[5, 10]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          disableSelectionOnClick
          checkboxSelection
          onSelectionModelChange={(newSelectionModel: GridSelectionModel) => {
            setSelectedIdsToDelete(newSelectionModel.map((item) => item.toString()))
          }}
        />
      </Box>
      <DetailsModal />
      <DeleteModal />
      <DeleteAllModal />
    </>
  )
})
