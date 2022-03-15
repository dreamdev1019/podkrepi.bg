import React from 'react'
import { useMutation } from 'react-query'
import { observer } from 'mobx-react'
import { AxiosError, AxiosResponse } from 'axios'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { GridSelectionModel } from '@mui/x-data-grid'

import { routes } from 'common/routes'
import { VaultResponse } from 'gql/vault'
import { ApiErrors } from 'service/apiErrors'
import { useDeleteManyVaults } from 'service/vault'
import { ModalStore } from 'stores/dashboard/ModalStore'
import { AlertStore } from 'stores/AlertStore'
import DeleteAllDialog from 'components/admin/DeleteAllDialog'

export default observer(function DeleteAllModal() {
  const router = useRouter()
  const { hideDeleteAll, selectedIdsToDelete, setSelectedIdsToDelete } = ModalStore
  const { t } = useTranslation('vaults')

  const mutationFn = useDeleteManyVaults(selectedIdsToDelete)

  const mutation = useMutation<
    AxiosResponse<VaultResponse>,
    AxiosError<ApiErrors>,
    GridSelectionModel
  >({
    mutationFn,
    onError: () => AlertStore.show(t('alerts.error'), 'error'),
    onSuccess: () => {
      hideDeleteAll()
      setSelectedIdsToDelete([])
      AlertStore.show(t('alerts.deleteAll'), 'success')
      router.push(routes.admin.vaults.index)
    },
  })

  function deleteHandler() {
    mutation.mutate(selectedIdsToDelete)
  }

  return <DeleteAllDialog deleteHandler={deleteHandler} />
})
