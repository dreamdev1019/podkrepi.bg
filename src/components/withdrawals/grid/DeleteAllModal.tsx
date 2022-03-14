import React from 'react'
import { useMutation } from 'react-query'
import { observer } from 'mobx-react'
import { AxiosError, AxiosResponse } from 'axios'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { Dialog, Card, CardContent, Box, Button, Typography } from '@mui/material'
import { GridSelectionModel } from '@mui/x-data-grid'

import { routes } from 'common/routes'
import { WithdrawalResponse } from 'gql/withdrawals'
import { ApiErrors } from 'service/apiErrors'
import { useDeleteManyWithdrawals } from 'service/withdrawal'
import { ModalStore } from 'stores/documents/ModalStore'
import { AlertStore } from 'stores/AlertStore'

type Props = {
  selectionModel: GridSelectionModel
}

export default observer(function DeleteAllModal({ selectionModel }: Props) {
  const router = useRouter()
  const { isDeleteAllOpen, hideDeleteAll } = ModalStore
  const { t } = useTranslation()

  const idsToDelete = selectionModel.map((x) => x.toString())
  const mutationFn = useDeleteManyWithdrawals(idsToDelete)

  const mutation = useMutation<
    AxiosResponse<WithdrawalResponse>,
    AxiosError<ApiErrors>,
    GridSelectionModel
  >({
    mutationFn,
    onError: () => AlertStore.show(t('withdrawals:alerts:error'), 'error'),
    onSuccess: () => {
      hideDeleteAll()
      AlertStore.show(t('withdrawals:alerts:deleteAll'), 'warning')
      router.push(routes.admin.withdrawals.index)
    },
  })

  function deleteHandler() {
    mutation.mutate(idsToDelete)
  }

  return (
    <Dialog open={isDeleteAllOpen} onClose={hideDeleteAll} sx={{ top: '-35%' }}>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            {t('withdrawals:deleteTitle')}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            {t('withdrawals:deleteAllContent')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="error" onClick={deleteHandler}>
              {t('withdrawals:cta:delete')}
            </Button>
            <Button onClick={hideDeleteAll}>{t('withdrawals:cta:cancel')}</Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  )
})
