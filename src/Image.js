import React, { Component } from 'react';
import './assets/css/img.css';

class Image extends Component {
    render() {
        return (
            <img className="jackie_img" src={ this.props.src } alt="img" />
        );
    }
}

export default Image;