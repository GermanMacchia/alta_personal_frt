import React, { FC } from 'react'
import { Input } from '../../shared/Input'
import { Typography } from '@mui/material/'
import { Label, styles } from './styles'
import { Box } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export const AreaInput: FC<{ active?: boolean }> = ( { active } ) => {
    const { register } = useFormContext()

    return (
        <Box sx={ styles.form }>
            <input { ...register( 'formType' ) } type="hidden" value="AltaArea" />
            <Label>
                <Box sx={ styles.tag }>
                    <Typography fontWeight={ 400 } display={ 'inline-block' }>
                        Nombre &nbsp;
                    </Typography>
                    <Typography fontWeight={ 400 } color={ 'primary.main' } display={ 'inline-block' }>
                        *
                    </Typography>
                </Box>
                <Input
                    name="nombre"
                    disabled={ active }
                    rules={ {
                        required: 'Nombre es requerido',
                        pattern: {
                            value: /\w/g,
                            message: 'Solo se permiten letras',
                        },
                    } }
                    placeholder="Administración"
                    type="text"
                />
            </Label>
        </Box>
    )
}
