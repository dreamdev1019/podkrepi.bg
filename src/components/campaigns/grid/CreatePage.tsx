import { useTranslation } from 'next-i18next'
import { Container } from '@mui/material'

import AdminContainer from 'components/admin/navigation/AdminContainer'
import AdminLayout from 'components/admin/navigation/AdminLayout'

import CreateForm from './CreateForm'

export default function CreatePage() {
  const { t } = useTranslation('campaigns')

  return (
    <AdminLayout>
      <AdminContainer title={t('campaigns')}>
        <Container maxWidth="md" sx={{ py: 5 }}>
          <CreateForm></CreateForm>
        </Container>
      </AdminContainer>
    </AdminLayout>
  )
}
