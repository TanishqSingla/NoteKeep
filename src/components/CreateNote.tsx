import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          onChange={handleChange}
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
};

export default CreateNote;
