export const styles = {
	modal: {
		display: 'flex',
		flexDirection: 'column',
		color: 'whitesmoke',
		container: {
			display: 'flex',
			flexDirection: 'column',
			width: { xs: '65vw', md: '30vw' },
			form: {
				display: 'flex',
				overflow: 'scroll',
				color: 'grey',
				gap: { xs: 6 },
				flexDirection: { xs: 'column', md: 'row' },
				height: '250px',
				switch: {
					borderLeft: '1px solid rgba(184, 166, 175, 0.21)',
					padding: { xs: 1, md: '10px' },
					justifyContent: 'space-between',
					label: { fontSize: '20px', color: '#242424' },
				},
			},
			submit: {
				marginBottom: '4rem',
				height: '45px',
			},
		},
	},
}
