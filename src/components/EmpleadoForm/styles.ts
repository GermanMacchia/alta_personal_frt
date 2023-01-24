import styled from '@emotion/styled'
const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 20

export const styles = {
  container: {
    margin: '6vh auto auto auto',
    flexGrow: 1,
    width: '50vw',
    title: {
      fontWeight: '600',
      fontSize: '20px'
    },
    subtitle: {
      opacity: '0.7',
      marginTop: '1vh',
      marginBottom: '3vh',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '1.4vh',
      __inputData: {
        display: 'flex',
        flexDirection: 'row',
        gap: '4vw'
      },
      tag: {
        marginBottom: '2%',
      },
      submit: {
        color: '#fff',
        width: '100%',
        textTransform: 'none',
        height: '45px',
        borderRadius: '8px',
        marginTop: '4vh',
      },
      select: {
        __menuprops: {
          PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            },
          },
        },
      }
    },
  }
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