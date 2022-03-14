import palette from 'theme/palette'
import typography from 'theme/typography'

export default {
  MuiPaginationItem: {
    page: {
      ...typography.body2,
      fontWeight: 700,
      color: palette.grey[600],
      borderColor: palette.grey[300],
      '&.Mui-selected': {
        backgroundColor: palette.primary.light,
        color: palette.primary.main,
        borderColor: palette.primary.light,
      },
    },
  },
}
