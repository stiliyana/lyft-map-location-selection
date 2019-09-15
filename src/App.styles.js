export default {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh'
  },
  pinContainer: {
    width: 25,
    height: 40,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  pin: {
    position: 'relative',
    width: 25,
    height: 25,
    background: 'radial-gradient(white 0%, white 25%, #FF00BF 25%, #FF00BF 100%)',
    backgroundColor: '#FF00BF',
    borderRadius: '50%',
    transition: 'transform .3s cubic-bezier(0.4, 0, 1, 1)',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 3,
      height: 15,
      backgroundColor: '#FF00BF',
      borderRadius: '0 0 10px 10px'
    }
  },
  pinTravelling: {
    transform: 'translateY(-10px)'
  },
  pinShadow: {
    height: '3px',
    width: '5px',
    backgroundColor: '#11111F',
    position: 'absolute',
    bottom: '-1px',
    zIndex: -1,
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '50%',
    boxShadow: '0px 0px 2px 0.1px #11111F'
  },
  locationContainer: {
    position: 'fixed',
    top: 20,
    left: 20,
    width: 300,
    '@media(max-width: 440px)': {
      top: 0,
      left: 0,
      backgroundColor: 'white',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: '20px 0'
    }
  },
  locationInput: {
    backgroundColor: 'white',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    border: '2px solid #908FA7',
    position: 'relative',
    '&:after': {
      content: '""',
      width: 12,
      height: 12,
      background: 'radial-gradient(white 0%, white 25%, #FF00BF 25%, #FF00BF 100%)',
      position: 'absolute',
      top: 23,
      left: 16,
      borderRadius: '50%'
    },
    '@media(max-width: 440px)': {
      flexBasis: '80%'
    }
  },
  locationInputDisabled: {
    backgroundColor: '#EAEAF0'
  },
  locationLabel: {
    fontSize: 12,
    color: '#908FA7',
    paddingLeft: 35,
    marginBottom: 5
  },
  location: {
    fontSize: 14,
    color: '#11111F',
    paddingLeft: 35
  },
  locationDisabled: {
    fontStyle: 'italic'
  }
}
