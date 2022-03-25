import Image from 'next/image'
import { Box, CircularProgress, Grid } from '@mui/material'

import { CampaignResponse } from 'gql/campaigns'
import useMobile from 'common/hooks/useMobile'

import CampaignCard from './CampaignCard'

type Props = { campaignToShow: CampaignResponse[] }
export default function CampaignsList({ campaignToShow }: Props) {
  const { mobile } = useMobile()

  return (
    <Grid container justifyContent="center" spacing={2}>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {<CircularProgress size="large" />}
      {campaignToShow?.map((campaign, index) => (
        <Grid key={index} item xs={12} sm={6} lg={4}>
          <Box textAlign="center">
            <CampaignCard campaign={campaign} />
          </Box>
        </Grid>
      ))}
      <Box sx={{ my: 10 }}>
        {mobile ? (
          <Image src="/img/ArtboardRotate.png" width={250} height={400} />
        ) : (
          <Image src="/img/Artboard.png" width={813} height={358} />
        )}
      </Box>
    </Grid>
  )
}
