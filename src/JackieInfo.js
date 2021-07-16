import React, { Component } from 'react';

import Block from './Block';
import Bar from './Bar';
import Image from './Image';

class jackieInfo extends Component {
    render() {
        const { open,toggleOpen } = this.props;
        return (
            <Block>
                <Bar onClick={toggleOpen}>Jackie Info</Bar>
                {open && <Image src={require('./assets/img/1.png').default} />}
            </Block>
        );
    }
}

export default jackieInfo;