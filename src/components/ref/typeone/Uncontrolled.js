import React from "react";
import { In } from "../../styled/index";

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
      ref1: this.ref1,
      ref5: this.ref5,
      ref2: this.ref2,
      ref3: this.ref3,
      ref4: this.ref4,
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
        <h3>Uncontrolled Class Component</h3>
        <In
          name="ref1"
          ref={this.ref1}
          onKeyUp={this.onKeyup.bind(this, "first")}
        />
        <In name="ref2" ref={this.cb} />
        <In name="ref3" ref={this.cb3} />
        {/* below code does not work as expected z = null */}
        <In name="ref4" ref={this.ref3} />
        {/* below code throws react warning because a = {} initially */}
        <In name="ref5" ref={this.ref4} />
      </div>
    );
  }
}
export default Uncontrolled;
