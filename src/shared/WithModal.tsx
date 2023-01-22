import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { FC } from 'react'


export const styles = {
    container: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color: 'black'
    }
}


interface Props {
    open: boolean
    handleClose: () => void
    children?: React.ReactNode
}

export const WithModal: FC<Props> = ( { open, handleClose, children } ) => {


    return (
        <div>
            <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ styles.container }>
                    <Button onClick={ handleClose }>X</Button>
                    { children }
                </Box>
            </Modal>
        </div>
    )
}