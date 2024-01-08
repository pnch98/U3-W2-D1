import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("book updated");
    console.log(prevProps.selected);
    if (prevProps.selected !== this.props.selected) {
      console.log("prevProp: " + prevProps.selected);
      console.log("thisProp: " + this.props.selected);
      if (this.props.selected === this.props.id) {
        this.setState({ selected: true });
        console.log(this.state.selected);
      } else {
        this.setState({ selected: false });
      }
    }
  }

  render() {
    return (
      <Card
        className="mb-3"
        style={this.state.selected ? { border: "2px solid lightblue", backgroundColor: "lightblue" } : {}}
      >
        <div
          className="overflow-hidden"
          style={{ height: "300px" }}
          onClick={() => this.props.setSelected(this.props.id)}
        >
          <Card.Img variant="top" src={this.props.img} />
        </div>
        <Card.Body
          style={{ height: "200px" }}
          className="d-flex flex-column justify-content-between align-items-center"
        >
          <div>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.price}$</Card.Text>
          </div>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
