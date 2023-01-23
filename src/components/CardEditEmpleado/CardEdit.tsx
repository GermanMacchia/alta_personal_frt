import React, { FC, useEffect } from 'react'
import { CardEditActive } from './CardEditActive'
import { Box } from '@mui/material'
import { styles } from './styles'
import { useFormContext } from 'react-hook-form'
import { primeraMayuscula } from '../../helpers/primeraMayuscula'

interface Props {
    data: any
}

export const CardEdit: FC<Props> = ( { data } ) => {
    const { setValue } = useFormContext()

    useEffect( () => {
        setValue( '_id', primeraMayuscula( data._id ) )
        setValue( 'nombre', primeraMayuscula( data.nombre ) )
        setValue( 'apellido', primeraMayuscula( data.apellido ) )
        setValue( 'descripcion', data.descripcion )
        setValue( 'dni', data.dni )
        setValue( 'fechaNac', data.fechaNac )
        setValue( 'area', data.area )
        setValue( 'esDesarrollador', data.esDesarrollador )
    }, [ data ] )


    return (
        <Box sx={ styles.containter }>
            <CardEditActive />
        </Box>
    )
}

