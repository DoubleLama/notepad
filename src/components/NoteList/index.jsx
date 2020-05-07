/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

const NoteList = ({ openNote, deleteNote, showNote}) => {
  const local = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    const savedNote = JSON.parse(localStorage[key]);
    local.push(savedNote);
    // console.log(local);
  }

  const noteList = local.map((item, key) => (
    <div key={key} className="my-4 text-center">
      <h3 className="text-success" onClick={() => openNote(item)}>{item.title}</h3>
      <p className="text-left">{item.text}</p>
      <button className="btn btn-danger btn-sm" type="submit" onClick={() => deleteNote(item)}>Supprimer</button>
      <hr />
    </div>
  ));

  return (
    <>
      <div className="text-center mt-2">
        <button onClick={() => showNote()} className="btn btn-primary" type="submit">Nouvelle note</button>
      </div>
      <div>{noteList}</div>
    </>
  );
};

export default NoteList;
