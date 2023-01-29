import { FC, SetStateAction, useEffect, useState } from 'react'
import { styles } from './styles'
import { filter, debounce } from '../../helpers'
import { Area, Empleado } from '../../interfaces'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { TableRows } from './TableRows'
import { useMediaQuery } from '@mui/material'

interface Props {
	areas: Area[]
	empleados: Empleado[]
}

export const EmpleadosList: FC<Props> = ({ areas, empleados }) => {
	const [listaEmpleados, setListaEmpleados] = useState(empleados)
	const matches = useMediaQuery('(min-width:600px)')

	useEffect(() => {
		setListaEmpleados(empleados)
	}, [empleados])

	const handleFilter = (event: any) => {
		const entrada = event.target.value
		const auxArray = filter(empleados, entrada)

		if (!entrada) setListaEmpleados(empleados)
		else debounce(setListaEmpleados(auxArray as SetStateAction<Empleado[]>))
	}

	return (
		<TableContainer sx={styles.table} component={Paper}>
			<Table size='small' stickyHeader padding={matches ? 'normal' : 'checkbox'}>
				<TableRows
					handleFilter={handleFilter}
					empleados={listaEmpleados}
					areas={areas}
				/>
			</Table>
		</TableContainer>
	)
}
