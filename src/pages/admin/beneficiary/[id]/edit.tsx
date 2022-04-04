import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { prefetchBeneficiaryById } from 'service/beneficiary'
import { keycloakInstance } from 'middleware/auth/keycloak'
import EditPage from 'components/beneficiary/EditPage'

export const getServerSideProps: GetServerSideProps = async (params) => {
  const client = new QueryClient()
  const keycloak = keycloakInstance(params)
  const { id } = params.query

  await prefetchBeneficiaryById(client, String(id), keycloak.token)

  return {
    props: {
      ...(await serverSideTranslations(params.locale ?? 'bg', [
        'common',
        'auth',
        'beneficiary',
        'validation',
        'documents',
      ])),
      dehydratedState: dehydrate(client),
    },
  }
}

export default EditPage
