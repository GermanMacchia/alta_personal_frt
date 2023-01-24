import styled from '@emotion/styled'

export const styles = {
  container: {
    margin: '6vh auto auto auto',
    flexGrow: 1,
    maxWidth: 'sm',
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
      gap: '1.4vh',
      tag: {
        marginBottom: '10%',
      },
    },
    submit: {
      color: '#fff',
      width: '100%',
      textTransform: 'none',
      height: '45px',
      borderRadius: '8px',
      marginTop: '4vh',
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