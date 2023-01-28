export const styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		zIndex: 1,
		logout: {
			color: 'rgba(255, 87, 106, 0.78)',
			'& .MuiSvgIcon-fontSizeMedium': {
				fontSize: '2rem',
			},
		},
		title: {
			fontSize: '1.5rem',
			color: '#a5e4dc',
			padding: 2,
			lineHeight: 1,
		},
	},
	banner: {
		height: { xs: '12vh', md: '15vh' },
		backgroundImage: `url(${'src/assets/banner.jpg'})`,
		backgroundPosition: 'top',
		backgroundSize: 'cover',
		position: 'relative',
		subtitle: {
			fontSize: '2rem',
			color: '#2c306f',
			position: 'absolute',
			margin: { xs: '15px', md: '40px' },
			right: 20,
		},
	},
	navbar: {
		position: 'fixed',
		bottom: 0,
		width: '100%',
		borderTop: '5px solid #2c306f',
		borderBottom: '2px solid #242424',
		__blur: {
			filter: 'opacity(0.20)',
		},
	},
}
