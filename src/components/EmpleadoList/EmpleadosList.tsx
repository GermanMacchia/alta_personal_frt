import { FC } from 'react'
import { styles } from './styles'
import { Area, Empleado } from '../../interfaces'
import { Table, TableContainer, Paper } from '@mui/material'
import { TableRows } from './TableRows'
import { TablePagination } from '../../shared'
import { usePagination } from '../../hooks'

interface Props {
  areas: Area[]
  empleados: Empleado[]
}

export const EmpleadosList: FC<Props> = ({ areas, empleados }) => {
  const {
    pageNumber,
    cantPages,
    handleChangePage,
    actualPage,
    handleFilter,
    rowsPerPage,
    handleChangeRowsNumber,
  } = usePagination(empleados, areas)

  if (!actualPage) return <></>

  return (
    <>
      <TablePagination
        page={pageNumber}
        rowsPerPage={rowsPerPage}
        handleRowsNumber={handleChangeRowsNumber}
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
