import { FC, useEffect } from 'react'
import { styles } from './styles'
import { filter, debounce } from '../../helpers'
import { Area, Empleado } from '../../interfaces'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { TableRows } from './TableRows'
import { TablePagination } from '../../shared/TablePagination'
import { usePagination } from '../../hooks/usePagination'

interface Props {
  areas: Area[]
  empleados: Empleado[]
}

export const EmpleadosList: FC<Props> = ({ areas, empleados }) => {
  const { pageNumber, cantPages, handleChangePage, actualPage, handleFilter } =
    usePagination(empleados, 4, 8, areas)

  if (!actualPage) return <></>

  return (
    <>
      <TablePagination
        page={pageNumber}
        handleChangePage={handleChangePage}
        cantPages={cantPages}
      />
      <TableContainer sx={styles.table} component={Paper}>
        <Table size='small' stickyHeader padding='normal'>
          <TableRows
            handleFilter={handleFilter}
            empleados={actualPage as Empleado[]}
            areas={areas}
          />
        </Table>
      </TableContainer>
    </>
  )
}
