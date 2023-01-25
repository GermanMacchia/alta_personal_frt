import React from "react"
import { render, screen } from "@testing-library/react"
import { WithFormProvider } from "../src/shared/WithFormProvider"
import { AreaInput } from '../src/components/AreaForm/AreaInput'
import { AreaForm } from '../src/components/AreaForm/AreaForm'


describe( 'AreaInput', () => {
    test( "should have a textbox", () => {
        render( <WithFormProvider children={ <AreaInput /> } handleSubmit={ () => { } } /> )
        expect( screen.getByRole( 'textbox' ) ).toBeInTheDocument()
    } )

} )


describe( 'AreaForm', () => {
    test( "should have a specific text", () => {
        render( <WithFormProvider children={ <AreaForm isLoading={ false } /> } handleSubmit={ () => { } } /> )
        expect( screen.getByText( 'Alta Área' ) ).toBeInTheDocument()
    } )

    test( "should have a button", () => {
        render( <WithFormProvider children={ <AreaForm isLoading={ false } /> } handleSubmit={ () => { } } /> )
        expect( screen.getByRole( 'button' ) ).toBeInTheDocument()
    } )
} )

