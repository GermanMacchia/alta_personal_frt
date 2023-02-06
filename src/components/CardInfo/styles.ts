export const styles = {
  container: {
    margin: 1,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    width: { xs: '70vw', md: '570px' },
    alignItems: { xs: 'center', md: 'start' },
    height: { xs: 500, md: 'auto' },
    overflow: 'scroll',
    gap: 2,
    '&.MuiPaper-rounded': {
      boxShadow: 'none',
    },
    section: {
      marginBottom: { xs: '10px', md: 0 },
      width: 150,
      font: {
        fontSize: '18px',
        fontWeight: '400',
      },
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    imageContainer: {
      width: { xs: 100, md: 180 },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      avatar: {
        margin: '0 auto',
        height: '10rem',
        width: '10rem',
      },
    },
  },
}
