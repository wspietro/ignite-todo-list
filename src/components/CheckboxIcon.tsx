import { Checkbox } from '@mui/material';
import { COLORS } from '../styles/Constants';

const checkboxStyles = {
  p: 0, // padding 0 para conseguir alinhar elemento
  color: COLORS.produto.blue,
  '&:hover': {
    color: COLORS.produto.blueDark,
    backgroundColor: 'initial',
  },
  '&.Mui-checked': {
    color: COLORS.produto.purpleDark,
    '&:hover': {
      color: COLORS.produto.purple
    }
  },
}

function CheckboxIcon() {
  return (
    <>
      <Checkbox sx={checkboxStyles} />
    </>
  )
}

export default CheckboxIcon