import AdminLayout from 'components/admin/navigation/AdminLayout'
import AdminContainer from 'components/admin/navigation/AdminContainer'

import CoordinatorsGrid from './CoordinatorsGrid'
// import BankAccountsModal from './BankAccountsModal'
// import BankAccountsDetails from './BankAccountsDetails'
import CoordinatorBottomAppbar from './CoordinatorBottomAppbar'

export default function BankAccountsPage() {
  return (
    <AdminLayout>
      {/* <BankAccountsModal>
        <BankAccountsDetails />
      </BankAccountsModal> */}
      <AdminContainer title={'Координатори'}>
        <CoordinatorBottomAppbar />
        <CoordinatorsGrid />
      </AdminContainer>
    </AdminLayout>
  )
}
