export const styles = {
	modal: {
		display: 'flex',
		flexDirection: 'column',
		width: '200px',
		color: '#242424',
		paddingBottom: 7,
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: 3,
			flex: {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				gap: 4,
				switch: {
					borderLeft: { xs: 'none', md: '1px solid rgba(184, 166, 175, 0.21)' },
					padding: { xs: 0, md: '10px' },
					tag: {
						color: '#242424',
						marginBottom: '10px',
					},
				},
			},
			closeButton: {
				marginTop: '1rem',
			},
			submit: {
				height: '45px',
				marginTop: '2rem',
				width: '100%',
			},
		},
	},
}
