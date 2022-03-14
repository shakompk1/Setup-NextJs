import { ThemeStyle } from 'utils/constants/enums'

export default {
  type: ThemeStyle.light,
  primary: {
    main: '#49599A',
    light: '#F2F3FA',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#fff',
    dark: '#1D1F21',
  },
  grey: {
    100: '#EDEFF1',
    300: '#D3D9DE',
    500: '#F6F7F8',
    600: '#7F8385',
  },
  success: {
    main: '#3CC13B',
    light: 'rgba(60, 193, 59, 0.1)',
  },
  error: {
    main: '#F44336',
    light: 'rgba(244, 67, 54, 0.1);',
  },
  info: {
    main: '#2196F3',
    light: 'rgba(33, 150, 243, 0.1)',
  },
  warning: {
    main: '#FF9800',
    light: 'rgba(255, 152, 0, 0.1)',
  },
  background: {
    paper: '#FFFFFF',
  },
}
