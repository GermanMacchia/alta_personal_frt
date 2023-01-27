import React, { FC, ReactNode } from 'react'
import { Modal, Box } from '@mui/material'

export const styles = {
	container: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
		color: 'black',
	},
}

interface Props {
	open: boolean
	children?: ReactNode
}

export const WithModal: FC<Props> = ({ open, children }) => {
	return (
		<div>
			<Modal
				open={open}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={styles.container}>{children}</Box>
			</Modal>
		</div>
	)
}
