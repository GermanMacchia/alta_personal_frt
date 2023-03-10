import { useState, FC, SyntheticEvent } from 'react'
import { styles } from './styles'
import { InputSearch } from './InputSearch'
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useMediaQuery,
} from '@mui/material'
import { Area, Empleado } from '../../interfaces'
import { OptionsButtons } from '../../shared'
import { capitalize } from '../../helpers/capitalize'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'

interface Props {
  handleFilter: (e: SyntheticEvent) => void
  empleados: Empleado[]
  areas: Area[]
}

const ordenHileras = [
  { llave: 'dni', etiqueta: 'DNI' },
  { llave: 'nombre', etiqueta: 'NOMBRE' },
  { llave: 'apellido', etiqueta: 'APELLIDO' },
  { llave: 'fechaNac', etiqueta: 'FECHA NACIMIENTO' },
  { llave: 'descripcion', etiqueta: 'DESCRIPCIÓN' },
  { llave: 'esDesarrollador', etiqueta: 'DESARROLLADOR' },
  { llave: 'area', etiqueta: 'ÁREA' },
  { llave: 'nombre y apellido', etiqueta: 'EMPLEADO' },
]

const retonarHeaders = (isDesktop: boolean) => {
  return ordenHileras.map(hilera => {
    switch (hilera.llave) {
      case 'dni':
        return (
          <TableCell sx={{ paddingLeft: '15px' }} key={hilera.llave}>
            <b>{hilera.etiqueta}</b>
          </TableCell>
        )
      case 'nombre y apellido':
        return (
          !isDesktop && (
            <TableCell key={hilera.llave}>
              <b>{hilera.etiqueta}</b>
            </TableCell>
          )
        )
      default:
        return (
          isDesktop && (
            <TableCell align='right' key={hilera.llave}>
              <b>{hilera.etiqueta}</b>
            </TableCell>
          )
        )
    }
  })
}

const getAreaName = (areas: Area[], id: string) => {
  return areas.find(area => area._id === id)?.nombre
}

export const TableRows: FC<Props> = ({ handleFilter, empleados, areas }) => {
  const isDesktop = useMediaQuery('(min-width:600px)')
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen(!isOpen)

  return (
    <>
      <TableHead>
        <TableRow>
          {retonarHeaders(isDesktop)}
          <TableCell align='right'>
            {isDesktop ? (
              <InputSearch handleChange={handleFilter} />
            ) : (
              <>
                <IconButton onClick={toggleDrawer}>
                  <SearchIcon
                    sx={{
                      '&.MuiSvgIcon-fontSizeMedium': {
                        fontSize: '30px',
                        color: '#2c306f',
                      },
                    }}
                  />
                </IconButton>
                <Drawer
                  anchor={'top'}
                  open={isOpen}
                  variant='temporary'
                  PaperProps={{
                    style: {
                      borderBottom: '5px solid #496662',
                      height: 125,
                    },
                  }}
                  onClose={toggleDrawer}>
                  <Box sx={styles.table.drawer}>
                    <List>
                      <Box sx={styles.table.drawer.box}>
                        <IconButton
                          sx={{ marginRight: 1 }}
                          onClick={toggleDrawer}>
                          <CloseIcon color='error' />
                        </IconButton>
                      </Box>
                      <InputSearch handleChange={handleFilter} />
                    </List>
                  </Box>
                </Drawer>
              </>
            )}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {empleados.map(empleado => (
          <TableRow
            key={empleado._id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              ...styles.table.tableItem,
            }}>
            <TableCell align='left' scope='dni'>
              {empleado.dni}
            </TableCell>
            {!isDesktop && (
              <TableCell scope='nombre'>
                {capitalize(empleado.nombre) +
                  ' ' +
                  capitalize(empleado.apellido)}
              </TableCell>
            )}
            {isDesktop && (
              <>
                <TableCell align='right' scope='nombre'>
                  {empleado.nombre.toUpperCase()}
                </TableCell>
                <TableCell align='right' scope='apellido'>
                  {empleado.apellido.toUpperCase()}
                </TableCell>
                <TableCell align='right' scope='fechaNac'>
                  {new Date(empleado.fechaNac).toLocaleDateString()}
                </TableCell>
                <TableCell align='right' width='18%' scope='descripcion'>
                  {empleado.descripcion.toUpperCase()}
                </TableCell>
                <TableCell align='right' scope='esDesarrollador'>
                  {empleado.esDesarrollador ? (
                    <DoneIcon color='success' />
                  ) : (
                    <ClearIcon color='error' />
                  )}
                </TableCell>
                <TableCell align='right'>
                  {getAreaName(areas, empleado.area)?.toUpperCase()}
                </TableCell>
              </>
            )}
            <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
              <OptionsButtons data={empleado} isUser={true} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  )
}
