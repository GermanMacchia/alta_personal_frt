import { FC } from 'react'

interface Props {
    handleClose: () => void
}

export const CardEdit: FC<Props> = ( { handleClose } ) => {

    return (
        <>
            <div>CardEdit</div>
            <button onClick={ handleClose }>Cerrar</button>
        </>
    )
}
