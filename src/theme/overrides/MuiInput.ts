import palette from 'theme/palette'

export default {
  MuiInputBase: {
    input: {
      padding: 14,
      '&::placeholder': {
        color: palette.grey[600],
        opacity: 1,
      },
    },
  },
  MuiOutlinedInput: {
    input: {
      padding: 14,
      height: 'auto',
    },
    notchedOutline: {
      border: `1px solid ${palette.grey[300]}`,
    },
  },
  MuiInputLabel: {
    outlined: {
      transform: `translate(14px, 14px) scale(1)`,
    },
  },
}
