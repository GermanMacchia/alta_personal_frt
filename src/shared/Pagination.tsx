import { Box, TablePagination } from '@mui/material'
import { FC } from 'react'
import { Empleado, Area } from '../interfaces'
import { createPortal } from 'react-dom'

interface Props {
	data: Empleado[] | Area[]
	page: number
	rowsPerPage: number
	handleChangePage: (event: unknown, newPage: number) => void
	handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const styles = {
	container: {
		position: 'fixed',
		bottom: { xs: 56, md: 3 },
		right: { xs: 130, xl: 70 },
		marging: 0,
		justifyContent: 'flex-end',
		pagination: {
			color: { xs: 'aliceblue', md: 'black' },
			'& .MuiTablePagination-selectIcon, .MuiSvgIcon-root': {
				fill: { xs: 'aliceblue', md: 'black' },
			},
		},
	},
}

export const Pagination: FC<Props> = ({
	data,
	page,
	rowsPerPage,
	handleChangePage,
	handleChangeRowsPerPage,
}) => {
	return createPortal(
		<Box sx={styles.container}>
			<TablePagination
				labelRowsPerPage={<p></p>}
				sx={styles.container.pagination}
				rowsPerPageOptions={[5, 10, 20]}
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Box>,
		document.body
	)
}
