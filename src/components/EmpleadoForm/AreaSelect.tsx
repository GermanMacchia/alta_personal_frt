
import { FC, useEffect, useState } from 'react'
import { styles } from './styles'
import { useFormContext } from 'react-hook-form'
import { useEmpleadoForm } from '../../hooks'
import { Area } from '../../interfaces'
import { Typography, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'

interface Props {
    trigger: boolean
}

export const AreaSelect: FC<Props> = ( { trigger } ) => {
    const { areas: listaAreas } = useEmpleadoForm()
    const [ area, setArea ] = useState( '' )
    const { register, formState: { errors } } = useFormContext()

    const handleChange = ( event: SelectChangeEvent ) => {
        setArea( event.target.value )
    }

    useEffect( () => {
        setArea( '' )
    }, [ trigger ] )

    return (
        <FormControl variant='standard' color='success' sx={ { minWidth: 120 } } size="medium">
            <Select
                MenuProps={ styles.container.form.select.__menuprops }
                { ...register( 'area', { required: 'requerido' } ) }
                sx={ { color: area ? 'whitesmoke' : 'grey' } }
                variant='standard'
                color='success'
                onChange={ handleChange }
                defaultValue={ '' }
                displayEmpty
            >
                <MenuItem value="" disabled sx={ { color: 'text.disabled' } }>Área</MenuItem>
                { listaAreas && listaAreas.map( ( area: Area ) => <MenuItem key={ area._id } value={ area._id }>{ area.nombre.toUpperCase() }</MenuItem> ) }
            </Select>
            { errors.name && (
                <Typography
                    variant='caption'
                    sx={ { position: 'absolute', margin: '-21px 0', right: 0 } }
                    color='#fc746d'
                    className='errorText'
                >
                    { ( errors as any ).name.message }
                </Typography>
            ) }
        </FormControl>
    )
}