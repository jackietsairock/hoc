import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './assets/css/App.css';

import JackieInfo from './JackieInfo';
import JackieSkill from './JackieSkill';
import withOpen from './hocs/withOpen';

// 合併時會處理掉
// import NameList from './NameList';
// import TodoList from './TodoList';
import List from './List';
import withName from './hocs/withName';
import withTodo from './hocs/withTodo';

const JackieInfoWithOpen = withOpen(JackieInfo);
const JackieSkillWithOpen = withOpen(JackieSkill);

const NameList = withName(List);
const TodoList = withTodo(List);

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs="12" sm="12" md="6" lg="6" className="p1">
            <Row>
              <Col xs="12" sm="12" md="12" lg="12" className="">
                  <h1>Hight-Order Component 1:</h1>
                  <p>同一邏輯套用在不同組建的情況</p>
              </Col>
              <Col xs="6" sm="6" md="6" lg="6" className="">
                  <JackieInfoWithOpen />
              </Col>
              <Col xs="6" sm="6" md="6" lg="6" className="">
                  <JackieSkillWithOpen />
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6" className="p2">
            <Row>
              <Col xs="12" sm="12" md="12" lg="12" className="">
                  <h1>Hight-Order Component 2:</h1>
                  <p>同一個組件但不同邏輯的情況</p>
              </Col>
              <Col xs="6" sm="6" md="6" lg="6" className="">
                  <NameList />
              </Col>
              <Col xs="6" sm="6" md="6" lg="6" className="">
                  <TodoList />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
