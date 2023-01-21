import { FC, useState } from 'react'
import { styles } from './styles'
import { Input } from './Input'
import { filter, debounce } from '../../helpers/'
import { Area, Empleado } from '../../interfaces'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface Props {
    areas: Area[]
    empleados: Empleado[]
}

export const Tabla: FC<Props> = ( { areas, empleados } ) => {
    const [ listaEmpleados, setListaEmpleados ] = useState( empleados )

    const getAreaName = ( id: string ) => {
        return areas.find( area => area._id === id )?.nombre
    }

    const handleModal = () => {

    }

    const handleFilter = ( event: any ) => {
        const entrada = event.target.value
        const auxArray = filter( empleados, entrada )

        if ( !entrada ) setListaEmpleados( empleados )
        else debounce( setListaEmpleados( auxArray as React.SetStateAction<Empleado[]> ) )
    }


    return (
        <TableContainer sx={ styles.table } component={ Paper }>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={ styles.table.tableHeader }>
                        <TableCell><b>NOMBRE</b></TableCell>
                        <TableCell align="right"><b>APELLIDO</b></TableCell>
                        <TableCell align="right"><b>DNI</b></TableCell>
                        <TableCell align="right"><b>FECHA NACIMIENTO</b></TableCell>
                        <TableCell align="right"><b>DESCRIPCIÓN</b></TableCell>
                        <TableCell align="right"><b>ES DESARROLLADOR</b></TableCell>
                        <TableCell align="right"><b>AREA</b></TableCell>
                        <TableCell align="right" sx={ { width: "200px" } } >
                            <Input handleChange={ handleFilter } />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { listaEmpleados.map( ( empleado, idx ) => (
                        <TableRow
                            key={ empleado._id }
                            sx={ { '&:last-child td, &:last-child th': { border: 0 }, ...styles.table.tableItem } }
                            onClick={ handleModal }
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
                            <TableCell align="right">

                            </TableCell>
                        </TableRow>
                    ) ) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}