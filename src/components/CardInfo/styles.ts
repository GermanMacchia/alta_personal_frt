export const styles = {
	container: {
		height: '400px',
		width: { xs: '280px', md: '400px' },
		display: 'flex',
		column: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
		},
		section: {
			marginTop: 2,
		},
		image: {
			margin: '1rem',
			height: { xs: '100px', md: '200px' },
			width: { xs: '100px', md: '200px' },
			border: '1px solid rgba(184, 166, 175, 0.21)',
			boxShadow: '6px 8px 6px -6px black',
		},
		right: {
			justifyContent: 'space-between',
			borderLeft: '1px solid rgba(184, 166, 175, 0.21)',
		},
		actions: {
			justifyContent: 'flex-end',
		},
	},
}
