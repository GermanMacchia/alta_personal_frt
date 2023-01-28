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

interface Props {
	areas: Area[]
	handleOpen: () => void
}

export const AreaList: FC<Props> = ({ areas, handleOpen }) => {
	const matches = useMediaQuery('(min-width:600px)')
	return (
		<>
			<TableContainer
				component={Paper}
				sx={{ width: 550, height: { xs: '70vh', md: 500 } }}>
				<Table stickyHeader size='small' sx={{ padding: '30px', height: '65vh' }}>
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
								<TableRow
									key={area._id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component='th'>{area.nombre.toUpperCase()}</TableCell>
									<TableCell
										sx={{
											'& .MuiBox-root': {
												justifyContent: 'flex-end',
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
