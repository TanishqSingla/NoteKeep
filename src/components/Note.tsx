import React from "react";
import { Notes } from "./App";

interface NoteProps {
  id: number; 
  onDelete: (id: number) => void
}

const Note: React.FC<Notes & NoteProps> = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
