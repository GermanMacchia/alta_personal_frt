import styled from '@emotion/styled'
const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 20

export const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		margin: { xs: '10vh 0', md: '5vh auto' },
		padding: 0,
		paper: {
			padding: 2,
			margin: 1,
			width: { xs: 'auto', md: '430px' },
		},
		title: {
			fontWeight: '600',
			fontSize: '20px',
		},
		subtitle: {
			opacity: '0.7',
			marginTop: '1vh',
			marginBottom: '3vh',
		},
		form: {
			display: 'flex',
			flexDirection: 'column',
			gap: { xs: '2vh', md: '1.4vh' },
			inputData: {
				display: 'flex',
				flexDirection: 'row',
				gap: { xs: '3vw', md: '4vw' },
			},
			tag: {
				marginBottom: '2%',
			},
			submit: {
				color: '#fff',
				width: '25%',
				textTransform: 'none',
				height: '45px',
				borderRadius: '8px',
			},
			select: {
				__menuprops: {
					PaperProps: {
						style: {
							maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
						},
					},
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
