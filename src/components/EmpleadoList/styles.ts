export const styles = {
  table: {
    maxHeight: { xs: '65vh', md: '55vh', xl: '65vh' },
    borderRadius: 0,
    margin: 0,
    tableItem: {
      '&:hover': {
        background: 'rgba(101, 158, 65, 0.08)',
      },
    },
    drawer: {
      display: 'flex',
      flexDirection: 'column',
      box: {
        display: 'flex',
        justifyContent: 'flex-end',
        inputContainer: {
          display: 'flex',
          justifyContent: 'center',
          margin: '5px 0',
          '& .MuiPaper-elevation': {
            height: '42px',
            borderRadius: '20px',
            border: '1px solid grey',
          },
        },
      },
    },
  },
}
