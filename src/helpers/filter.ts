import { Empleado } from '../interfaces/'


export const filter = ( array: Empleado[], entrada: string ) => {

    const regex = new RegExp( entrada, 'gi' )

    const filtrarNumeros = () => {
        const aux = array.filter( empl => regex.test( empl._id ) || regex.test( empl.dni.toString() ) )
        return aux
    }

    const filtrarLetras = () => {
        const aux = array.filter(
            empl => regex.test( empl.descripcion ) || regex.test( empl.nombre ) || regex.test( empl.apellido ) || regex.test( empl.area )
        )
        return aux
    }

    if ( /\d/g.test( entrada ) ) return filtrarNumeros()
    if ( /\D/g.test( entrada ) ) return filtrarLetras()
}

