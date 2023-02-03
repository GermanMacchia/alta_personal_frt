import { FC } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material'
import { Area } from '../../interfaces'
import { OptionsButtons } from '../../shared'
import IconButton from '@mui/material/IconButton/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useMediaQuery } from '@mui/material'
import { styles } from './styles'

interface Props {
	areas: Area[]
	handleOpen: () => void
}

export const AreaList: FC<Props> = ({ areas, handleOpen }) => {
	const matches = useMediaQuery('(min-width:600px)')
	return (
		<>
			<TableContainer component={Paper} sx={styles.container}>
				<Table stickyHeader size='small' sx={styles.container.table}>
					<TableHead>
						<TableRow>
							<TableCell>
								<b>ÁREA</b>
							</TableCell>
							{!matches && (
								<TableCell align='right'>
									<IconButton onClick={handleOpen}>
										<AddCircleOutlineIcon color='success' sx={{ fontSize: '35px' }} />
									</IconButton>
								</TableCell>
							)}
						</TableRow>
					</TableHead>
					<TableBody>
						{areas
							.sort((a, b) => a.nombre.localeCompare(b.nombre))
							.map(area => (
								<TableRow key={area._id}>
									<TableCell component='th'>{area.nombre.toUpperCase()}</TableCell>
									<TableCell
										sx={{
											'& .MuiBox-root': {
												display: 'flex',
												justifyContent: 'flex-end',
												width: '100%',
											},
										}}>
										<OptionsButtons data={area} />
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
