/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const MarkdownInput = ({ handleInput, saveNote }) => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value,
  });

  useEffect(() => {
    handleInput(input);
  }, [input]);
  return (
    <form className="px-2">
      <div>
        <input type="text" style={{ border: '0' }} className="bg-light form-control mt-2" placeholder="Titre ..." name="title" onChange={handleInputChange} />
      </div>
      <div>
        <textarea type="text" style={{ border: '0' }} className="bg-light form-control mt-2" rows="10" placeholder="Texte de la note ..." name="text" onChange={handleInputChange} />
      </div>
      <div className="d-flex justify-content-center">
        <input onClick={() => saveNote(input)} className="btn btn-success my-2" value="Sauvegarder" type="" />
      </div>
    </form>
  );
};

export default MarkdownInput;
