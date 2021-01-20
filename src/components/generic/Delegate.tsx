import React from 'react';
/** this should not be arrow function so that
 *  caller's execution context can be used as this */
function sayHello() {
  console.log('Hi, these are the props', this.props);
  this.setState({ a: 'hi' });
}

export class Delegate extends React.Component<any, any> {
  state: any = {};
  // sayHello = sayHello; // <-- that which adds sweetness!
  /**
   * note the use of arrow function to define hello
   * so that when it calls this.sayHello
   * this actually refers to class instance
   */
  hello = () => {
    console.log(this);
    sayHello.call(this);
    // this.sayHello(); // <-- this works totally fine
  };
  render() {
    return (
      <div>
        Delegate Class
        <div onClick={this.hello}>
          this is coming from props {this.props.propName}
          {this.state.a}
        </div>
      </div>
    );
  }
}
