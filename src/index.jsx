import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import 'bootstrap/dist/css/bootstrap.css';
import NoteList from './components/NoteList';

const App = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [noteSaved, setNoteSaved] = useState([]);
  const handleInput = (input) => {
    setTitle(input.title);
    setText(input.text);
  };
  const saveNote = (input) => {
    setNoteSaved([...noteSaved, input]);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 border border-warning">
            <NoteList noteSaved={noteSaved} />
          </div>
          <div className="col-md-8 border border-success">
            <NoteDisplay title={title} text={text} />
            <hr />
            <MarkdownInput handleInput={handleInput} saveNote={saveNote} />
          </div>
        </div>
      </div>
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
