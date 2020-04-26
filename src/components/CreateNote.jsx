import React from "react";

const CreateNote = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." />
        <button>+</button>
      </form>
    </div>
  );
};

export default CreateNote;
