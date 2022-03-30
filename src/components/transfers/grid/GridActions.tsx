import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import React, { Dispatch, SetStateAction } from 'react'

import TocIcon from '@mui/icons-material/Toc'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, IconButton, Tooltip } from '@mui/material'

import { ModalStore } from 'stores/dashboard/ModalStore'

import { routes } from 'common/routes'

type Props = {
  id: string
  setSelectedId: Dispatch<SetStateAction<string>>
}

export default function GridActions({ id, setSelectedId }: Props) {
  const { t } = useTranslation()

  const { showDetails, showDelete } = ModalStore

  function detailsClickHandler() {
    setSelectedId(id)
    showDetails()
  }

  function deleteClickHandler() {
    setSelectedId(id)
    showDelete()
  }

  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Tooltip title={t('transfer:cta:details') || ''}>
        <IconButton size="small" onClick={detailsClickHandler}>
          <TocIcon />
        </IconButton>
      </Tooltip>
      <Link passHref href={routes.admin.transfer.view(id)}>
        <Tooltip title={t('transfer:cta:edit') || ''}>
          <IconButton size="small">
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Link>
      <Tooltip title={t('transfer:cta:delete') || ''}>
        <IconButton size="small" onClick={deleteClickHandler}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}
