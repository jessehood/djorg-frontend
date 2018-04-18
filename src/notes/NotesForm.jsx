import React, { Component } from 'react';

class NotesForm extends Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
    const note = new FormData(event.target);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input name="title" placeholder="Title" />
          <br />
          <textarea name="content" placeholder="Content" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NotesForm;