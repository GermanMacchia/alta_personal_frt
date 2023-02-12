import { FC } from 'react'
import { InputBase, IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { styles } from './styles'
import { Box } from '@mui/material'

interface Props {
  handleChange: (event: any) => void
}

export const InputSearch: FC<Props> = ({ handleChange }) => {
  return (
    <Box sx={styles.table.drawer.box.inputContainer}>
      <Paper>
        <IconButton
          disabled
          type='button'
          aria-label='search'
          sx={{ paddingBottom: 1.5 }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          inputProps={{
            style: {
              marginLeft: '10px',
            },
          }}
          placeholder='Buscar'
          onChange={handleChange}
          color='success'
        />
      </Paper>
    </Box>
  )
}
