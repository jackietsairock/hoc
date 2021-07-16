import React, { Component } from 'react';

import './assets/css/bar.css';

class Bar extends Component {
    render() {
        return (
            <div className="bar" onClick={this.props.onClick}>
                { this.props.children }
            </div>
        );
    }
}

export default Bar;