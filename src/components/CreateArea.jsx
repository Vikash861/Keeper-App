import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setNote({ title: "", content: "" });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.onAdd(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
