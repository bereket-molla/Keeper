// App.jsx
import React, { useState } from "react";
import AppHeader from "./Header";
import AppFooter from "./Footer";
import AppNote from "./Note";
import Keeper from "./Keeper";

const App = () => {
  const [noteStack, setNoteStack] = useState([]);

  const handleNewNote = (noteContent) => {
    setNoteStack(noteStack.concat(noteContent));
  };

  const handleNoteDeletion = (noteIndex) => {
    setNoteStack(noteStack.filter((_, idx) => idx !== noteIndex));
  };

  return (
    <div className="app-main">
      <AppHeader />
      <Keeper onEntrySubmit={handleNewNote} />
      {noteStack.map((singleNote, idx) => (
        <AppNote
          key={idx}
          id={idx}
          title={singleNote.title}
          content={singleNote.body}
          onDelete={handleNoteDeletion}
        />
      ))}
      <AppFooter />
    </div>
  );
};

export default App;
