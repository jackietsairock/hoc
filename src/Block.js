import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Block extends Component {
    render() {
        return (
            <Col xs="12" sm="12" md="12" lg="12" className="">
                { this.props.children }
            </Col>
        );
    }
}

export default Block;