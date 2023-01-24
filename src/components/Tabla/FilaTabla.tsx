import { FC } from 'react'
import { styles } from './styles'
import { InputBusqueda } from './InputBusqueda'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Area, Empleado } from '../../interfaces'
import { Botonera } from '../../shared'

interface Props {
  handleFilter: ( e: React.SyntheticEvent ) => void,
  empleados: Empleado[],
  areas: Area[]
}

const ordenHileras = [
  { llave: 'dni', etiqueta: 'DNI' },
  { llave: 'nombre', etiqueta: 'NOMBRE' },
  { llave: 'apellido', etiqueta: 'APELLIDO' },
  { llave: 'fechaNac', etiqueta: 'FECHA NACIMIENTO' },
  { llave: 'descripcion', etiqueta: 'DESCRIPCION' },
  { llave: 'esDesarrollador', etiqueta: 'ES DESARROLLADOR' },
  { llave: 'area', etiqueta: 'AREA' }
]

const retonarHeaders = () => {
  return ordenHileras.map( hilera => {
    return (
      hilera.llave === 'dni'
        ? <TableCell key={ hilera.llave }><b>{ hilera.etiqueta }</b></TableCell>
        : <TableCell align="right" key={ hilera.llave } ><b>{ hilera.etiqueta }</b></TableCell>
    )
  } )
}

const getAreaName = ( areas: Area[], id: string ) => {
  return areas.find( area => area._id === id )?.nombre
}


export const FilaTabla: FC<Props> = ( { handleFilter, empleados, areas } ) => {

  return (
    <>

      <TableHead>
        <TableRow sx={ styles.table.tableHeader }>
          { retonarHeaders() }
          <TableCell align="right">
            <InputBusqueda handleChange={ handleFilter } />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { empleados.map( ( empleado ) => (
          <TableRow
            key={ empleado._id }
            sx={ { '&:last-child td, &:last-child th': { border: 0 }, ...styles.table.tableItem } }
          >
            <TableCell component="th" scope="row">{ empleado.dni }</TableCell>
            <TableCell align="right">{ empleado.nombre.toUpperCase() }</TableCell>
            <TableCell align="right">{ empleado.apellido.toUpperCase() }</TableCell>
            <TableCell align="right">{ new Date( empleado.fechaNac ).toLocaleDateString() }</TableCell>
            <TableCell align="right">{ empleado.descripcion.toUpperCase() }</TableCell>
            <TableCell align="right">{
              empleado.esDesarrollador
                ? <CheckCircleIcon color='success' />
                : <CancelIcon color='warning' /> }
            </TableCell>
            <TableCell align="right">{ getAreaName( areas, empleado.area )?.toUpperCase() }</TableCell>
            <TableCell sx={ styles.table.tableButtons }>
              <Botonera data={ empleado } isUser={ true } />
            </TableCell>
          </TableRow>
        ) ) }
      </TableBody>
    </>
  )
}
