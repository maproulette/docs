import React, { Component } from 'react'

const title = 'Something went wrong.'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
    document.title = title
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { errorInfo, error } = this.state
    if (errorInfo) {
      // Error path
      return (
        <>
          <h1>{title}</h1>
          <details className="whitespace-pre-wrap">
            {error && (
              <summary className="font-medium text-base leading-5">
                {error.toString()}
              </summary>
            )}
            <pre className="text-sm leading-5 overflow-auto">
              <code>{errorInfo.componentStack}</code>
            </pre>
          </details>
        </>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}

export default ErrorBoundary
