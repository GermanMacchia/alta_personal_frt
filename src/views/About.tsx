import { Box } from '@mui/material'
const styles = {
	container: {
		fontSize: '18px',
		display: 'flex',
		flexWrap: 'wrap',
		marginTop: 2,
		ul: {
			listStyleType: 'none',
		},
		section: {
			padding: { xs: '20px', md: '10vh' },
		},
		title: {
			color: '#a5e4dc',
			padding: '13px 0',
			borderBottom: '2px solid grey',
		},
		link: {
			textDecoration: 'none',
			color: '#64bed9',
		},
	},
}

export const About = () => {
	return (
		<Box sx={styles.container}>
			<Box sx={styles.container.section}>
				<hr />
				<h1 style={styles.container.title}>Alta Empleados</h1>
				<hr />
				<br />
				<p>
					Aplicación CRUD realizado para el challenge Gotam-Upe por{' '}
					<a
						style={styles.container.link}
						href='https://www.linkedin.com/in/germanmacchia'
						target='_blank'>
						Germán O. Macchia
					</a>
				</p>
				<hr />
			</Box>
			<Box sx={styles.container.section}>
				<h3 style={styles.container.title}>Mejoras a realizar:</h3>
				<br />
				<ul style={styles.container.ul}>
					<li>Login para admin</li>
					<br />
					<li>Avatares para empleado</li>
				</ul>
			</Box>
			<Box sx={styles.container.section}>
				<h3 style={styles.container.title}>Repositorios:</h3>
				<br />
				<ul style={styles.container.ul}>
					<li>
						<a
							style={styles.container.link}
							href='https://github.com/GermanMacchia/alta_personal_frt'
							target='_blank'>
							Front End
						</a>
					</li>
					<br />
					<li>
						<a
							style={styles.container.link}
							href='https://github.com/GermanMacchia/alta_personal_bck'
							target='_blank'>
							Back End
						</a>
					</li>
				</ul>
			</Box>
		</Box>
	)
}
