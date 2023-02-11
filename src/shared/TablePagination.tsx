import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { FC } from 'react'

const styles = {
  container: {
    margin: '10px 0',
    pagination: {
      background: 'white',
      padding: 1,
    },
  },
}

interface Props {
  page: number
  cantPages: number
  handleChangePage: (event: unknown, newPage: number) => any
}

export const TablePagination: FC<Props> = ({
  handleChangePage,
  page,
  cantPages,
}) => {
  return (
    <Stack spacing={2} sx={styles.container}>
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
  )
}
