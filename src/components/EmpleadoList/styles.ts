export const styles = {
	table: {
		marginTop: '3vh',
		maxHeight: '70vh',
		borderRadius: 0,
		inputSearch: {
			width: '60%',
			height: '40px',
		},
		tableItem: {
			'&:hover': {
				background: 'rgba(101, 158, 65, 0.08)',
			},
		},
		tableButtons: {
			paddingLeft: '5rem',
			'&.MuiTableCell-paddingSmall': {
				paddingLeft: 0,
			},
		},
		container: {
			display: 'flex',
			marging: 0,
			justifyContent: 'flex-end',
			background: '#242424',
			width: '100%',
			position: 'fixed',
			bottom: 0,
			pagination: {
				color: 'aliceblue',
				'& .MuiTablePagination-selectIcon, .MuiSvgIcon-root': {
					fill: 'aliceblue',
				},
			},
		},
	},
}
