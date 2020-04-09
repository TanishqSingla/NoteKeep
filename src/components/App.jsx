import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div className="App">
      <Header />
      <Note title="Title" content="This is the content" />
      <Footer />
    </div>
  );
}

export default App;
