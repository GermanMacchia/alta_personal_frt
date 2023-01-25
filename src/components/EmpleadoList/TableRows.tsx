import { FC, SyntheticEvent, useState } from 'react'
import { styles } from './styles'
import { InputSearch } from './InputSearch'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Area, Empleado } from '../../interfaces'
import { OptionsButtons } from '../../shared'
import { TablePagination, Box } from '@mui/material'

interface Props {
  handleFilter: ( e: SyntheticEvent ) => void,
  empleados: Empleado[],
  areas: Area[]
}

const ordenHileras = [
  { llave: 'dni', etiqueta: 'DNI' },
  { llave: 'nombre', etiqueta: 'NOMBRE' },
  { llave: 'apellido', etiqueta: 'APELLIDO' },
  { llave: 'fechaNac', etiqueta: 'FECHA NACIMIENTO' },
  { llave: 'descripcion', etiqueta: 'DESCRIPCIÓN' },
  { llave: 'esDesarrollador', etiqueta: 'ES DESARROLLADOR' },
  { llave: 'area', etiqueta: 'ÁREA' }
]

const retonarHeaders = () => {
  return ordenHileras.map( hilera => {
    return (
      hilera.llave === 'dni'
        ? <TableCell sx={ { paddingLeft: '1vw' } } key={ hilera.llave }><b>{ hilera.etiqueta }</b></TableCell>
        : <TableCell align="right" key={ hilera.llave } ><b>{ hilera.etiqueta }</b></TableCell>
    )
  } )
}

const getAreaName = ( areas: Area[], id: string ) => {
  return areas.find( area => area._id === id )?.nombre
}


export const TableRows: FC<Props> = ( { handleFilter, empleados, areas } ) => {
  const [ page, setPage ] = useState( 0 )
  const [ rowsPerPage, setRowsPerPage ] = useState( 5 )

  const handleChangePage = ( event: unknown, newPage: number ) => {
    setPage( newPage )
  }

  const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setRowsPerPage( +event.target.value )
    setPage( 0 )
  }

  return (
    <>

      <TableHead>
        <TableRow>
          { retonarHeaders() }
          <TableCell align="right">
            <InputSearch handleChange={ handleFilter } />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { empleados
          .slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage )
          .map( ( empleado ) => (
            <TableRow
              key={ empleado._id }
              sx={ { '&:last-child td, &:last-child th': { border: 0 }, ...styles.table.tableItem } }
            >
              <TableCell align="center" scope='dni'>{ empleado.dni }</TableCell>
              <TableCell align="right" scope='nombre'>{ empleado.nombre.toUpperCase() }</TableCell>
              <TableCell align="right" scope='apellido'>{ empleado.apellido.toUpperCase() }</TableCell>
              <TableCell align="right" scope='fechaNac'>{ new Date( empleado.fechaNac ).toLocaleDateString() }</TableCell>
              <TableCell align="right" scope='descripcion'>{ empleado.descripcion.toUpperCase() }</TableCell>
              <TableCell align="right" scope='esDesarrollador'>{
                empleado.esDesarrollador
                  ? <CheckCircleIcon color='success' />
                  : <CancelIcon color='warning' /> }
              </TableCell>
              <TableCell align="right">{ getAreaName( areas, empleado.area )?.toUpperCase() }</TableCell>
              <TableCell sx={ styles.table.tableButtons }>
                <OptionsButtons data={ empleado } isUser={ true } />
              </TableCell>
            </TableRow>
          ) ) }
      </TableBody>
      <Box sx={ styles.table.container }>
        <TablePagination
          sx={ styles.table.container.pagination }
          rowsPerPageOptions={ [ 5, 10, 20 ] }
          count={ empleados.length }
          rowsPerPage={ rowsPerPage }
          page={ page }
          onPageChange={ handleChangePage }
          onRowsPerPageChange={ handleChangeRowsPerPage }
        />
      </Box>
    </>
  )
}
