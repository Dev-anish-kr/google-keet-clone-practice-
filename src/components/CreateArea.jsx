import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (value!=="") {
      console.log(value);
      setNote(prevNote => {
        return {
          ...prevNote,
          [name]: value
        };
      });

    }else {
      alert("Enter valid");
    }
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [isZoom, setIsZoome] = useState(false);
  function zoomfun() {
    setIsZoome(true);
  }
  return (
    <div>
      <form className="create-note">
        {isZoom &&
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            required
          />
        }
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isZoom ? 3 : 1}
          onClick={zoomfun}
          required
        />
        <Zoom in={isZoom}>
          <Fab color="primary" aria-label="add" onClick={submitNote}>
            <AddIcon />

          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
