
import { FC, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useEmpleadoForm } from '../../hooks/useEmpleadoForm'
import { Area } from '../../interfaces/area.interface'
import { styles } from './styles'
import { Typography, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material/'


interface Props {
    name: string,
    rules: any
}

export const AreaSelect: FC<Props> = ( { name, rules } ) => {
    const { areas: listaAreas } = useEmpleadoForm()
    const [ area, setArea ] = useState( '' )
    const { register, formState: { errors } } = useFormContext()

    const handleChange = ( event: SelectChangeEvent ) => {
        console.log( event.target.value )
        setArea( event.target.value )
    }

    return (
        <FormControl variant='standard' color='success' sx={ { minWidth: 120 } } size="small">
            <Select
                MenuProps={ styles.select.menuprops }
                { ...register( 'area', { required: 'requerido' } ) }
                sx={ { color: area ? 'whitesmoke' : 'grey' } }
                variant="standard"
                color='success'
                onChange={ handleChange }
                defaultValue={ "" }
                displayEmpty
            >
                <MenuItem value="" disabled sx={ { color: 'text.disabled' } }>Back End</MenuItem>
                { listaAreas && listaAreas.map( ( area: Area ) => <MenuItem key={ area._id } value={ area._id }>{ area.nombre.toUpperCase() }</MenuItem> ) }
            </Select>
            { errors[ name ] && (
                <Typography
                    variant="caption"
                    sx={ { position: 'absolute', margin: '-21px 0', right: 0 } }
                    color="#fc746d"
                    className="errorText"
                >
                    { ( errors as any )[ name ].message }
                </Typography>
            ) }
        </FormControl>
    )
}