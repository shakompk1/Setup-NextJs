import spacing from 'theme/spacing'

export default {
  MuiSelect: {
    icon: {
      color: 'inherit',
    },
    iconOutlined: {
      right: spacing * 2,
    },
    // selectMenu: {
    //   height: 48,
    // },
    select: {
      // paddingTop: spacing,
      // paddingBottom: spacing,
      '&:focus': {
        backgroundColor: 'inherit',
      },
    },
  },
}
