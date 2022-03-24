import { useRef } from 'react'
import { Container } from '@mui/material'
import { useTranslation } from 'next-i18next'

import Layout from 'components/layout/Layout'

import Jumbotron from './sections/Jumbotron'
import ActivitySection from './sections/ActivitySection'
import TeamSection from './sections/TeamSection'
import TeamChartSection from './sections/TeamChartSection'
import CampaignsSection from './sections/CampaignsSection'
import MissionVisionGoalsSection from './sections/MissionVisionGoalsSection'
import SupportUsSection from './sections/SupportUsSection'
import { RefObject } from 'react-transition-group/node_modules/@types/react'

export default function IndexPage() {
  const scrollElement = useRef<HTMLAnchorElement>(null)
  const { t } = useTranslation()

  return (
    <Layout
      maxWidth={false}
      disableOffset
      disableGutters
      title={t('index:jumbotron.heading')}
      metaDescription={t('index:activity-section.content')}>
      <Jumbotron />
      <Container ref={scrollElement as RefObject<HTMLDivElement>} maxWidth="md">
        {/* <CampaignsSection /> */}
        <ActivitySection />
        <TeamSection />
        <TeamChartSection />
      </Container>
      <MissionVisionGoalsSection />
      <SupportUsSection />
    </Layout>
  )
}
