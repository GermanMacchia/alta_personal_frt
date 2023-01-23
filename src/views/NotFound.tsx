import React from "react"
import { useRouteError } from "react-router"
import { Link } from "react-router-dom"


export const NotFound = () => {
    const error = useRouteError()

    return (
        <>
            <Link to="/alta_personal_frt">Volver</Link>
            <h1>Error 404 - NotFound </h1>
            <p>{ error && ( error as any )?.data }</p>
        </>
    )
}
