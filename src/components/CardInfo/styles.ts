export const styles = {
  container: {
    margin: 1,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    width: { xs: '70vw', md: '570px' },
    alignItems: { xs: 'center', md: 'start' },
    height: { xs: 500, md: 'auto' },
    overflowY: 'scroll',
    cardContent: {
      borderTop: { xs: '3px inset #00c5ca', md: 'none' },
      width: { xs: '70vw', md: '30vw' },
    },
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
      avatarChange: {
        position: 'absolute',
        top: 20,
        left: 20,
      },
      avatar: {
        margin: '0 auto',
        height: '10rem',
        width: '10rem',
      },
      _addPicture: {
        '&:hover': {
          cursor: 'pointer',
        },
        '&:active': {
          color: 'green',
        },
      },
      _deletePicture: {
        '&:hover': {
          cursor: 'pointer',
        },
        '&:active': {
          color: 'red',
        },
      },
    },
  },
}
