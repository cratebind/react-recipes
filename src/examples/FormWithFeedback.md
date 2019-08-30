---
path: /docs/form-with-feedback
---

# Form With Feedback

An example of a form with success, error and loading indicators


## With `useReducer`

```jsx
import React, { useState, useReducer } from "react";

const initialState = {
  success: false,
  error: null,
  loading: false,
  optIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.payload.field]: action.payload.value };
    case 'START_SUBMIT':
      return { ...state, loading: true, error: null, success: false };
    case 'FINISH_SUBMIT': {
      const newState = { ...state };
      if (action.payload.success) {
        newState.success = true;
        newState.error = null;
      } else {
        newState.error = action.payload.message;
      }

      return { ...newState, loading: false };
    }
    default:
      throw new Error('Reducer Action Not Found');
  }
};

function Example() {
  const [{ email, success, error, loading, optIn }, dispatch] = useReducer(reducer, { ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'START_SUBMIT' });
      // make your API request here
      const res = await fetch('example.com');
      const data = await res.json();

      dispatch({ type: 'FINISH_SUBMIT', payload: data });
    } catch (err) {
      // fallback if server throws an unexpected exception
      dispatch({
        type: 'FINISH_SUBMIT',
        payload: {
          success: false,
          message: 'Sorry, something went wrong. Please try again.',
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">
          <div>
            Enter your email address to sign up for our newsletter
          </div>
          <input
            type="email"
            placeholder="Email Address"
            onChange={e =>
              dispatch({
                type: 'UPDATE_FIELD',
                payload: {
                  field: 'email', value: e.target.value,
                },
              })}
            value={email}
            id="email"
          />
        </label>
      </div>
      <div className="form-check">
        <label htmlFor="opt-in">
          <input
            type="checkbox"
            checked={optIn}
            id="opt-in"
            name="opt-in"
            className="form-check-input"
            onChange={e => dispatch({
              type: 'UPDATE_FIELD',
              payload: {
                field: 'optIn',
                value: e.target.checked,
              },
            })}
          /> Opt-in to receive marketing emails
        </label>
      </div>
      {success && (
        <div className="success-message">You've been successfully signed up</div>
      )}
      {error !== null && (
        <div className="error-message">{error}</div>
      )}
      <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Submitting' : 'Submit'}</button>
    </form>
  );
};
```