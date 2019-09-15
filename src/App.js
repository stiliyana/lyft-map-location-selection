import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import styles from './App.styles'

class App extends Component {
  state = {
    isLoading: true,
    viewport: {
      latitude: 52.5200,
      longitude: 13.4050,
      zoom: 11,
      bearing: 0,
      pitch: 0
    },
    isTravelling: false,
    center: {
      lat: 52.5200,
      lng: 13.4050,
    }
  }

  mapRef = React.createRef()
  wheelTimer = 0

  _handleLoad = () => {
    this.setState({
      isLoading: false
    })
  }

  _handleStartMovement = () => {
    this.setState({
      isTravelling: true
    })
  }

  _handleEndMovement = () => {
    // Perform reverse geocode API request
    this.setState({
      isTravelling: false,
      center: this.mapRef.current ? this.mapRef.current.getMap().getCenter() : null
    })
  }

  _handleMouseWheel = e => {
    this._handleStartMovement()
    clearTimeout(this.wheelTimer)
    this.wheelTimer = setTimeout(() => {
      this._handleEndMovement()
    }, 250)
  }

  render() {
    const { classes } = this.props
    const { isTravelling, center, viewport } = this.state
    const pinClassNames = classNames(classes.pin, {
      [classes.pinTravelling]: isTravelling
    })
    const locationInputClassNames = classNames(classes.locationInput, {
      [classes.locationInputDisabled]: isTravelling
    })
    const locationClassNames = classNames(classes.location, {
      [classes.locationDisabled]: isTravelling
    })

    return (
      <div className={classes.container}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onMouseDown={this._handleStartMovement}
          onTouchStart={this._handleStartMovement}
          onMouseUp={this._handleEndMovement}
          onTouchEnd={this._handleEndMovement}
          onWheel={this._handleMouseWheel}
          onLoad={this._handleLoad}
          ref={this.mapRef}
        />
        <div className={classes.locationContainer}>
          <div className={locationInputClassNames}>
            <span className={classes.locationLabel}>Location</span>
            <span className={locationClassNames}>
              {`${Number(center.lat).toFixed(4)}, ${Number(center.lng).toFixed(4)}`}
            </span>
          </div>
        </div>
        <div className={classes.pinContainer} >
          <div className={pinClassNames} />
          <div className={classes.pinShadow} />
        </div>
      </div>
    )
  }
}


export default injectSheet(styles)(App)
