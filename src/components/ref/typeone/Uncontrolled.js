import React from "react";
import RefParent from "./RefParent";

class Uncontrolled extends React.Component {
  constructor(props) {
    super();
    this.ref1 = React.createRef();
    this.ref2 = {};
    this.ref3 = null;
    this.ref4 = {};
    this.cb3 = (el) => {
      this.ref2.current = el;
    };
    this.cb = (el) => {
      this.ref5 = el;
    };
  }
  onKeyup = (target, e) => {
    console.log("e=", e);
    console.table("target =", target);
  };
  componentWillUnmount() {
    console.log(window);
    console.log("in component willUnmount of refClass this.ref1 =", this.ref1);
    console.log("in component willUnmount of refClass this.ref2 =", this.ref2);
    console.log("in component willUnmount of refClass this.ref3 =", this.ref3);
    console.log("in component willUnmount of refClass this.ref4 =", this.ref4);
    console.log("in component willUnmount of refClass this.ref5 =", this.ref5);
  }
  componentDidMount() {
    console.log(window);
    window.refss = {
      x: this.ref1,
      y: this.ref5,
      r3: this.ref2,
      z: this.ref3,
      a: this.ref4,
    };
    console.log("in component did mount of refClass this.ref1 =", this.ref1);
    console.log("in component did mount of refClass this.ref2 =", this.ref2);
    console.log("in component did mount of refClass this.ref3 =", this.ref3);
    console.log("in component did mount of refClass this.ref4 =", this.ref4);
    console.log("in component did mount of refClass this.ref5 =", this.ref5);
  }

  render() {
    return (
      <div>
        <h3>Component = Uncontrolled</h3>
        <input
          name="ref1"
          ref={this.ref1}
          onKeyUp={this.onKeyup.bind(this, "first")}
        />
        <input name="ref2" ref={this.cb} />
        <input name="ref3" ref={this.cb3} />
        {/* below code does not work as expected z = null */}
        <input name="ref4" ref={this.ref3} />
        {/* below code throws react warning because a = {} initially */}
        <input name="ref5" ref={this.ref4} />
        <RefParent />
      </div>
    );
  }
}
export default Uncontrolled;
