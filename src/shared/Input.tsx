import { Box, Typography, TextField } from '@mui/material/'
import { useFormContext } from 'react-hook-form'
import { FC, useEffect } from 'react'

interface Props {
    name: string,
    rules: any
    disabled?: boolean
    placeholder: string
    type?: string
}


export const Input: FC<Props> = ( { name, rules, placeholder, type = 'string', disabled } ) => {
    const { register, formState: { errors } } = useFormContext()

    useEffect( () => {
    }, [ disabled ] )


    return (
        <Box sx={ { display: 'flex', justifyContent: 'end', marginBottom: '5px' } }>
            <TextField
                { ...register( name, { ...rules } ) }
                type={ type }
                InputProps={ {
                    style: {
                        color: 'whitesmoke',
                    }
                } }
                disabled={ disabled }
                variant="standard"
                placeholder={ placeholder }
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
                    { ( errors as any )[ name ].message }
                </Typography>
            ) }
        </Box>
    )
}

