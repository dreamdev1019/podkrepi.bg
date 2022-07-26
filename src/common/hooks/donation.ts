import { useSession } from 'next-auth/react'
import { useTranslation } from 'react-i18next'
import { AxiosError, AxiosResponse } from 'axios'
import { QueryClient, useMutation, useQuery } from 'react-query'

import { ApiErrors } from 'service/apiErrors'
import { AlertStore } from 'stores/AlertStore'
import { endpoints } from 'service/apiEndpoints'
import { authQueryFnFactory } from 'service/restRequests'
import {
  CheckoutSessionInput,
  CheckoutSessionResponse,
  DonationPrice,
  DonationResponse,
  UserDonationResult,
} from 'gql/donations'
import { createCheckoutSession } from 'service/donation'

export function usePriceList() {
  return useQuery<DonationPrice[]>(endpoints.donation.prices.url)
}
export function useSinglePriceList() {
  return useQuery<DonationPrice[]>(endpoints.donation.singlePrices.url)
}
export function useRecurringPriceList() {
  return useQuery<DonationPrice[]>(endpoints.donation.recurringPrices.url)
}
export function useDonationSession() {
  const { t } = useTranslation()
  const mutation = useMutation<
    AxiosResponse<CheckoutSessionResponse>,
    AxiosError<ApiErrors>,
    CheckoutSessionInput
  >({
    mutationFn: createCheckoutSession,
    onError: () => AlertStore.show(t('common:alerts.error'), 'error'),
    onSuccess: () => AlertStore.show(t('common:alerts.message-sent'), 'success'),
  })
  return mutation
}

export function useDonationsList(id?: string, pageindex?: number, pagesize?: number) {
  const { data: session } = useSession()
  return useQuery<DonationResponse[]>(
    endpoints.donation.donationsList(id, pageindex, pagesize).url,
    {
      queryFn: authQueryFnFactory(session?.accessToken),
    },
  )
}

export function useCampaignDonationsList(id: string) {
  return useQuery<DonationResponse[]>(endpoints.campaign.getDonations(id).url)
}

export async function prefetchDonationsList(client: QueryClient) {
  await client.prefetchQuery<DonationResponse[]>(endpoints.donation.donationsList.url)
}

export function useDonation(id: string) {
  return useQuery<DonationResponse>(endpoints.donation.getDonation(id).url)
}

export async function prefetchDonationById(client: QueryClient, id: string) {
  await client.prefetchQuery<DonationResponse>(endpoints.donation.getDonation(id).url)
}
export function useUserDonations() {
  const { data: session } = useSession()
  return useQuery<UserDonationResult>(endpoints.donation.userDonations.url, {
    queryFn: authQueryFnFactory(session?.accessToken),
  })
}
