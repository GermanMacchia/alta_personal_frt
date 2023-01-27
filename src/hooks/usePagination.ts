import React from 'react'
import { useState } from 'react'

export const usePagination = () => {
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

	return {
		page,
		rowsPerPage,
		handleChangePage,
		handleChangeRowsPerPage,
	}
}
