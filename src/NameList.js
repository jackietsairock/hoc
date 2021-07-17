/*這隻程式不會被用到，因為處理成HOC了*/ 
import React, { Component } from 'react';
import { InputGroup, Form, FormControl, Button, ListGroup } from 'react-bootstrap';

import names from './names.json';

class NameList extends Component {
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
            <div>
                <Form onSubmit={this.onSubmit}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="請輸入字母"
                            value={text}
                            onChange={this.onChangeText}
                        /><Button variant="outline-secondary" id="addButton" type="submit">
                        Submit
                        </Button>
                    </InputGroup>
                </Form>
                <ListGroup>
                    {items.map((item) =>
                        <ListGroup.Item key={item.toString()}>{ item }</ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        );
    }
}

export default NameList;