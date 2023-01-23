import { FC } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

interface Props {
    handleChange: ( event: any ) => void
}

export const InputBusqueda: FC<Props> = ( { handleChange } ) => {
    return (
        <Paper
            sx={ { p: '2px 4px', display: 'flex', alignItems: 'center' } }
        >
            <InputBase
                sx={ { ml: 1, flex: 1 } }
                placeholder="Buscar"
                onChange={ handleChange }
                color='success'
            />
            <IconButton disabled type="button" sx={ { p: '10px' } } aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}