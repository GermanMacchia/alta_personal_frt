import { FC } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { Area } from '../../interfaces'
import { OptionsButtons } from '../../shared'

interface Props {
    areas: Area[]
}

export const AreaList: FC<Props> = ( { areas } ) => {

    return (
        <>
            <TableContainer component={ Paper } sx={ { width: 550, height: 300 } }>
                <Table stickyHeader size='small' sx={ { padding: '30px' } }>
                    <TableHead >
                        <TableRow >
                            <TableCell><b>ÁREA</b></TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { areas
                            .sort( ( a, b ) => a.nombre.localeCompare( b.nombre ) )
                            .map( ( area ) => (
                                <TableRow
                                    key={ area._id }
                                    sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                                >
                                    <TableCell component="th" scope="row">
                                        { area.nombre.toUpperCase() }
                                    </TableCell>
                                    <TableCell align="right">
                                        <OptionsButtons data={ area } />
                                    </TableCell>
                                </TableRow>
                            ) ) }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}