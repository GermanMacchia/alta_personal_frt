export const styles = {
	modal: {
		display: 'flex',
		flexDirection: 'column',
		color: 'whitesmoke',
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: '3rem',
			backgroundColor: '#242424',
			flex: {
				display: 'flex',
				justifyContent: 'space-between',
				width: '30vw',
				switch: {
					borderLeft: '1px solid rgba(184, 166, 175, 0.21)',
					padding: '10px',
					tag: {
						color: 'white',
						marginBottom: '10px',
					},
				},
			},
			closeButton: {
				marginTop: '1rem',
			},
			submit: {
				width: '100%',
				height: '45px',
				marginTop: '2rem',
			},
		},
		cerrar: {
			marginTop: '2rem',
		},
	},
}
