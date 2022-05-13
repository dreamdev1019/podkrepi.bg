import React from 'react'
import { Box, Container, Grid, Hidden, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { Theme } from '@mui/material/styles'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import theme from 'common/theme'
import Heading from 'components/common/Heading'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(7),
      color: theme.palette.primary.dark,
      fontFamily: 'Montserrat',
    },
    container: {
      marginBottom: theme.spacing(12),
      textAlign: 'center',
      marginTop: '1%',
    },
    graphic: {
      marginTop: theme.spacing(5),
    },
  }),
)

export default function HowWeWorkSection() {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  return (
    <Grid container direction="column" component="section" className={classes.container}>
      <Heading id="how-we-work" variant="h4" component="h2" className={classes.heading} linkable>
        {t('index:how-we-work.heading')}
      </Heading>
      <Box
        sx={{
          backgroundColor: '#F4F4F4',
          paddingY: theme.spacing(6),
          paddingX: theme.spacing(5),
        }}>
        <Grid item rowSpacing={10} maxWidth="lg" margin="0 auto">
          <Typography variant="subtitle1">{t('index:how-we-work.text')}</Typography>
        </Grid>
      </Box>
      <Grid item className={classes.graphic} maxWidth="lg">
        <Hidden smUp>
          <Image src={`/infographic-${i18n.language}-mobile.svg`} width={320} height={1002} />
        </Hidden>
        <Hidden smDown>
          <Image src={`/infographic-${i18n.language}.svg`} width={1096} height={1114.6} />
        </Hidden>
      </Grid>
    </Grid>
  )
}
