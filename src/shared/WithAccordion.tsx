import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	useMediaQuery,
} from '@mui/material'
import { FC, ReactNode } from 'react'

const styles = {
	container: {
		background: '#242424',
		color: 'whitesmoke',
		height: 50,
		border: 'none',
		'& .MuiSvgIcon-root': {
			fill: 'aliceblue',
		},
	},
}
interface Props {
	children: ReactNode
}

export const WithAccordion: FC<Props> = ({ children }): any => {
	const matches = useMediaQuery('(min-width:600px)')

	if (matches) return children
	return (
		<Accordion sx={styles.container} disableGutters={true}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'>
				Formulario
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	)
}
