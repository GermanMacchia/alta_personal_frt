import { WithFormProvider } from '../shared'
import { AreaForm } from '../components/AreaForm'
import { useAreaForm } from '../hooks/useAreaForm'
import { Box, LinearProgress } from '@mui/material'
import { AlertSnackBar } from '../shared/AlertSnackBar'
import { AreaList } from '../components/AreaList'
import { WithAccordion } from '../shared/WithAccordion'

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
	const areaForm = () => <AreaForm isLoading={altaArea.isLoading} />

	if (areas.isLoading)
		return <LinearProgress sx={style.loading} color='success' />
	const tablaVacia = areas?.data.length === 0

	return (
		<Box sx={style.container}>
			{altaArea.isSuccess && (
				<AlertSnackBar severity='success' message={messageSuccess} isOpen={true} />
			)}
			{tablaVacia && <h2>Tabla sin datos</h2>}
			{!tablaVacia && <AreaList areas={areas.data} />}

			<WithAccordion
				children={
					<WithFormProvider
						children={areaForm()}
						handleSubmit={altaArea.mutateAsync}
					/>
				}
			/>
		</Box>
	)
}
