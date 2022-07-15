import React, {Component} from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  staticgetDerivedStateFromError(error) {
    return { hasError: true, error: error }
  }

  render() {
    if(this.state.hasError) {
      return (
        <div>
          <h1>Erro!</h1>
          <p>{this.state.error.toString()}</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary