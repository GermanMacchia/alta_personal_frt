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
		<Box sx={styles.table.drawer.box.inputContainer}>
			<Paper>
				<IconButton disabled type='button' aria-label='search'>
					<SearchIcon />
				</IconButton>
				<InputBase
					inputProps={{
						style: {
							marginLeft: '10px',
						},
					}}
					sx={styles.table.drawer.box.inputContainer.inputSearch}
					placeholder='Buscar'
					onChange={handleChange}
					color='success'
				/>
			</Paper>
		</Box>
	)
}
