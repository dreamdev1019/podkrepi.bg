import { useTranslation } from 'next-i18next'
import { Container } from '@mui/material'

import AdminContainer from 'components/admin/navigation/AdminContainer'
import AdminLayout from 'components/admin/navigation/AdminLayout'

import BeneficieryForm from './BeneficieryForm'

export default function EditPage() {
  const { t } = useTranslation('beneficiary')

  return (
    <AdminLayout>
      <AdminContainer title={t('all')}>
        <Container maxWidth="md" sx={{ py: 5 }}>
          <BeneficieryForm />
        </Container>
      </AdminContainer>
    </AdminLayout>
  )
}
