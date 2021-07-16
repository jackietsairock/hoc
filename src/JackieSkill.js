import React, { Component } from 'react';

import Block from './Block';
import Bar from './Bar';
import Image from './Image';

class JackieSkill extends Component {
    render() {
        const { open,toggleOpen } = this.props;
        return (
            <Block>
                <Bar onClick={toggleOpen}>Jackie Info</Bar>
                {open && <Image src={require('./assets/img/2.png').default} />}
            </Block>
        );
    }
}

export default JackieSkill;