import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    list: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getListDetail(this.props.match.params.id)
      .then(res => this.setState({ list: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.list.listName}
              </h1>
              <h2>
              {this.state.list.owner}
              </h2>
              <article>
              <p>
                {this.state.list.description}
              </p>
            </article>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Lists</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
