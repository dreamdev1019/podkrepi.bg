import React, { Dispatch, SetStateAction } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { observer } from 'mobx-react'
import { AxiosError, AxiosResponse } from 'axios'
import { Dialog, Card, CardContent, Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { VaultResponse } from 'gql/vault'
import { ApiErrors } from 'service/apiErrors'
import { endpoints } from 'service/apiEndpoints'
import { useDeleteVault } from 'service/restRequests'
import { ModalStore } from 'stores/documents/ModalStore'
import { AlertStore } from 'stores/AlertStore'
import { useRouter } from 'next/router'
import { routes } from 'common/routes'

type Props = {
  id: string
  setSelectedId: Dispatch<SetStateAction<string>>
}

export default observer(function DeleteModal({ id, setSelectedId }: Props) {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { isDeleteOpen, hideDelete } = ModalStore
  const { t } = useTranslation()

  const mutationFn = useDeleteVault(id)

  const deleteMutation = useMutation<AxiosResponse<VaultResponse>, AxiosError<ApiErrors>, string>({
    mutationFn,
    onError: () => AlertStore.show(t('vaults:alerts:error'), 'error'),
    onSuccess: () => {
      hideDelete()
      AlertStore.show(t('vaults:alerts:delete'), 'success')
      queryClient.removeQueries(endpoints.vaults.getVault(id).url)
      setSelectedId('')
      router.push(routes.admin.vaults.index)
    },
  })

  function deleteHandler() {
    deleteMutation.mutate(id)
  }

  return (
    <Dialog open={isDeleteOpen} onClose={hideDelete} sx={{ top: '-35%' }}>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            {t('vaults:deleteTitle')}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            {t('vaults:deleteContent')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="error" onClick={deleteHandler}>
              {t('vaults:cta:delete')}
            </Button>
            <Button onClick={hideDelete}>{t('vaults:cta:cancel')}</Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  )
})
