import { KeycloakInstance } from 'keycloak-js'
import { useKeycloak } from '@react-keycloak/ssr'
import { QueryClient, useQuery } from 'react-query'

import { endpoints } from 'common/api-endpoints'
import { authQueryFnFactory } from 'common/rest'
import { BenefactorResponse } from 'gql/benefactor'

export function useBenefactorList() {
  const { keycloak } = useKeycloak<KeycloakInstance>()
  return useQuery<BenefactorResponse[]>(
    endpoints.benefactor.benefactorList.url,
    authQueryFnFactory<BenefactorResponse[]>(keycloak?.token),
  )
}

export async function prefetchBenefactorList(client: QueryClient, token?: string) {
  await client.prefetchQuery<BenefactorResponse[]>(
    endpoints.benefactor.benefactorList.url,
    authQueryFnFactory<BenefactorResponse[]>(token),
  )
}

export function useBenefactor(id: string) {
  const { keycloak } = useKeycloak<KeycloakInstance>()
  return useQuery<BenefactorResponse>(
    endpoints.benefactor.getBenefactor.url + '/' + id,
    authQueryFnFactory<BenefactorResponse>(keycloak?.token),
  )
}
