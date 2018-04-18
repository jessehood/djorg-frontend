import React, { Component } from 'react';
import NotesForm from './NotesForm';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const GET_NOTES = gql`
  {
    notes {
      title
      content
    }
  }
`;

class Notes extends Component {
  render() {
    const { data } = this.props;
    if (data.loading || !data.notes) return <div>Loading...</div>;
    console.log(data);
    return (
      <div>
        {data.notes.map(note => (
          <div class="note">
            <div>{note.title}</div>
            <div>{note.content}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default graphql(GET_NOTES)(Notes);