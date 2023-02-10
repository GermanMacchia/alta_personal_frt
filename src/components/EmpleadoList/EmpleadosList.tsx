import { FC, SetStateAction, useLayoutEffect, useState } from 'react'
import { styles } from './styles'
import { filter, debounce } from '../../helpers'
import { Area, Empleado } from '../../interfaces'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { TableRows } from './TableRows'
import { TablePagination } from '../../shared/TablePagination'
import { useMediaQuery, Box } from '@mui/material'

interface Props {
  areas: Area[]
  empleados: Empleado[]
}

export const EmpleadosList: FC<Props> = ({ areas, empleados }) => {
  const [listaEmpleados, setListaEmpleados] = useState(empleados)

  const isDesktop = useMediaQuery('(min-width:600px)')
  const [page, setPage] = useState(1)
  const [pageEmpleados, setPageEmpleados] = useState(empleados)
  const rowsPerPage = isDesktop ? 4 : 8
  const count = Math.floor(empleados.length / rowsPerPage)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  useLayoutEffect(() => {
    const pageEmpleado = listaEmpleados.slice(
      (page - 1) * rowsPerPage,
      (page - 1) * rowsPerPage + rowsPerPage
    )

    setPageEmpleados(pageEmpleado)
  }, [page, listaEmpleados])

  const handleFilter = (event: any) => {
    const entrada = event.target.value
    const auxArray = filter(empleados, entrada)

    if (!entrada) setListaEmpleados(empleados)
    else debounce(setListaEmpleados(auxArray as SetStateAction<Empleado[]>))
  }

  return (
    <>
      <TablePagination
        page={page}
        handleChangePage={handleChangePage}
        count={count}
      />
      <TableContainer sx={styles.table} component={Paper}>
        <Table size='small' stickyHeader padding='normal'>
          <TableRows
            handleFilter={handleFilter}
            empleados={pageEmpleados}
            areas={areas}
          />
        </Table>
      </TableContainer>
    </>
  )
}
