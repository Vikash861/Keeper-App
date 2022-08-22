import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // default note
  const defaultNote = {
    title: "Add note",
    content: "you have zero note please add note"
  };
  // getting notes form local strorage

  let notes = localStorage.getItem("notes");
  notes = JSON.parse(notes);
  // states
  const [notesState, setNotesState] = useState([]);

  // adding note to the local
  const add = (note) => {
    if (notes === null) {
      const tempNotes = [];
      tempNotes.push({
        title: note.title,
        content: note.content
      });
      localStorage.setItem("notes", JSON.stringify(tempNotes));
      // state
      setNotesState((prevValues) => {
        return [...prevValues, tempNotes];
      });
    } else {
      const tempNotes = notes;
      tempNotes.push({ title: note.title, content: note.content });
      localStorage.setItem("notes", JSON.stringify(tempNotes));
      // state
      setNotesState((prevValues) => {
        return [...prevValues, tempNotes];
      });
    }
  };

  // check if note exist or note

  const check = () => {
    if (notes === null) {
      return false;
    } else {
      return true;
    }
  };

  // handling deletion
  const remove = (id) => {
    const newNotes = notes.filter((note, index) => {
      return index !== id;
    });
    console.log(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotesState((prevValues) => {
      return [...prevValues, newNotes];
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={add} />
      {check() ? (
        notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            onDelete={remove}
            title={note.title}
            content={note.content}
          />
        ))
      ) : (
        <Note key={1} title={defaultNote.title} content={defaultNote.content} />
      )}
    </div>
  );
}

export default App;
