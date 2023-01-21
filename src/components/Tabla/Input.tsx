import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import DirectionsIcon from '@mui/icons-material/Directions'
import { FC } from 'react'

interface Props {
    handleChange: () => void
}

export const Input: FC<Props> = ( { handleChange } ) => {
    return (
        <Paper
            sx={ { p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 } }
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