import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: undefined
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.message
        }
    }

    render() {
        return (
            <div>
                <div>Errors:</div>
                {!this.state.hasError && this.props.children}
                {this.state.hasError && <span>{this.state.errorMessage}</span>}
            </div>
        );
    }
}

export default ErrorBoundary;