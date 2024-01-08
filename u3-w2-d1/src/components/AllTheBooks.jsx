import { Component } from "react";
import { Col, Container, FormControl, FormGroup, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import Genre from "./Genre";
import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
  state = {
    data: fantasy,
    searchValue: "",
  };
  handleDataChange = (data) => {
    this.setState({ data });
  };
  handleSearch = (value) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <>
        <div className="container d-flex justify-content-between align-items-baseline my-3">
          <Genre data={this.state.data} onDataChange={this.handleDataChange} />
          <FormGroup controlId="searchFormId">
            <FormControl
              style={{ maxWidth: "300px", height: "40px" }}
              type="text"
              placeholder="Cerca"
              value={this.state.searchValue}
              onChange={(event) => this.handleSearch(event.target.value)}
            />
          </FormGroup>
        </div>

        <Container>
          <Row xs={2} lg={4}>
            {this.state.data
              .filter((book) => book.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
              .map((book) => (
                <Col key={book.asin}>
                  <SingleBook
                    img={book.img}
                    title={book.title}
                    price={book.price}
                    id={book.asin}
                    setSelected={this.props.setSelected}
                    selected={this.props.selected}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default AllTheBooks;
