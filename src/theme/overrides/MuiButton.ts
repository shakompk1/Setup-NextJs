import palette from 'theme/palette'
import spacing from 'theme/spacing'

export default {
  MuiButton: {
    root: {
      textTransform: 'uppercase',
    },
    contained: {
      backgroundColor: palette.secondary.main,
    },
    textSecondary: {
      color: palette.error.main,
    },
    containedSecondary: {
      backgroundColor: palette.error.main,
      color: palette.secondary.main,
      '&:hover': {
        backgroundColor: palette.error.main,
      },
    },
    label: {
      fontWeight: 500,
    },
    sizeLarge: {
      paddingBottom: spacing * 1.5,
      paddingTop: spacing * 1.5,
    },
  },
}
