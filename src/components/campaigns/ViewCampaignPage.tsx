import React from 'react'
import { useViewCampaign } from 'common/hooks/campaigns'
import Layout from 'components/layout/Layout'
import InlineDonation from './InlineDonation'
import CampaignDetails from './CampaignDetails'
import NotFoundPage from 'pages/404'
import { Grid } from '@mui/material'
import IrregularityReport from './IrregularityReport'

type Props = { slug: string }

export default function ViewCampaignPage({ slug }: Props) {
  const { data } = useViewCampaign(slug)
  if (!data || !data.campaign) return <NotFoundPage />
  const { campaign } = data

  return (
    <Layout maxWidth={false}>
      <Grid container component="section" maxWidth="lg" justifyContent="center" m="0 auto">
        <CampaignDetails campaign={campaign} />
        <Grid container item xs={4} flexDirection="column" flexWrap="nowrap">
          <Grid item>
            <InlineDonation campaign={campaign} />
          </Grid>
          <Grid item>
            <IrregularityReport campaign={campaign} />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
