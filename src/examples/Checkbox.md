---
path: /docs/checkbox
---

# Checkbox

Accessible checkbox examples

(Compliant with [wai-aria-practices](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox))

## Usage

### With Native Checkbox
```jsx
import React, { useState } from "react";

const checkboxStyles = {
  display: 'block',
}

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    // a group of checkboxes must have role="group" and a unique group ID label
    <div role="group" aria-labelledby="id-group-label">
      {/*
        wrapping a checkbox in a label makes the text also clickable,
        which is an accessibility requirement
      */}
      <label style={checkboxStyles}>
        <input
          role="checkbox"
          type="checkbox"
          onChange={e => setChecked(e.target.checked)}
          checked={checked}
          tabIndex={0}
          aria-checked={checked}
        />
        Option 1
      </label>
    </div>
  )
};
```

```css
label {
  display: block;
}
```


### With Custom Checkbox
```jsx
import React, { useState } from "react";

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'center',
}

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    // a group of checkboxes must have role="group" and a unique group ID label
    <div role="group" aria-labelledby="id-group-label">
      {/*
        wrapping a checkbox in a label makes the text also clickable,
        which is an accessibility requirement
      */}
      <label
        style={containerStyles}
        onClick={() => setChecked(!checked)}
        onKeyDown={(e) => {
          e.preventDefault();
          // toggle when focused and spacebar is hit
          if (e.keyCode === 32) {
            setChecked(!checked);
          }
        }}
        tabIndex={0}
        role="checkbox"
        aria-checked={checked}
      >
        {/* style your checkbox here */}
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 8,
            backgroundColor: checked ? '#007bff' : '#fff'
          }}
        />
        Option 1
      </label>
    </div>
  )
};
```

## Props

N/A

