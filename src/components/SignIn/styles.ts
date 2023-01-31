import styled from '@emotion/styled'
export const styles = {
	container: {
		width: { xs: 200, md: 320 },
		border: '1px solid #9ce4d9',
		background: '#2d306d',
		display: 'flex',
		flexDirection: 'column',
		gap: 2,
		alignItems: 'center',
		justyfyContent: 'space-between',
		margin: '1vh auto',
		padding: '4vh',
		form: {
			width: 270,
			background: 'whitesmoke',
			padding: 3,
			display: 'flex',
			flexDirection: 'column',
			gap: 3,
			tag: {
				color: '#242424',
				margin: '5px 0',
			},
			submit: {
				width: '100%',
				height: '40px',
			},
			registro: {
				'&:hover': {
					cursos: 'pointer',
				},
			},
		},
	},
}

export const Label = styled.label`
	flex-direction: column;
	align-items: center;
	display: block;
	& > div {
		width: 100%;
		align-self: center;
	}
	& > div div {
		width: 100%;
		border-radius: 10px;
		@media (max-width: 600px) {
			border-radius: 5px;
		}
	}
`
