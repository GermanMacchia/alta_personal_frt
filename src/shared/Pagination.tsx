import { Box, TablePagination } from '@mui/material'
import { FC } from 'react'
import { Empleado, Area } from '../interfaces'

interface Props {
    data: ( Empleado[] | Area[] )
    page: number
    rowsPerPage: number
    handleChangePage: ( event: unknown, newPage: number ) => void
    handleChangeRowsPerPage: ( event: React.ChangeEvent<HTMLInputElement> ) => void
}

const styles = {
    container: {
        display: 'flex',
        marging: 0,
        justifyContent: 'flex-end',
        background: '#242424',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        pagination: {
            color: 'aliceblue',
            '& .MuiTablePagination-selectIcon, .MuiSvgIcon-root': {
                fill: 'aliceblue'
            },
        }
    }
}

export const Pagination: FC<Props> = ( { data, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } ) => {
    return (
        <Box sx={ styles.container }>
            <TablePagination
                labelRowsPerPage={ <p>Filas por página</p> }
                sx={ styles.container.pagination }
                rowsPerPageOptions={ [ 5, 10, 20 ] }
                count={ data.length }
                rowsPerPage={ rowsPerPage }
                page={ page }
                onPageChange={ handleChangePage }
                onRowsPerPageChange={ handleChangeRowsPerPage }
            />
        </Box>
    )
}