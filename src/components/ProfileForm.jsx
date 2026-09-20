import React, { useState, useRef, useEffect, useId } from "react";

function ProfileForm() {
  const [userName, setUserName] = useState("");
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const inputId = useId();

  return (
    <div>
      <h2>Profile Form</h2>
      <label htmlFor= {inputId}>Name:</label>
      <input
        id={inputId}
        ref={inputRef}
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Current Name: {userName || "Guest"}</p>
    </div>
  );
}

export default ProfileForm;
