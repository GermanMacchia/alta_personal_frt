export const styles = {
	table: {
		marginTop: '3vh',
		maxHeight: { xs: '65vh', md: '60vh' },
		borderRadius: 0,
		tableItem: {
			'&:hover': {
				background: 'rgba(101, 158, 65, 0.08)',
			},
		},
		tableButtons: {
			paddingLeft: { xs: 0, md: '5rem' },
			'&.MuiTableCell-paddingSmall': {
				paddingLeft: 0,
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
