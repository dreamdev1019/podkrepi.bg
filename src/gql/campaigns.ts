import { UUID } from './types'
import type { CampaignFileRole } from 'components/campaign-file/roles'
import type { CampaignTypeCategory } from 'components/campaign-types/categories'
import { Currency } from './currency'
import { PaymentProvider } from './donations'

export type CampaignType = {
  id: UUID
  category: CampaignTypeCategory
  name: string
  slug: string
  parentId: UUID
  description: string
}

export type CampaignFile = {
  id: UUID
  filename: string
  mimetype: string
  campaignId: UUID
  personId: UUID
  role: CampaignFileRole
}

export enum CampaignState {
  initial,
  draft,
  pendingvalidation,
  approved,
  rejected,
  active,
  activependingvalidation,
  suspended,
  complete,
  disabled,
  error,
}

export type CampaignResponse = {
  id: UUID
  state: CampaignState
  slug: string
  title: string
  essence: string
  coordinatorId: UUID
  beneficiaryId: UUID
  campaignTypeId: UUID
  campaignType: {
    name: string
    category: CampaignTypeCategory
  }
  description: string
  targetAmount: number
  summary?: { reachedAmount: number; donors?: number }[]
  currency: string
  startDate: Date | null
  endDate: Date | null
  createdAt: Date
  updatedAt: Date | null
  deletedAt: Date | null
  beneficiary: {
    id: UUID
    type: string
    publicData: string
    person: { id: UUID; firstName: string; lastName: string }
  }
  coordinator: {
    id: UUID
    person: { id: UUID; firstName: string; lastName: string }
  }
  campaignFiles?: CampaignFile[]
}

export type CampaignFormData = {
  title: string
  campaignTypeId: string
  beneficiaryId: string
  coordinatorId: string
  targetAmount: number
  startDate: Date | string | undefined
  endDate: Date | string | undefined
  description: string
  terms: boolean
  gdpr: boolean
}

export type CampaignInput = {
  title: string
  slug: string
  description: string
  essence: string
  campaignTypeId: UUID
  beneficiaryId: UUID
  coordinatorId: UUID
  targetAmount: number
  currency: string
  startDate: Date | string | undefined
  endDate: Date | string | undefined
}

export type CampaignUploadImage = {
  title: string
}

export type CampaignDonation = {
  id: UUID
  type: string
  status: string
  provider: PaymentProvider
  targetVaultId: UUID
  extCustomerId: UUID
  extPaymentIntentId: UUID
  extPaymentMethodId: UUID
  createdAt: string
  updatedAt: string | undefined
  amount: number
  currency: Currency
  personId: UUID
  person: {
    firstName: string
    lastName: string
  }
}
