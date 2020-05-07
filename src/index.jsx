import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import 'bootstrap/dist/css/bootstrap.css';
import NoteList from './components/NoteList';

const App = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [show, setShow] = useState('');
  const handleInput = (input) => {
    setTitle(input.title);
    setText(input.text);
  };
  const saveNote = (input) => {
    const noteSTR = [];
    const obj = JSON.stringify(input);
    noteSTR.push(obj);
    localStorage.setItem(title, noteSTR);
    setText('');
    setTitle('');
  };

  const openNote = (item) => {
    console.log(item);
    localStorage.getItem(item);
    setTitle(item.title);
    setText(item.text);
    setShow(false);
  };

  const deleteNote = (item) => {
    localStorage.removeItem(item);
    setTitle(item.title);
    setText(item.text);
  };

  const showNote = () => (
    setShow(true)
  );
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 border-right">
            <NoteList showNote={showNote} openNote={openNote} deleteNote={deleteNote} />
          </div>
          <div className="col-md-8">
            <NoteDisplay title={title} text={text} />
            {show && <MarkdownInput handleInput={handleInput} saveNote={saveNote} />}
          </div>
        </div>
      </div>
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
