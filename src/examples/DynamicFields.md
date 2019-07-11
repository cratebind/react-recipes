---
path: /docs/dynamic-fields
---

# Dynamic Fields

Accessible `Button` component that enables users to trigger an action or event, such as submitting a [Form](/docs/form/), opening a [Dialog](/docs/dialog/), canceling an action, or performing a delete operation. It follows the [WAI-ARIA Button Pattern](https://www.w3.org/TR/wai-aria-practices/#button).


## Usage

<!-- ```jsx
import React, { useState } from "react";

const DynamicFormFields = () => {
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
``` -->

## Accessibility

- `Button` has role `button`.
- When `Button` has focus, <kbd>Space</kbd> and <kbd>Enter</kbd> activates it.
  <!-- eslint-disable no-alert -->
    ```jsx
    import { Button } from "reakit/Button";

    function Example() {
      return (
        <Button as="div" onClick={() => alert("clicked")}>
          Button
        </Button>
      );
    }
    ```
- If `disabled` prop is `true`, `Button` has `disabled` and `aria-disabled` attributes set to `true`.
  <!-- eslint-disable no-alert -->
    ```jsx
    import { Button } from "reakit/Button";

    function Example() {
      return (
        <Button disabled onClick={() => alert("clicked")}>
          Button
        </Button>
      );
    }
    ```
- If `disabled` and `focusable` props are `true`, `Button` has `aria-disabled` attribute set to `true`, but not `disabled`.
  <!-- eslint-disable no-alert -->
    ```jsx
    import { Button } from "reakit/Button";

    function Example() {
      return (
        <Button disabled focusable onClick={() => alert("clicked")}>
          Button
        </Button>
      );
    }
    ```
    This is useful when the presence of a `Button` is important enough so users can perceive it by tabbing.

Learn more in [Accessibility](/docs/accessibility/).

## Composition

- `Button` uses [Tabbable](/docs/tabbable/), and is used by [FormPushButton](/docs/form/), [FormRemoveButton](/docs/form/), [HiddenDisclosure](/docs/hidden/) and all their derivatives.

Learn more in [Composition](/docs/composition/#props-hooks).

## Props

<!-- Automatically generated -->

### `Button`

- **`disabled`**
  <code>boolean | undefined</code>

  Same as the HTML attribute.

- **`focusable`**
  <code>boolean | undefined</code>

  When an element is `disabled`, it may still be `focusable`. It works
similarly to `readOnly` on form elements. In this case, only
`aria-disabled` will be set.
