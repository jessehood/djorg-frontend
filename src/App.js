import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './notes/Notes';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/'
});

class App extends Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <Notes />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
