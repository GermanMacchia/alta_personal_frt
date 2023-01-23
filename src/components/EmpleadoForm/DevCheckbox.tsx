import { Box } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import React, { FC, useState } from 'react'
import { useFormContext } from 'react-hook-form'
interface Props {
    devCheckActivo?: boolean
}

export const DevCheckbox: FC<Props> = ( { devCheckActivo } ) => {
    const [ checked, setChecked ] = useState( false )
    const { register, formState: { errors } } = useFormContext()
    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setChecked( event.target.checked )
    }

    return (
        <Box sx={ { display: 'flex' } }>
            <h4 style={ { color: "whitesmoke" } }>Es desarrollador?</h4>
            <Checkbox
                disabled={ devCheckActivo }
                { ...register( 'esDesarrollador' ) }
                checked={ checked }
                onChange={ handleChange }
                sx={ { margin: '0 1rem 0.2rem', color: 'grey' } }
                color='success'
            />
        </Box>
    )
}