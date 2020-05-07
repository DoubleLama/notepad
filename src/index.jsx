import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';


class App extends Component {
  render() {
    return (
      <>
        <MarkdownInput />
        <NoteDisplay />
      </>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
