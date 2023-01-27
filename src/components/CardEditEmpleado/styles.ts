import { containerClasses } from '@mui/system'

export const styles = {
	modal: {
		display: 'flex',
		flexDirection: 'column',
		color: 'whitesmoke',
		cerrar: {
			marginTop: '1rem',
		},
		container: {
			display: 'flex',
			flexDirection: 'column',
			width: '30vw',
			form: {
				display: 'flex',
				justifyContent: 'space-between',
				__switch: {
					borderLeft: '1px solid rgba(184, 166, 175, 0.21)',
					padding: '10px',
				},
			},
			submit: {
				marginTop: '1rem',
				height: '45px',
			},
		},
	},
	frame: {
		display: 'flex',
		alignItems: 'center',
		padding: '4rem',
		backgroundColor: '#242424',
	},
}
