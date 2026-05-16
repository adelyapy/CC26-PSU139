import React from 'react';

export class ErrorBoundary
  extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error(
      'Error Boundary:',
      error,
      info
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

          <div className="text-center">

            <h1 className="text-4xl font-bold text-red-600 mb-4">
              Terjadi Error
            </h1>

            <p className="text-slate-600">
              Silakan refresh halaman
            </p>

          </div>

        </div>
      );
    }

    return this.props.children;
  }
}