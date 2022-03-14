import { useQuery } from 'react-query'
import { AxiosResponse } from 'axios'
import { KeycloakInstance } from 'keycloak-js'
import { useKeycloak } from '@react-keycloak/ssr'

import { apiClient } from 'service/apiClient'
import { CoordinatorResponse } from 'gql/coordinators'
import { endpoints } from '../apiEndpoints'
import { authConfig, authQueryFnFactory } from '../restRequests'

export const useCoordinatorsList = () => {
  const { keycloak } = useKeycloak<KeycloakInstance>()

  return useQuery(
    endpoints.coordinators.coordinatorsList.url,
    authQueryFnFactory<CoordinatorResponse[]>(keycloak?.token),
  )
}

export const useDeleteCoordinator = () => {
  const { keycloak } = useKeycloak<KeycloakInstance>()
  return async (data: string) => {
    return await apiClient.delete<string, AxiosResponse<CoordinatorResponse>>(
      endpoints.coordinators.deleteCoordinator(data).url,
      authConfig(keycloak?.token),
    )
  }
}
