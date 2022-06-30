import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useFormikContext } from 'formik'
import { Box, Button, Checkbox, Collapse, FormControlLabel, Grid, Typography } from '@mui/material'
import theme from 'common/theme'
import Google from 'common/icons/Google'
import { OneTimeDonation } from 'gql/donations'
import FormTextField from 'components/common/form/FormTextField'
import Link from 'components/common/Link'
import { signIn } from 'next-auth/react'
import { StepsContext } from './helpers/stepperContext'

function LoginForm() {
  const { t } = useTranslation('one-time-donation')
  const [isLogedin, setIsLogedin] = useState(false)
  const { step, setStep } = useContext(StepsContext)
  const formik = useFormikContext<OneTimeDonation>()

  useEffect(() => {
    isLogedin ? setStep(2) : null
  }, [isLogedin])
  const onClick = async () => {
    try {
      const resp = await signIn<'credentials'>('credentials', {
        email: formik.values.loginEmail,
        password: formik.values.loginPassword,
        redirect: false,
      })
      if (resp?.error) {
        throw new Error(resp.error)
      }
      if (resp?.ok) {
        console.log('Succes')
        setIsLogedin(true)
        // AlertStore.show(t('auth:alerts.welcome'), 'success')
        // router.push(`${router.query.callbackUrl ?? routes.profile.index}`)
      }
    } catch (error) {
      console.error(error)
      // AlertStore.show(t('auth:alerts.invalid-login'), 'error')
    } finally {
      // setLoading(false)
    }
  }
  return (
    <Collapse in={!formik.values.anonymousDonation && !isLogedin} timeout="auto">
      <Grid sx={{ marginBottom: theme.spacing(4) }} container rowSpacing={3}>
        <Grid item xs={12}>
          <Typography fontWeight={'bold'} fontSize={16} color="#343434">
            {t('second-step.login')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormTextField name="loginEmail" type="text" label="Email" fullWidth size="medium" />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            name="loginPassword"
            type="password"
            label={t('second-step.password')}
            fullWidth
            size="medium"
          />
        </Grid>
        <Box display={'flex'} justifyContent="space-between" width="100%" alignItems="center">
          <FormControlLabel
            control={<Checkbox />}
            label={t('second-step.checkbox-label') as string}
          />
          <Box sx={{ opacity: 0.85 }}>
            <Typography display="inline" color="GrayText">
              Don&apos;t have an account?
            </Typography>{' '}
            <Link color={theme.palette.primary.dark} href="#">
              Sign up
            </Link>
          </Box>
        </Box>
        <Button
          color="info"
          variant="contained"
          fullWidth
          sx={{ marginTop: theme.spacing(3) }}
          onClick={onClick}>
          {t('second-step.btn-login')}
        </Button>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          fullWidth
          sx={{ marginTop: theme.spacing(3) }}>
          <Box display="inline-flex" alignItems="center" marginRight={theme.spacing(2)}>
            <Google />
          </Box>
          Log in with Google
        </Button>
      </Grid>
    </Collapse>
  )
}

export default LoginForm
