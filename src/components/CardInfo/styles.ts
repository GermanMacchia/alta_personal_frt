export const styles = {
	container: {
		height: '400px',
		width: { xs: '260px', md: '400px' },
		display: 'flex',
		'&.MuiPaper-rounded': {
			boxShadow: 'none',
		},
		column: {
			display: 'flex',
			flexDirection: 'column',
		},
		section: {
			marginTop: 2,
		},
		image: {
			margin: '0 1rem',
			height: { xs: '100px', md: '200px' },
			width: { xs: '100px', md: '200px' },
			border: '1px solid rgba(184, 166, 175, 0.21)',
			boxShadow: '6px 8px 6px -6px black',
		},
		font: {
			fontSize: '18px',
			fontWeight: '400',
		},
		right: {
			justifyContent: 'space-between',
		},
		actions: {
			justifyContent: 'flex-end',
		},
	},
}
