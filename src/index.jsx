import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import NoteList from './components/NoteList';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [show, setShow] = useState('');
  const [counter, setCounter] = useState(0);

  const newNote = () => {
    setTitle('');
    setText('');
    setShow(true);
  };

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
    localStorage.getItem(item);
    setTitle(item.title);
    setText(item.text);
    setShow(false);
  };

  const editNote = (item) => {
    localStorage.getItem(item);
    localStorage.removeItem(item.title);
    setTitle(item.title);
    setText(item.text);
    setShow(true);
  };

  const deleteNote = (item) => {
    localStorage.removeItem(item.title);
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 border-right">
            <NoteList newNote={newNote} openNote={openNote} deleteNote={deleteNote} editNote={editNote} />
          </div>
          <div className="col-md-8">
            <NoteDisplay title={title} text={text} />
            {show && <MarkdownInput handleInput={handleInput} saveNote={saveNote} title={title} text={text} />}
          </div>
        </div>
      </div>
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
