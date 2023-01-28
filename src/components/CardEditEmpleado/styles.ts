export const styles = {
	modal: {
		display: 'flex',
		flexDirection: 'column',
		color: 'whitesmoke',
		container: {
			display: 'flex',
			flexDirection: 'column',
			width: { xs: '45vw', md: '30vw' },
			form: {
				display: 'flex',
				width: '100%',
				overflow: 'scroll',
				color: 'grey',
				gap: { xs: 6 },
				flexDirection: { xs: 'column', md: 'row' },
				height: '300px',
				switch: {
					borderLeft: '1px solid rgba(184, 166, 175, 0.21)',
					padding: { xs: 1, md: '10px' },
					justifyContent: 'space-between',
					label: { fontSize: '20px', color: 'Black' },
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
		padding: { xs: 2, md: '4rem' },
		backgroundColor: { xs: 'white', md: '#242424' },
	},
}
