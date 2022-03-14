import typography from '../typography'
import spacing from 'theme/spacing'

export default {
  MuiDialogTitle: {
    root: {
      position: 'relative',
      padding: `${spacing * 3}px ${spacing * 4}px ${spacing * 2}px ${spacing * 3}px`,
      '& .MuiTypography-root': {
        ...typography.h1,
      },
    },
  },
  MuiDialogContent: {
    root: {
      position: 'relative',
    },
  },
  MuiDialogActions: {
    root: {
      padding: `${spacing}px ${spacing * 3}px ${spacing * 3}px ${spacing * 3}px`,
    },
  },
}
