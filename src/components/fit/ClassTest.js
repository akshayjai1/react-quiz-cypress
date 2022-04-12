import React from 'react';

export class ClassTest extends React.Component {
  state = {
    count: 0,
  };
  incrementNewVal = () => {
    this.setState((state) => ({ newVal: state.newVal + 1 }));
    throw new Error('new error');
  };
  incrementCount = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  componentDidMount() {
    //  console.log('classTest did mount', this.state);
  }
  // componentWillUnmount() {
  // 	console.log('classTest will unmount', this.state);
  // }
  // componentWillMount(a, b) {
  // 	console.log('classTest will mount', this.state, this.props, b);
  // }
  // componentWillUpdate(nextProps, nextState, a, b) {
  // 	console.log('classTest componentWillUpdate', this.props, this.state, nextProps, nextState);
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    //  console.log(
    // 'classTest did update',
    // this.props,
    // this.state,
    // prevProps,
    // prevState,
    // snapshot,
    // );
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    //  console.log('classTest getDerivedStateFromProps', nextProps, nextState);
    return {
      newVal: nextState.newVal,
    };
  }
  static getDerivedStateFromError(error) {
    //  console.log('classTest getDerivedStateFromError', error);
    return {
      newVal: 9,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    //  console.log(
    //   'classTest shouldComponentUpdate',
    //   this.props,
    //   this.state,
    //   nextProps,
    //   nextState,
    // );
    return true;
  }
  getSnapshotBeforeUpdate(prevProp, prevState) {
    //  console.log(
    //   'classTest getSnapshotBeforeUpdate',
    //   this.props,
    //   this.state,
    //   prevProp,
    //   prevState,
    // );
    return {
      snap: 1,
    };
  }
  componentDidCatch(error, info) {
    //  console.log('classTest didCatch', this.props, this.state, error, info);
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log('classTest componentWillReceiveProps', nextProps);
  // }
  render() {
    //  console.log('classTest rendering Child', this.props, this.state);
    return (
      <ErrorBoundary>
        <div>
          <div>Count : {this.state.count}</div>
          <button onClick={this.incrementCount}>Increment Count</button>
          <button onClick={this.incrementNewVal}>Increment New Val</button>
          {/* <Er c={this.state.count} /> */}
        </div>
      </ErrorBoundary>
    );
  }
}

export const Er = ({ c }) => {
  if (c == 1) {
    throw new Error('new error');
  }
  return <div>C: {c}</div>;
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    //  console.log('classTestError didCatch', this.props, this.state, error, info);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
