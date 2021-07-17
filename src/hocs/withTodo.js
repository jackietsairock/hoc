import React, { Component } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default WrappedComponent => class extends Component {
    state = {
        items: [],
        Text:'',  
    };
    onChangeText = (e) => {
        this.setState({
            text: e.target.value,
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.setState(({ text, items }) => ({
            items: [...items, text],
            text: '',
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