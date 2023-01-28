import { WithFormProvider } from '../shared'
import { AreaForm } from '../components/AreaForm'
import { useAreaForm } from '../hooks/useAreaForm'
import { Box, LinearProgress, useMediaQuery } from '@mui/material'
import { AlertSnackBar } from '../shared/AlertSnackBar'
import { AreaList } from '../components/AreaList'
import { WithModal } from '../shared/WithModal'
import { useState } from 'react'

const messageSuccess = 'Los datos fueron actualizados'
const style = {
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		margin: '5vh auto',
		width: '100vw',
		gap: '20px',
	},
	loading: {
		height: '10px',
		marginTop: '5px',
	},
}

export const ListaArea = () => {
	const { altaArea, areas } = useAreaForm()
	const [isOpen, setIsOpen] = useState(false)
	const matches = useMediaQuery('(min-width:600px)')

	const areaForm = () => (
		<WithFormProvider
			children={<AreaForm isLoading={altaArea.isLoading} />}
			handleSubmit={altaArea.mutateAsync}
		/>
	)

	if (areas.isLoading)
		return <LinearProgress sx={style.loading} color='success' />

	const tablaVacia = areas?.data.length === 0

	return (
		<Box sx={style.container}>
			{tablaVacia && <h2>Tabla sin datos</h2>}
			{!tablaVacia && (
				<AreaList areas={areas.data} handleOpen={() => setIsOpen(!isOpen)} />
			)}
			{matches && !isOpen && areaForm()}
			{isOpen && (
				<WithModal
					children={areaForm()}
					open={isOpen}
					handleClose={() => setIsOpen(!isOpen)}
				/>
			)}
		</Box>
	)
}
