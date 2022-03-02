import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DocumentsPage from 'components/beneficiary/BeneficiaryPage'
import { prefetchBeneficiariesList } from 'service/beneficiary'
import { keycloakInstance } from 'middleware/auth/keycloak'

export const getServerSideProps: GetServerSideProps = async (params) => {
  const client = new QueryClient()
  const keycloak = keycloakInstance(params)

  await prefetchBeneficiariesList(client, keycloak?.token)

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

export default DocumentsPage
