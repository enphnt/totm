import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


const style = {
  border: "solid"
};
class GameView extends Component {

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3} style={style}>
            Category 1
          </Col>
          <Col xs={6} md={3} style={style}>
            Category 2
          </Col>
          <Col xs={6} md={3} style={style}>
            Category 3
          </Col>
          <Col xs={6} md={3} style={style}>
            Category 3
          </Col>
          <Col xs={6} md={3} style={style}>
            Category 4
          </Col>
          <Col xs={6} md={3} style={style}>
            Category 5
          </Col>
          <Col xs={6} md={3} style={style}>
            Category 6
          </Col>
          <Col xs={6} md={3} style={style}>
            Category 7
          </Col>

        </Row>
      </Grid>
    );
  }
}
export default GameView;
