import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
// eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(_error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(_error, errorInfo) {
    // Use the error if needed (or replace `error` with `_` if unused)
    console.error("Error caught by ErrorBoundary:", _error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
