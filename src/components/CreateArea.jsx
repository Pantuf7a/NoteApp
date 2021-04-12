import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { Fab, Zoom } from '@material-ui/core/';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    if (note.title !== "" && note.content !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input onClick={expand} type="text" name="title" value={note.title} placeholder="Title" onChange={handleChange} autoComplete="off" />
        {isExpanded ? <textarea onClick={expand} name="content" rows="3" placeholder="Take note..." value={note.content} onChange={handleChange} /> : null}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
