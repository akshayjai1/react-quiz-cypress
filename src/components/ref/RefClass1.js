import React from "react";
import RefParent from "./RefParent";

class RefClass1 extends React.Component {
  constructor(props) {
    super();
    this.x = React.createRef();
    this.r3 = {};
    this.z = null;
    this.a = {};
    this.cb3 = (el) => {
      this.r3.current = el;
    };
    this.cb = (el) => {
      this.y = el;
    };
  }
  onKeyup = (target, e) => {
    console.log("e=", e);
    console.table("target =", target);
  };
  componentWillUnmount() {
    console.log(window);
    console.log("in component willUnmount of refClass this.x =", this.x);
    console.log("in component willUnmount of refClass this.y =", this.y);
    console.log("in component willUnmount of refClass this.r3 =", this.r3);
    console.log("in component willUnmount of refClass this.z =", this.z);
    console.log("in component willUnmount of refClass this.a =", this.a);
  }
  componentDidMount() {
    console.log(window);
    window.refss = {
      x: this.x,
      y: this.y,
      r3: this.r3,
      z: this.z,
      a: this.a,
    };
    console.log("in component did mount of refClass this.x =", this.x);
    console.log("in component did mount of refClass this.y =", this.y);
    console.log("in component did mount of refClass this.r3 =", this.r3);
    console.log("in component did mount of refClass this.z =", this.z);
    console.log("in component did mount of refClass this.a =", this.a);
  }

  render() {
    return (
      <div>
        <h3>Component = RefClass1</h3>
        <input
          name="ref1"
          ref={this.x}
          onKeyUp={this.onKeyup.bind(this, "first")}
        />
        <input name="ref2" ref={this.cb} />
        <input name="ref3" ref={this.cb3} />
        {/* below code does not work as expected z = null */}
        <input name="ref4" ref={this.z} />
        {/* below code throws react warning because a = {} initially */}
        <input name="ref5" ref={this.a} />
        <RefParent />
      </div>
    );
  }
}
export default RefClass1;
