import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    lists: [],
    listName: "",
    owner: "",
    description: ""
  };

  componentDidMount() {
    this.loadLists();
  }

  loadLists = () => {
    API.getLists()
      .then(res =>
        this.setState({ lists: res.data, listName: "", owner: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteList = id => {
    API.deleteList(id)
      .then(res => this.loadLists())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.listName && this.state.owner) {
      API.saveList({
        listName: this.state.listName,
        owner: this.state.owner,
        description: this.state.description
      })
        .then(res => this.loadLists())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create A List</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.listName}
                onChange={this.handleInputChange}
                name="listName"
                placeholder="Name of List (required)"
              />
              <Input
                value={this.state.owner}
                onChange={this.handleInputChange}
                name="owner"
                placeholder="List Owner (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.owner && this.state.listName)}
                onClick={this.handleFormSubmit}
              >
                Submit List
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Lists</h1>
            </Jumbotron>
            {this.state.lists.length ? (
              <List>
                {this.state.lists.map(list => (
                  <ListItem key={list._id}>
                    <Link to={"/lists/" + list._id}>
                      <strong>
                        {list.listName} - {list.owner}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteList(list._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Lists to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
