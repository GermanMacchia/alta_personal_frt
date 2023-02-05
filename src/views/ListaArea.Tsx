import { WithFormProvider } from '../shared'
import { AreaForm } from '../components/AreaForm'
import { useAreaForm } from '../hooks/useAreaForm'
import { LinearProgress, useMediaQuery, Box } from '@mui/material'
import { AreaList } from '../components/AreaList'
import { WithModal } from '../shared/WithModal'
import { useState } from 'react'

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		gap: { xs: 0, md: 5 },
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
		return <LinearProgress sx={styles.loading} color='success' />

	if (areas.data.length === 0) return <h2>Tabla sin datos</h2>
	if (areas.error) return <h4>Error de conexión</h4>

	return (
		<Box sx={styles.container}>
			<AreaList areas={areas.data} handleOpen={() => setIsOpen(!isOpen)} />
			{matches && areaForm()}
			{!matches && isOpen && (
				<WithModal
					children={areaForm()}
					open={isOpen}
					handleClose={() => setIsOpen(!isOpen)}
				/>
			)}
		</Box>
	)
}
