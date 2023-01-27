import { FC } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { styles } from './styles'
import { Box } from '@mui/material'

interface Props {
	handleChange: (event: any) => void
}

export const InputSearch: FC<Props> = ({ handleChange }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignContent: 'center',
				margin: '10px 0',
			}}>
			<Paper sx={styles.table.inputSearch}>
				<InputBase
					sx={styles.table.inputSearch}
					placeholder='Buscar'
					onChange={handleChange}
					color='success'
				/>
				<IconButton
					disabled
					type='button'
					sx={{ padding: '10px' }}
					aria-label='search'>
					<SearchIcon />
				</IconButton>
			</Paper>
		</Box>
	)
}
