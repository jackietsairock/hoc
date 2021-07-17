/*NameList.js與TodoList.js改成List.js，留下視覺層*/ 
import React from 'react';
import { InputGroup, Form, FormControl, Button, ListGroup } from 'react-bootstrap';

const List = ({text,onChangeText,onSubmit,items}) => (
    <div>
        <Form onSubmit={onSubmit}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="請輸入字母"
                    value={text}
                    onChange={onChangeText}
                /><Button variant="outline-secondary" id="addButton" type="submit">
                Submit
                </Button>
            </InputGroup>
        </Form>
        <ListGroup>
            {/* map()的參數: 1.值 2.index 3.陣列 */}
            {items.map((item,index,array) =>
                <ListGroup.Item key={item.toString()}>{item}({index})({array})</ListGroup.Item>
            )}
        </ListGroup>
    </div>
);

export default List;