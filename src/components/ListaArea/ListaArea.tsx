import { FC } from 'react'
<<<<<<< HEAD
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
=======
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
>>>>>>> main
import { Area } from '../../interfaces'
import { Botonera } from '../../shared'

interface Props {
    areas: Area[]
}

export const ListaArea: FC<Props> = ( { areas } ) => {
    return (
        <>
            <TableContainer component={ Paper } sx={ { width: 550 } }>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>ÁREA</b></TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { areas.map( ( area ) => (
                            <TableRow
                                key={ area._id }
                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                            >
                                <TableCell component="th" scope="row">
                                    { area.nombre.toUpperCase() }
                                </TableCell>
                                <TableCell align="right">
                                    <Botonera data={ area } />
                                </TableCell>
                            </TableRow>
                        ) ) }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}