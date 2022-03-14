import typography from 'theme/typography'

export default {
  MuiTableCell: {
    root: {
      ...typography.body1,
      wordBreak: 'keep-all',
    },
  },
  MuiTableRow: {
    root: {
      '&:last-child>td': {
        border: 0,
      },
    },
  },
  MuiTableContainer: {
    root: {
      overflowX: 'visible',
    },
  },
}
