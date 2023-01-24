
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardInfo } from '../src/components/CardInfo/CardInfo'
import { Empleado } from '../src/interfaces/empleado.interface'
import { Area } from '../src/interfaces/area.interface'

describe( "Area From", () => {
    const empleado: Empleado = {
        _id: "63cfe6305d3eb403169bac26",
        descripcion: "Liquidación de sueldos, contaduria",
        dni: 23849098,
        esDesarrollador: false,
        fechaNac: new Date( "1979-06-30T03:00:00.000Z" ),
        nombre: "patricia",
        apellido: "azzura",
        area: "63cfe62f5d3eb403169bac13",
    }
    const areas: Area[] = [ { nombre: "RRHH", _id: "63cfe62f5d3eb403169bac13" } ]

    const handleClose = () => void

        beforeEach( () => {
            render( <CardInfo empleado={ empleado } areas={ areas } handleClose={ handleClose } /> )
        } )

    test( "should", () => {
        expect( screen.getByText( "DNI:" ) ).toBeDefined()
    } )
} )