import React, { useState } from "react";
import { Notes } from "./App";
import AddIcon from '@material-ui/icons/Add'
interface createNoteProps {
  onAdd: (note: Notes) => void;
}

type onChangeHandler = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const CreateNote: React.FC<createNoteProps> = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event: onChangeHandler) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        <button onClick={submitNote}><AddIcon /></button>
      </form>
    </div>
  );
};

export default CreateNote;
