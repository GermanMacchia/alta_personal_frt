import { Box, Typography, TextField } from '@mui/material/'
import { useFormContext } from 'react-hook-form'
import { FC } from 'react'

interface Props {
    name: string,
    rules: any
    placeholder: string
    type?: string
}


export const Input: FC<Props> = ( { name, rules, placeholder, type = 'string', } ) => {
    const { register, formState: { errors } } = useFormContext()

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

