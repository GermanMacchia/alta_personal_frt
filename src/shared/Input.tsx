import { Box, Typography, TextField } from '@mui/material/'
import { useFormContext } from 'react-hook-form'
import { FC } from 'react'
import { styles } from '../components/AreaForm/styles'

interface Props {
    name: string,
    rules: any
    placeholder: string
    defaultValue?: string
    value?: string
    type?: string
    disabled?: boolean
}


export const Input: FC<Props> = ( {
    name,
    rules,
    placeholder,
    defaultValue,
    type = 'string',
    disabled = false,
    value
} ) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    return (
        <Box sx={ { display: 'flex', justifyContent: 'end', marginBottom: '5px' } }>
            <TextField
                { ...register( name, { ...rules } ) }
                type={ type }
                InputProps={ {
                    style: {
                        color: 'white',
                    }
                } }
                variant="standard"
                placeholder={ placeholder }
                defaultValue={ defaultValue }
                disabled={ disabled }
                value={ value }
                color='success'
            />
            <br />
            { errors[ name ] && (
                <Typography
                    variant="caption"
                    sx={ { position: 'absolute', margin: '-20px 0' } }
                    color="#fc746d"
                    className="errorText"

                >
                    { errors[ name ].message }
                </Typography>
            ) }
        </Box>
    )
}

