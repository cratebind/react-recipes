---
path: /docs/edit-form
---

# Shared Create / Edit Form

### Usage
Frequently you'll have one resource that will use the same form to "create" a new resource and edit an existing one.

This pattern can cause issues when you want to share the same form component but allow the initial state to be set in two different ways.

```jsx
import React, { useState } from "react";

const MyForm = () => {
  const [value, setValue] = useState("");
  return (
    <label>
      Name:
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </label>
  );
};

console.log(MyForm)

function Example() {
  const [key, setKey] = useState('User 1');
  const options = ['User 1', 'User 2', 'User 3'];
  return (
    <div className="App">
      <p>
        Try entering a value into the form below and then changing the key above
      </p>

      <p>
        The state should be cleared, because the changing "key" tells React that the state should not be persisted
      </p>

      <div className="form-group">
        Users:
        <div className="btn-group">

          {options.map((val) => (
            <button className="btn btn-primary" type="button" onClick={() => setKey(val)}>{val}</button>
          ))}
        </div>
      </div>

      <p>Editing: {key}</p>

      {/*
        By giving this form a `key` prop, any change in the key will reset the
        state inside the form
      */}

      <MyForm key={key} />

      {/*
        This can be useful when using one form component to edit multiple items in a list.
      */}
      {/*
        If you pass the item's ID to it as a key,
        it will reset the state if the item you're editing changes.
      */}
    </div>
  );
}
```