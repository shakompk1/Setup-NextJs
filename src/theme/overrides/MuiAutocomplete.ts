import palette from 'theme/palette'
import spacing from 'theme/spacing'

export default {
  MuiAutocomplete: {
    inputRoot: {
      '&[class*="MuiOutlinedInput-root"]': {
        padding: '0 14px 0 12px',
        '& .MuiAutocomplete-endAdornment': {
          right: spacing * 2,
        },
        '& .MuiAutocomplete-input': {
          paddingTop: 14,
          paddingBottom: 14,
        },
      },
    },
    popupIndicator: {
      color: 'inherit',
    },
    option: {
      '&[aria-selected="true"]': {
        backgroundColor: 'inherit',
      },
      '&[data-focus="true"]': {
        color: palette.primary.main,
        backgroundColor: palette.primary.light,
      },
    },
  },
}
