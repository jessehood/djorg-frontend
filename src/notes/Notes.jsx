import React, { Component } from 'react';
import NotesForm from './NotesForm';

class Notes extends Component {
  state = {
    notes: [{}]
  }
  
  renderNotes() {
    return this.state.notes.map(note => (
      <div>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>Add a note</h1>
        <NotesForm />
        <div>{this.renderNotes()}</div>
      </div>
    )
  }
}

export default Notes;