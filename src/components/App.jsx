import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateNote from "./CreateNote";

function App() {
  const addNote = (note) => {};

  return (
    <div className="App">
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
