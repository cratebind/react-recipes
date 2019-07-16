---
path: /docs/network
---

# Network Status

## Basic Class Example

```jsx
import React, { Component } from 'react';

class Example extends Component {
  constructor() {
    this.state = {
      // usually you would want to set the initial state to `window.navigator.onLine`,
      // but because of limitations with Gatsby we're assuming the user is online by default
      isOnline: true
    };
  }


  componentDidMount() {
    window.addEventListener("online", () => this.handleNetworkChange(true));
    window.addEventListener("offline", () => this.handleNetworkChange(false));
  }

  componentWillUnmount() {
    window.removeEventListener("online", () => this.handleNetworkChange(true));
    window.removeEventListener("offline", () =>
      this.handleNetworkChange(false)
    );
  }

  handleNetworkChange(isOnline) {
    this.setState({ isOnline });
  }

  render() {
    return (
      <div className="App">
        <h5>Current Status:</h5>
        <h4>{this.state.isOnline ? "Online" : "Offline"}</h4>
        <small>(Disconnect / Connect from network to update)</small>
      </div>
    );
  }
}
```

## Example With Hooks

WIP