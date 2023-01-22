import { FC, useEffect, useState } from 'react'
import { styles } from './styles'
import { filter, debounce } from '../../helpers/'
import { Area, Empleado } from '../../interfaces'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { FilaTabla } from './FilaTabla'
import { usePersonal } from '../../hooks/usePersonal'

interface Props {
    areas: Area[]
    empleados: Empleado[]
}

export const Tabla: FC<Props> = ( { areas, empleados } ) => {
    const [ listaEmpleados, setListaEmpleados ] = useState( empleados )
    const { empleados: query } = usePersonal()

    useEffect( () => {
        setListaEmpleados( query.data )
    }, [ query.isFetching ] )

    const handleFilter = ( event: any ) => {
        const entrada = event.target.value
        const auxArray = filter( empleados, entrada )

        if ( !entrada ) setListaEmpleados( empleados )
        else debounce( setListaEmpleados( auxArray as React.SetStateAction<Empleado[]> ) )
    }

    return (
        <TableContainer sx={ styles.table } component={ Paper }>
            <Table aria-label="simple table">
                <FilaTabla handleFilter={ handleFilter } empleados={ listaEmpleados } areas={ areas } />
            </Table>
        </TableContainer>
    )
}