import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import { SwipeableDrawer, Hidden, Box, Grid, Button } from '@mui/material'

import { isAdmin } from 'common/util/roles'
import { routes, staticUrls } from 'common/routes'
import LinkButton from 'components/common/LinkButton'
import PodkrepiIcon from 'components/brand/PodkrepiIcon'
import CloseModalButton from 'components/common/CloseModalButton'

import { navItems } from './ProjectMenu'
import LocaleButton from '../LocaleButton'
import DonationMenuMobile from './DonationMenuMobile'
import { useSession } from 'next-auth/react'

const useStyles = makeStyles((theme) =>
  createStyles({
    navMenuDrawer: {
      flexShrink: 0,
    },
    navMenuPaper: {
      width: parseFloat(theme.spacing(10)) * 4,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        flexShrink: 0,
      },
    },
    icon: {
      fontSize: theme.typography.pxToRem(80),
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    accordion: {
      padding: theme.spacing(1.9, 0, 1.9, 1.9),
    },
  }),
)

type NavDeckProps = {
  mobileOpen: boolean
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthLinks = () => {
  const { data: session, status } = useSession()
  const { t } = useTranslation()

  if (session) {
    return (
      <>
        <Grid item>
          <LinkButton fullWidth variant="outlined" href={routes.profile.index}>
            {t('nav.profile')}
          </LinkButton>
        </Grid>
        {status === 'authenticated' && isAdmin(session) && (
          <Grid item>
            <Button fullWidth variant="outlined" href={routes.admin.index}>
              {t('nav.admin.index')}
            </Button>
          </Grid>
        )}
        <Grid item>
          <LinkButton fullWidth variant="outlined" href={routes.logout}>
            {t('nav.logout')}
          </LinkButton>
        </Grid>
      </>
    )
  }
  return (
    <>
      <Grid item>
        <LinkButton fullWidth variant="outlined" href={routes.login}>
          {t('nav.login')}
        </LinkButton>
      </Grid>
      <Grid item>
        <LinkButton fullWidth variant="outlined" href={routes.register}>
          {t('nav.register')}
        </LinkButton>
      </Grid>
    </>
  )
}

export default function MobileNav({ mobileOpen, setMobileOpen }: NavDeckProps) {
  const classes = useStyles()
  const router = useRouter()
  const { t } = useTranslation()
  const closeNavMenu = () => setMobileOpen(false)

  // Register route change event handlers
  useEffect(() => {
    router.events.on('routeChangeStart', closeNavMenu)

    return () => {
      router.events.off('routeChangeStart', closeNavMenu)
    }
  }, [])

  return (
    <nav className={classes.navMenuDrawer}>
      <Hidden mdUp implementation="css">
        <SwipeableDrawer
          anchor="right"
          open={mobileOpen}
          variant="temporary"
          ModalProps={{ keepMounted: true }}
          onOpen={() => setMobileOpen(true)}
          onClose={closeNavMenu}
          classes={{ paper: classes.navMenuPaper }}>
          <CloseModalButton edge="end" fontSize="inherit" onClose={closeNavMenu} />
          <Box display="flex" justifyContent="center" px={2}>
            <Grid container justifyContent="center" direction="column" spacing={2}>
              <Grid item>
                <Box width="100%" textAlign="center">
                  <PodkrepiIcon className={classes.icon} />
                </Box>
              </Grid>
              {navItems.map(({ href, label }, key) => (
                <Grid item key={key}>
                  <LinkButton fullWidth variant="outlined" href={href}>
                    {t(label)}
                  </LinkButton>
                </Grid>
              ))}
              <Grid item>
                <Button href={staticUrls.blog} target="_blank" fullWidth variant="outlined">
                  {t('nav.blog')}
                </Button>
              </Grid>
              <Grid className={classes.accordion}>
                <DonationMenuMobile />
              </Grid>
              <AuthLinks />

              <Box my={4} textAlign="center">
                <LocaleButton />
              </Box>
            </Grid>
          </Box>
        </SwipeableDrawer>
      </Hidden>
    </nav>
  )
}
