import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjFhOWUwZGQxZDAwMTgyZDE3MGIiLCJpYXQiOjE3MDQ3MTg3NjEsImV4cCI6MTcwNTkyODM2MX0.MNn73oAPs4DTzQDHfAw4Qs8stzPODZibineWbND5PJo",
    },
  };
  fetchComments = async (id, options) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, options);
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.fetchComments(this.props.id, this.options);
    }
  }
  addComment(newComment) {
    this.setState({ comments: { ...this.state.comments, newComment } });
  }
  render() {
    return (
      <div className="bg-white p-2 mt-5 mb-3 position-sticky commentPos z-1000">
        <h2>Comments</h2>
        {this.props.id && (
          <>
            <CommentList comments={this.state.comments} />
            <AddComment id={this.props.id} addComment={this.addComment} />
          </>
        )}
      </div>
    );
  }
}
export default CommentArea;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0M2ZlM2I1MjViYjAwMThlZDA3ZWQiLCJpYXQiOjE3MDMxNjU5MjMsImV4cCI6MTcwNDM3NTUyM30.VUXUi44olcV3-2nfBWch_QUBs1QcEqQz91DH458oAV8
