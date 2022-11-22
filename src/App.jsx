import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  function getLocalItem(){
    if(localStorage.getItem("lists")){
      return JSON.parse(localStorage.getItem("lists"));
    }
  }
  const [notes, setNotes] = useState(getLocalItem());

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  useEffect(() => {
   localStorage.setItem("lists",JSON.stringify(notes));
  }, [notes])
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes?.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
