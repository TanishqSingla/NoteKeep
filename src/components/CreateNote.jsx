import React, { useState } from "react";

const CreateNote = () => {
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
        />
        <button>+</button>
      </form>
    </div>
  );
};

export default CreateNote;
