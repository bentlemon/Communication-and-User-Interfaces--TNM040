import React, { useState } from "react";

function textApp(props) {
  const [text, setText] = useState("");

  function changeInput(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>Text field</h1>
      <input type="text" placeholder="Type here..." onChange={changeInput} />
    </div>
  );
}

export default textApp;