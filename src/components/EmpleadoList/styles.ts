export const styles = {
  table: {
    maxHeight: { xs: '65vh', md: '60vh' },
    borderRadius: 0,
    margin: '3vh 0',
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
          margin: '10px 0',
          '& .MuiPaper-elevation': {
            borderRadius: '20px',
            border: '1px solid grey',
          },

          inputSearch: {
            width: '180px',
            height: '40px',
          },
        },
      },
    },
  },
}
