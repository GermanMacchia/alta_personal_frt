export const styles = {
	modal: {
		display: 'flex',
		flexDirection: 'column',
		color: { xs: 'black', md: 'whitesmoke' },
		paddingBottom: 7,
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: { xs: '2rem', md: '3rem' },
			backgroundColor: { xs: 'none', md: '#242424' },
			flex: {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				width: '30vw',
				gap: 4,
				switch: {
					borderLeft: { xs: 'none', md: '1px solid rgba(184, 166, 175, 0.21)' },
					padding: { xs: 0, md: '10px' },
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
	},
}
