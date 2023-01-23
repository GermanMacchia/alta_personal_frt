import { useState } from 'react'

export const useEmpleadoEdit = () => {
    const [ state, setState ] = useState( {
        nombre: true,
        apellido: true,
        dni: true,
        esDesarrollador: true,
        descripcion: true,
        area: true,
        fechaNac: true,
    } )

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setState( {
            ...state,
            [ event.target.name ]: event.target.checked,
        } )
    }

    return {
        handleChange,
        state
    }

}
