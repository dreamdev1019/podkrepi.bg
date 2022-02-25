import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CreatePage from 'components/vaults/CreatePage'

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const client = new QueryClient()

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'bg', ['common', 'auth', 'vaults', 'validation'])),
      dehydratedState: dehydrate(client),
    },
  }
}

export default CreatePage
