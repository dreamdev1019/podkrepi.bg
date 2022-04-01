import { UUID } from './types'
import { VaultResponse } from './vault'
import { PersonResponse } from './person'
import { CampaignResponse } from './campaigns'
import { Currency, TransferStatus } from 'components/transfers/TransferTypes'

export type TransferInput = {
  status: string
  currency: string
  amount: number
  reason: string
  documentId?: UUID | string | null
  targetDate?: Date | string | null
  approvedById?: string | null
  sourceCampaignId: string
  sourceVaultId: string
  targetCampaignId: string
  targetVaultId: string
}

export type TransferData = {
  status: string | undefined
  currency: string | undefined
  amount: number | undefined
  reason: string | undefined
  documentId?: UUID | string | null
  targetDate?: Date | string | null
  approvedById?: UUID | string | null
  sourceCampaignId: UUID | string | undefined
  sourceVaultId: UUID | string | undefined
  targetCampaignId: UUID | string | undefined
  targetVaultId: UUID | string | undefined
}

export type TransferResponse = {
  id: UUID
  status: TransferStatus
  currency: Currency
  amount: number
  reason: string
  documentId: string | undefined
  targetDate: Date | undefined
  approvedBy: PersonResponse | undefined
  sourceCampaign: CampaignResponse
  sourceVault: VaultResponse
  targetCampaign: CampaignResponse
  targetVault: VaultResponse
  approvedById: string | undefined
  sourceCampaignId: string
  sourceVaultId: string
  targetCampaignId: string
  targetVaultId: string
}

export type TransferEditResponse = {
  status: TransferStatus
  currency: Currency
  amount: number
  reason: string
  documentId: string | undefined
  targetDate: Date | undefined
  approvedById: string | undefined
  sourceCampaignId: string
  sourceVaultId: string
  targetCampaignId: string
  targetVaultId: string
}
