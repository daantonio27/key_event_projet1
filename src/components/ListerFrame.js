import React, { Component } from "react";
import ListeArticle from "./ListeArticle";
import { Col, Container, Row } from "reactstrap";

class ListerFrame extends Component {
  state = {
    people: [
      { name: "Tanzee", likes: "Donuts" },
      { name: "DaAntonio", likes: "Donuts" },
      { name: "Messi", likes: "Donuts" },
    ],
  };
  render() {
    let details = this.state.people.map((singlePersonne) => {
      return (
        <Col>
          <ListeArticle details={singlePersonne} />
        </Col>
      );
    });
    return (
      <div>
        <Container>
          <Row>{details}</Row>
        </Container>
      </div>
    );
  }
}

export default ListerFrame;
