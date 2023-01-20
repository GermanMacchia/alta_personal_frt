import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styles } from './styles'
import { Area, Empleado } from '../../interfaces'
import { FC } from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface Props {
    areas: UseQueryResult
    empleados: UseQueryResult
}

export const Tabla: FC<Props> = ( { areas, empleados } ) => {
    const { data: areasArray } = areas
    const { data: empleadosArray } = empleados
    const getAreaName = ( id: string ) => {
        return ( areasArray as Area[] ).find( area => area._id === id )?.nombre
    }

    return (
        <TableContainer sx={ styles.table } component={ Paper }>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={ styles.table.tableHeaders } ><b>NOMBRE</b></TableCell>
                        <TableCell sx={ styles.table.tableHeaders } align="right"><b>APELLIDO</b></TableCell>
                        <TableCell sx={ styles.table.tableHeaders } align="right"><b>DNI</b></TableCell>
                        <TableCell sx={ styles.table.tableHeaders } align="right"><b>FECHA NACIMIENTO</b></TableCell>
                        <TableCell sx={ styles.table.tableHeaders } align="right"><b>DESCRIPCIÓN</b></TableCell>
                        <TableCell sx={ styles.table.tableHeaders } align="right"><b>ES DESARROLLADOR</b></TableCell>
                        <TableCell sx={ styles.table.tableHeaders } align="right"><b>AREA</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { ( empleadosArray as Empleado[] ).map( ( empleado ) => (
                        <TableRow
                            key={ empleado._id }
                            sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                        >
                            <TableCell component="th" scope="row">
                                { empleado.nombre.toUpperCase() }
                            </TableCell>
                            <TableCell align="right">{ empleado.apellido.toUpperCase() }</TableCell>
                            <TableCell align="right">{ empleado.dni }</TableCell>
                            <TableCell align="right">{ new Date( empleado.fechaNac ).toLocaleDateString() }</TableCell>
                            <TableCell align="right">{ empleado.descripcion.toUpperCase() }</TableCell>
                            <TableCell align="right">{
                                empleado.esDesarrollador
                                    ? <CheckCircleIcon color='success' />
                                    : <CancelIcon color='warning' /> }
                            </TableCell>
                            <TableCell align="right">{ getAreaName( empleado.area )?.toUpperCase() }</TableCell>
                        </TableRow>
                    ) ) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}