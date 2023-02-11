import { Empleado } from '../interfaces/empleado.interface'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@mui/material'
import { filter } from '../helpers/filter'
import { debounce } from '../helpers/debounce'
import { Area } from '../interfaces/area.interface'
import { SelectChangeEvent } from '@mui/material/Select'

export const usePagination = (
  data: any,
  // rowsDesktop: number,
  // rowsMovile: number,
  // rowsDefault: number
  areas?: Area[]
) => {
  const [listaData, setListaData] = useState(data)
  const [pageNumber, setPageNumber] = useState(1)
  const [actualPage, setActualPage] = useState<any>()
  const isDesktop = useMediaQuery('(min-width:600px)')
  const [rowsPerPage, setRowsPerPage] = useState(isDesktop ? 4 : 8)
  const cantPages = Math.ceil(listaData.length / rowsPerPage)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPageNumber(newPage)
  }

  const handleChangeRowsNumber = (event: SelectChangeEvent) => {
    setRowsPerPage(+event.target.value)
  }

  useEffect(() => {
    const pageEmpleado: Empleado[] = listaData.slice(
      (pageNumber - 1) * rowsPerPage,
      (pageNumber - 1) * rowsPerPage + rowsPerPage
    )
    setActualPage(pageEmpleado)
  }, [listaData, pageNumber, rowsPerPage])

  const handleFilter = (event: any) => {
    const entrada = event.target.value || ''
    const auxArray = filter(data, entrada, areas)
    if (!entrada) setListaData(data)
    else debounce(setListaData(auxArray))
  }

  return {
    pageNumber,
    setPageNumber,
    actualPage,
    setActualPage,
    cantPages,
    handleChangePage,
    handleFilter,
    rowsPerPage,
    handleChangeRowsNumber,
  }
}
