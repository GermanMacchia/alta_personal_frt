import { FC, useEffect } from 'react'
<<<<<<< HEAD
=======
import { styles } from './styles'
>>>>>>> main
import { CardEditActive } from './CardEditActive'
import { Box } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { capitalize } from '../../helpers'

interface Props {
    data: any
}

export const CardEdit: FC<Props> = ( { data } ) => {
    const { setValue } = useFormContext()

    useEffect( () => {
        setValue( '_id', capitalize( data._id ) )
        setValue( 'nombre', capitalize( data.nombre ) )
        setValue( 'apellido', capitalize( data.apellido ) )
        setValue( 'descripcion', data.descripcion )
        setValue( 'dni', data.dni )
        setValue( 'fechaNac', data.fechaNac )
        setValue( 'area', data.area )
        setValue( 'esDesarrollador', data.esDesarrollador )
    }, [ data ] )

    return (
        <Box sx={ styles.frame }>
            <CardEditActive />
        </Box>
    )
}

