import { FC } from 'react'
import {
  SelectChangeEvent,
  Stack,
  Pagination,
  Select,
  FormControl,
  Box,
  MenuItem,
} from '@mui/material'

const styles = {
  container: {
    background: 'white',
    margin: '10px 0',
    pagination: {
      padding: 1,
    },
  },
}

interface Props {
  page: number
  cantPages: number
  rowsPerPage: number
  handleChangePage: (event: unknown, newPage: number) => any
  handleRowsNumber: (event: SelectChangeEvent) => any
}

export const TablePagination: FC<Props> = ({
  handleChangePage,
  page,
  cantPages,
  rowsPerPage,
  handleRowsNumber,
}) => {
  return (
    <Box display='flex' sx={styles.container}>
      <FormControl sx={{ m: '10px 18px' }} variant='standard'>
        <Select
          onChange={handleRowsNumber}
          defaultValue=''
          sx={{ width: 50 }}
          displayEmpty>
          <MenuItem value='' disabled>
            {rowsPerPage}
          </MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <Stack spacing={2}>
        <Pagination
          sx={styles.container.pagination}
          variant='outlined'
          color='primary'
          count={cantPages}
          defaultPage={1}
          page={page}
          onChange={handleChangePage}
        />
      </Stack>
    </Box>
  )
}
