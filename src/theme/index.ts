import { createTheme } from '@mui/material/styles'

import overrides from './overrides'
import palette from './palette'
import spacing from './spacing'
import typography from './typography'

export default createTheme({
  typography,
  // @ts-ignore
  overrides,
  palette,
  spacing,
})
