/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react';
import Showdown from 'showdown';


const NoteDisplay = ({ title, text }) => {
  const converter = new Showdown.Converter();
  const mdText = converter.makeHtml(text);
  const mdTitle = converter.makeHtml(title);

  return (
    <div className="container" style={{ minHeight: '300px' }}>
      <h1 dangerouslySetInnerHTML={{ __html: mdTitle }} />
      <div dangerouslySetInnerHTML={{ __html: mdText }} />
    </div>
  );
};

export default NoteDisplay;
