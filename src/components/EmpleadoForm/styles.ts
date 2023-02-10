import styled from '@emotion/styled'
const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 20

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: { xs: '3vh auto', md: '3vh auto' },
    padding: 0,
    '& .MuiPaper-rounded': {
      borderRadius: 0,
    },
    paper: {
      padding: '20px 20px 10px',
      margin: '0 3px',
      width: { xs: '100%', md: '430px' },
    },
    title: {
      fontWeight: '600',
      fontSize: '20px',
    },
    form: {
      display: 'flex',
      marginTop: 0.5,
      flexDirection: 'column',
      gap: { xs: '3.5vh', md: '1vh' },
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
        textTransform: 'none',
        height: '45px',
        marginBottom: '10px',
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
