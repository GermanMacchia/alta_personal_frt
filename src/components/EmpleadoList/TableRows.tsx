import { FC, SyntheticEvent } from 'react'
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
import { usePagination } from '../../hooks/usePagination'
import { Pagination } from '../../shared/Pagination'


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
  const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } = usePagination()

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
              <TableCell align="right" width="18%" scope='descripcion'>{ empleado.descripcion.toUpperCase() }</TableCell>
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
      <Pagination
        page={ page }
        rowsPerPage={ rowsPerPage }
        handleChangePage={ handleChangePage }
        handleChangeRowsPerPage={ handleChangeRowsPerPage }
        data={ empleados }
      />
    </>
  )
}
