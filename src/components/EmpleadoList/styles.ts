export const styles = {
	table: {
		maxHeight: { xs: '65vh', md: '60vh' },
		borderRadius: 0,
		padding: '0 10px',
		margin: '3vh 3px',
		tableItem: {
			'&:hover': {
				background: 'rgba(101, 158, 65, 0.08)',
			},
		},
		drawer: {
			display: 'flex',
			flexDirection: 'column',
			box: {
				display: 'flex',
				justifyContent: 'flex-end',
				inputContainer: {
					display: 'flex',
					justifyContent: 'center',
					margin: '10px 0',
					inputSearch: {
						width: '180px',
						height: '40px',
					},
				},
			},
		},
	},
}
