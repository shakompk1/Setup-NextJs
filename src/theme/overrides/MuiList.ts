import palette from 'theme/palette'
import spacing from 'theme/spacing'

export default {
  MuiListItem: {
    root: {
      '&$selected': {
        backgroundColor: palette.primary.light,
        '&:hover': {
          backgroundColor: palette.primary.light,
        },
      },
    },
    button: {
      '&:hover': {
        backgroundColor: palette.primary.light,
        color: palette.primary.main,
        '& svg': {
          color: palette.primary.main,
        },
      },
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: spacing * 4,
    },
  },
}
