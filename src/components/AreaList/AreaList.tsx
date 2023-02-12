import { FC } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  Box,
  IconButton,
} from '@mui/material'
import { Area } from '../../interfaces'
import { OptionsButtons } from '../../shared'
import { styles } from './styles'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import { usePagination } from '../../hooks'
import { TablePagination } from '../../shared'

interface Props {
  areas: Area[]
  handleOpen: () => void
}

export const AreaList: FC<Props> = ({ areas, handleOpen }) => {
  const desktop = useMediaQuery('(min-width:600px)')
  const sortedAreasByName = areas.sort((a: Area, b: Area) =>
    a.nombre.localeCompare(b.nombre)
  )
  const {
    pageNumber,
    cantPages,
    handleChangePage,
    handleChangeRowsNumber,
    rowsPerPage,
    actualPage,
  } = usePagination(sortedAreasByName)

  return (
    <Box
      display='flex'
      flexDirection='column'
      width={{ xs: '100%', md: '30%' }}>
      <TablePagination
        handleRowsNumber={handleChangeRowsNumber}
        rowsPerPage={rowsPerPage}
        page={pageNumber}
        handleChangePage={handleChangePage}
        cantPages={cantPages}
      />
      <TableContainer component={Paper} sx={styles.container}>
        <Table stickyHeader size='small' sx={styles.container.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>ÁREA</b>
              </TableCell>
              <TableCell />
              {!desktop && (
                <TableCell align='right'>
                  <IconButton onClick={handleOpen}>
                    <PlaylistAddIcon
                      color='success'
                      sx={{ fontSize: '35px' }}
                    />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {actualPage &&
              actualPage.map((area: Area) => (
                <TableRow key={area._id}>
                  <TableCell component='th'>
                    {area.nombre.toUpperCase()}
                  </TableCell>
                  <TableCell />
                  <TableCell
                    sx={{
                      '& .MuiBox-root': {
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                      },
                    }}>
                    <OptionsButtons data={area} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
