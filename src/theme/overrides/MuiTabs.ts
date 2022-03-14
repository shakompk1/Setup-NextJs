import palette from 'theme/palette'
import typography from 'theme/typography'

export default {
  MuiTab: {
    root: {
      ...typography.h3,
      maxWidth: 160,
      minWidth: 0,
      textTransform: 'uppercase',
      '&$selected': {
        color: palette.primary.main,
      },
    },
    textColorInherit: {
      opacity: 1,
    },
  },
  MuiTabs: {
    root: {
      backgroundColor: palette.secondary.main,
      color: palette.grey[600],
    },
  },
}
