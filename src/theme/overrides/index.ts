import MuiButton from './MuiButton'
import MuiChip from './MuiChip'
import MuiCssBaseline from './MuiCssBaseline'
import MuiDialog from './MuiDialog'
import MuiInput from './MuiInput'
import MuiList from './MuiList'
import MuiTable from './MuiTable'
import MuiTabs from './MuiTabs'
import MuiTooltip from './MuiTooltip'
import MuiTypography from './MuiTypography'
import MuiAutocomplete from './MuiAutocomplete'
import MuiSelect from './MuiSelect'
import MuiPagination from './MuiPagination'
import MuiLink from './MuiLink'

export default {
  MuiCssBaseline,
  ...MuiInput,
  ...MuiDialog,
  ...MuiList,
  ...MuiButton,
  ...MuiTabs,
  ...MuiChip,
  ...MuiTooltip,
  ...MuiTypography,
  ...MuiTable,
  ...MuiAutocomplete,
  ...MuiSelect,
  ...MuiPagination,
  ...MuiLink,
  PrivateNotchedOutline: {
    root: {
      borderWidth: 0,
    },
  },
}
