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
        gap: { xs: 3 },
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
      },
      submit: {
        marginBottom: { xs: '4rem', md: 1 },
        height: '45px',
      },
    },
  },
}
