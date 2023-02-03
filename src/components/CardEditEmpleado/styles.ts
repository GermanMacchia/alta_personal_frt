export const styles = {
	modal: {
		display: 'flex',
		flexDirection: 'column',
		color: '#242424',
		container: {
			display: 'flex',
			flexDirection: 'column',
			width: { xs: '70vw', md: '30vw' },
			form: {
				display: 'flex',
				overflow: 'scroll',
				color: 'grey',
				gap: { xs: 3 },
				flexDirection: { xs: 'column', md: 'row' },
				height: '30vh',
				marginBottom: { xs: '4vh', md: '1vh' },
				switch: {
					padding: { xs: 1, md: '10px' },
					justifyContent: 'space-between',
					label: { fontSize: '20px', color: '#242424' },
				},
			},
			inputs: {
				width: { xs: 200, md: 300 },
				padding: '5%',
			},
			submit: {
				marginBottom: '4rem',
				height: '45px',
			},
		},
	},
}
