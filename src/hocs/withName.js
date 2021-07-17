import React, { Component } from 'react';
import names from '../names.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default WrappedComponent => class extends Component {
    state = {
        items: names,
        Text:'',  
    };
    onChangeText = (e) => {
        this.setState({
            text: e.target.value,
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.setState(({ text }) => ({
            items: !text ? names : names.filter(name=>name.includes(text)),
        }));
    };
    render() {
        const { text, items } = this.state;

        return (
            <WrappedComponent
                {...this.props}
                text={text}
                onChangeText={this.onChangeText}
                onSubmit={this.onSubmit}
                items={items}
            />
        );
    }
};