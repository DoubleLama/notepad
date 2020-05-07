/* eslint-disable react/prop-types */
import React from 'react';

const NoteList = ({ noteSaved }) => {
  const list = noteSaved.map((noteList, i) => (
    <div key={i}>
      <h3>{noteList.title}</h3>
      <p>{noteList.text}</p>
    </div>
  ));

  return (
    <div className="container">
      <div>{list}</div>
    </div>
  );
};

export default NoteList;
