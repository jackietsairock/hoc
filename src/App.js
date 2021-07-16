import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import JackieInfo from './JackieInfo';
import JackieSkill from './JackieSkill';
import withOpen from './hocs/withOpen';

const JackieInfoWithOpen = withOpen(JackieInfo);
const JackieSkillWithOpen = withOpen(JackieSkill);

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs="12" sm="12" md="6" lg="6" className="">
            <Row>
            <Col xs="12" sm="12" md="12" lg="12" className="">
                <h1>Hight-Order Component:</h1>
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
          <Col xs="12" sm="12" md="6" lg="6" className="">
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
