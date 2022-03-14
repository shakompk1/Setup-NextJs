import { Grid, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { t } = useTranslation('index')
  return (
    <Grid>
      <Typography variant="h1">{t('welcome')}</Typography>
    </Grid>
  )
}

export default Home
