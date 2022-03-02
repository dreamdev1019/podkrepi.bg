import { KeycloakInstance } from 'keycloak-js'
import { useKeycloak } from '@react-keycloak/ssr'
import { QueryClient, useQuery } from 'react-query'

import { endpoints } from 'service/apiEndpoints'
import { authQueryFnFactory } from 'service/restRequests'
import { CityResponse } from 'gql/cities'

type Country = {
  id: string
  name: string
  countryCode: string
  cities: []
}

export function useCitiesList() {
  const { keycloak } = useKeycloak<KeycloakInstance>()
  return useQuery<CityResponse[]>(
    endpoints.city.citiesList.url,
    authQueryFnFactory<CityResponse[]>(keycloak?.token),
  )
}

export function useCity(id: string) {
  const { keycloak } = useKeycloak<KeycloakInstance>()
  return useQuery<CityResponse>(
    endpoints.city.viewCity(id).url,
    authQueryFnFactory<CityResponse>(keycloak?.token),
  )
}

export function useCountriesList() {
  const { keycloak } = useKeycloak<KeycloakInstance>()
  const counties = useQuery<Country[]>(
    endpoints.country.listCountries.url,
    authQueryFnFactory<Country[]>(keycloak?.token),
  )
  return counties.data
}

export async function prefetchCountryList(client: QueryClient, token?: string) {
  await client.prefetchQuery<Country[]>(
    endpoints.country.listCountries.url,
    authQueryFnFactory<Country[]>(token),
  )
}

export async function prefetchCityList(client: QueryClient, token?: string) {
  await client.prefetchQuery<CityResponse[]>(
    endpoints.city.citiesList.url,
    authQueryFnFactory<CityResponse[]>(token),
  )
}
