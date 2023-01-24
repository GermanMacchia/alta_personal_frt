import { Box, Checkbox } from '@mui/material'
import { ChangeEvent, FC, useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
    devCheckActivo?: boolean
}

export const DevCheckbox: FC<Props> = ( { devCheckActivo } ) => {
    const [ checked, setChecked ] = useState( false )
    const { register, formState: { isSubmitted } } = useFormContext()

    const handleChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        setChecked( event.target.checked )
    }

    useEffect( () => {
        setChecked( false )
    }, [ isSubmitted ] )

    return (
        <Box sx={ { display: 'flex', justifyContent: 'space-between', width: '50%' } }>
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