import { Checkbox } from '@mui/material';
import { COLORS } from '../styles/Constants'

function CheckboxIcon() {
  return (
    <Checkbox sx={{
      color: COLORS.produto.blue,
      '&:hover': {
        color: COLORS.produto.blueDark,
      },
    }} />
  )
}

export default CheckboxIcon