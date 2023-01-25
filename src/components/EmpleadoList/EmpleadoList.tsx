import { FC, useEffect, useState } from 'react'
import { styles } from './styles'
import { filter, debounce } from '../../helpers'
import { Area, Empleado } from '../../interfaces'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { TableRows } from './TableRows'

interface Props {
    areas: Area[]
    empleados: Empleado[]
}

export const EmpleadosList: FC<Props> = ( { areas, empleados } ) => {
    const [ listaEmpleados, setListaEmpleados ] = useState( empleados )

    useEffect( () => {
        setListaEmpleados( empleados )
    }, [ empleados ] )

    const handleFilter = ( event: any ) => {
        const entrada = event.target.value
        const auxArray = filter( empleados, entrada )

        if ( !entrada ) setListaEmpleados( empleados )
        else debounce( setListaEmpleados( auxArray as React.SetStateAction<Empleado[]> ) )
    }

    return (
        <TableContainer sx={ styles.table } component={ Paper }>
            <Table aria-label="simple table">
                <TableRows handleFilter={ handleFilter } empleados={ listaEmpleados } areas={ areas } />
            </Table>
        </TableContainer>
    )
}