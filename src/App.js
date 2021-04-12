import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
//import notes from "./notes";
import CreateArea from './components/CreateArea';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note title={note.title} content={note.content} onDelete={deleteNote} key={index} id={index} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
