---
path: /docs/network
---

# Network Status

## Basic Class Example

```jsx
import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true
    }
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

```jsx
import React, { useState, useEffect } from 'react';

const Example = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () =>
        setIsOnline(false)
      );
    }
  }, [])

  return (
    <div className="App">
      <h5>Current Status:</h5>
      <h4>{isOnline ? "Online" : "Offline"}</h4>
      <small>(Disconnect / Connect from network to update)</small>
    </div>
  )
}
```