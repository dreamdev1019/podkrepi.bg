import {
  AssignmentInd,
  People,
  ContactPhone,
  Payment,
  Group,
  FolderShared,
  Public,
  Class,
  Shield,
} from '@mui/icons-material'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined'
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'

import { routes } from 'common/routes'
import BeneficiaryIcon from 'common/icons/Beneficiary'

export const menuItems = [
  { label: 'Бууткамп', icon: AssignmentInd, href: routes.admin.bootcamp.index },
  { label: 'Кампании', icon: AssignmentInd, href: routes.admin.campaigns.index },
  { label: 'Доброволци', icon: People, href: routes.admin.supporters },
  { label: 'Контакти', icon: ContactPhone, href: routes.admin.infoRequests },
  { label: 'Плащания', icon: Payment, href: routes.admin.bankaccounts.index },
  { label: 'Потребители', icon: Group, href: '#' },
  { label: 'Документи', icon: FolderShared, href: routes.admin.documents.index },
  { label: 'Бенефактори', icon: BeneficiaryIcon, href: routes.admin.benefactor.index },
  { label: 'Бенефициенти', icon: BeneficiaryIcon, href: routes.admin.beneficiary.index },
  { label: 'Типове кампании', icon: Class, href: routes.admin.campaignTypes.index },
  { label: 'Градове', icon: LocationCityRoundedIcon, href: routes.admin.cities.home },
  { label: 'Държави', icon: Public, href: routes.admin.countries.index },
  { label: 'Координатори', icon: People, href: routes.admin.coordinators.index },
  { label: 'Дарения', icon: VolunteerActivismOutlinedIcon, href: routes.admin.donations.index },
  { label: 'Трезори', icon: Shield, href: routes.admin.vaults.index },
  { label: 'Тегления', icon: LocalAtmIcon, href: routes.admin.withdrawals.index },
]
