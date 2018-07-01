import React from 'react'
import Link from '../Link'
import ReactDOM from 'react-dom';

class Image extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      imgZoomed: false,
      mouseX: undefined,
      mouseY: undefined
    }

    this.zoomImage = this.zoomImage.bind(this)
    this.unZoomImage = this.unZoomImage.bind(this)
    this.moveMouseImg = this.moveMouseImg.bind(this)
  }

  zoomImage () {
    this.setState({
      imgZoomed: true
    })
  }

  unZoomImage () {
    this.setState({
      imgZoomed: false
    })
  }

  moveMouseImg (e) {
    const {
      top: offsetTop,
      left: offsetLeft
    } = ReactDOM.findDOMNode(this.image).getBoundingClientRect()

    const x = ((e.pageX - offsetLeft) / parseInt(ReactDOM.findDOMNode(this.image).style.width)) * 100
    const y = ((e.pageY - offsetTop) / parseInt(ReactDOM.findDOMNode(this.image).style.height)) * 100

    this.setState({
      mouseX: x,
      mouseY: y
    })
  }

  render () {
    const transform = {
      transformOrigin: `${this.state.mouseX}% ${this.state.mouseY}%`
    }

    const classes = Object.assign({}, transform, {
      transform: this.state.imgZoomed ? 'scale(2.5)' : 'scale(1.0)',
      maxWidth: '100%',
      // height: '615px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      transition: 'transform .1s ease-out',
      backgroundImage: "url('" + this.props.imageUrl + "')"
    })


    return (
      <div
        className="clearfix"
        style={classes}
        onMouseOver={this.zoomImage}
        onMouseOut={this.unZoomImage}
        onMouseMove={this.moveMouseImg}
        ref={(e) => {this.image = e}}
      >
        <img src={this.props.imageUrl} style={{visibility: 'hidden'}} />
      </div>
    )
  }
}

export {Image as default}
