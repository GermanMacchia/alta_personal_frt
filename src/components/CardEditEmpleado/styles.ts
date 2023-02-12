import styled from '@emotion/styled'
export const styles = {
  modal: {
    display: 'flex',
    flexDirection: 'column',
    color: '#242424',
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: { xs: '70vw', md: '450px' },
      form: {
        display: 'flex',
        overflow: 'scroll',
        color: 'grey',
        gap: 1,
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: '30vh', md: '240px' },
        marginBottom: { xs: '4vh', md: '4vh' },
        switch: {
          padding: { xs: 1, md: '10px' },
          justifyContent: 'space-between',
          label: { fontSize: '20px', color: '#242424' },
        },
      },
      inputs: {
        width: { xs: 200, md: 300 },
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 3, md: 1, xl: 3 },
      },
      submit: {
        marginBottom: { xs: '4rem', md: 1 },
        height: '45px',
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
