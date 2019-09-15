export default {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh'
  },
  pinContainer: {
    width: 20,
    height: 40,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  pin: {
    position: 'relative',
    width: 20,
    height: 20,
    background: 'radial-gradient(white 0%, white 25%, deeppink 25%, deeppink 100%)',
    backgroundColor: 'deeppink',
    borderRadius: '50%',
    transition: 'transform .3s cubic-bezier(0.4, 0, 1, 1)',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 3,
      height: 20,
      backgroundColor: 'deeppink',
      borderRadius: '0 0 10px 10px'
    }
  },
  pinTravelling: {
    transform: 'translateY(-10px)'
  },
  pinShadow: {
    height: '3px',
    width: '5px',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: '-1px',
    zIndex: -1,
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '50%',
    boxShadow: '0px 0px 2px 0.1px black'
  },
  locationContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 300,
    backgroundColor: 'white',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    border: '2px solid #95a0a9',
    '&:after': {
      content: '""',
      width: 12,
      height: 12,
      background: 'radial-gradient(white 0%, white 25%, deeppink 25%, deeppink 100%)',
      position: 'absolute',
      top: 23,
      left: 16,
      borderRadius: '50%'
    }
  },
  locationLabel: {
    fontSize: 12,
    color: '#95a0a9',
    paddingLeft: 35,
    marginBottom: 5
  },
  location: {
    fontSize: 14,
    color: '#444',
    paddingLeft: 35
  }
}
