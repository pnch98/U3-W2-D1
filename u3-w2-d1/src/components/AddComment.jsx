import { Component } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: "3",
      elementId: this.props.id,
    },
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.review),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjFhOWUwZGQxZDAwMTgyZDE3MGIiLCJpYXQiOjE3MDQ3MTg3NjEsImV4cCI6MTcwNTkyODM2MX0.MNn73oAPs4DTzQDHfAw4Qs8stzPODZibineWbND5PJo",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        this.props.addComment(this.state.review);
        this.setState({
          review: {
            comment: "",
            rate: "3",
            elementId: this.props.id,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleValue(propertyName, propertyValue) {
    this.setState({ review: { ...this.state.review, [propertyName]: propertyValue } });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formRate">
          <small>Rate</small>
          <FormRange
            type="number"
            min={0}
            max={5}
            value={this.state.review.rate}
            onChange={(event) => this.handleValue("rate", event.target.value)}
            required
          />
        </FormGroup>

        <FormGroup controlId="formComment">
          <FormControl
            className="mb-2"
            type="text"
            placeholder="Comment"
            value={this.state.review.comment}
            onChange={(event) => this.handleValue("comment", event.target.value)}
            required
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Add comment
        </Button>
      </Form>
    );
  }
}
export default AddComment;
