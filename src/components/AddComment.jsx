import React, { Component } from "react";
import ErrorHandler from "./ErrorHandler";
import Loader from "./Loader";
import * as api from "../utils/api.js";

class AddComment extends Component {
  state = {
    body: "",
    err: "",
    isLoading: false,
  };

  handleInputChange = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    const { loggedInUser, experience_id, addNewComment } = this.props;
    const { body } = this.state;
    api
      .postComment(experience_id, loggedInUser, body)
      .then((postedComment) => {
        addNewComment(postedComment);
        this.setState({
          body: "",
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err: err.response.data.msg,
          isLoading: false,
        });
      });
  };

  render() {
    const { body, err, isLoading } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;

    return (
      <div>
        <form onSubmit={this.handleSubmitForm} className="comment-adder">
          <input
            type="textarea"
            className="comment-box"
            onChange={this.handleInputChange}
            value={body}
            rows="10"
            cols="40"
            placeholder="type comment here..."
            required
          />
          <input type="submit" value="submit" className="submit-comment" />
          {/* <button className="submit-comment"> Submit Comment </button>{" "} */}
        </form>{" "}
      </div>
    );
  }
}

export default AddComment;
