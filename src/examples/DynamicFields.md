---
path: /docs/dynamic-fields
---

# Dynamic Fields

A form with a dynamic number of fields that can be added / removed by user

Includes:
- Adding fields to form
- Removing Fields From form
- Validation for all required fields before submitting
- Submission Handling
- Success / Error handling and messages

## Usage

```jsx
import React, { useState } from "react";

function Example() {
  const [users, setUsers] = useState([{ name: "" }]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const addUser = () => {
    setUsers([...users, { name: "" }]);
  };

  const removeUser = index => {
    const updatedUsers = [...users].filter((user, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleChange = (index, changes) => {
    const updatedUsers = [...users];
    updatedUsers[index] = { ...updatedUsers[index], ...changes };
    setUsers(updatedUsers);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO Check both values
    const empty = users.filter(each => each.name === "");
    if (empty.length > 0) {
      setError("Please select an application and fill in company name.");
    } else {
      setError(null);
      // ... send data to api
      // fetch('/api/users', { users });
      setSuccess("Users Successfully Saved");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Please enter the name(s) for all users</p>
      {users.map((user, index) => (
        <section key={index}>
          {users.length > 1 && (
            <button onClick={() => removeUser(index)}>X</button>
          )}

          <input
            label="Name"
            className="user-info"
            value={user.name}
            onChange={e => handleChange(index, { name: e.target.value })}
          />
        </section>
      ))}
      <button type="button" onClick={addUser}>
        <span>+</span> Add User
      </button>

      {error && <div className="error">{error}</div>}

      <button type="submit" isActive onClick={() => console.log("")}>
        CONTINUE
      </button>

      {success !== null && <div className="success">{success}</div>}
    </form>
  );
};
```

## Props

N/A

