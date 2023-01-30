export const styles = {
	container: {
		margin: 1,
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: { xs: 'center', md: 'start' },
		height: { xs: 360, md: 'auto' },

		overflow: 'scroll',
		gap: 2,
		'&.MuiPaper-rounded': {
			boxShadow: 'none',
		},
		section: {
			marginBottom: '10px',
			width: 150,
			font: {
				fontSize: '18px',
				fontWeight: '400',
			},
		},
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 2,
		image: {
			height: { xs: '100px', md: '150px' },
			width: 'auto',
		},
	},
}
