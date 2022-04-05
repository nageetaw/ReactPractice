import React from "react";
import { useState } from "react";
function withCounter(OldComponent) {
  return function (props) {
    const [counter, setCounter] = useState(0);
    function Increament() {
      setCounter(counter + 1);
    }
    return (
      <OldComponent counter={counter} Increament={Increament} {...props} />
    );
  };
  //   return class withCounter extends React.Component {
  //     constructor(props) {
  //       super(props);
  //       this.state = { counter: 0 };
  //       this.Increament = this.Increament.bind(this);
  //     }
  //     Increament() {
  //       console.log("* " + this.state.counter);
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + 1 };
  //       });
  //     }
  //     render() {
  //       return (
  //         <OldComponent
  //           counter={this.state.counter}
  //           Increament={this.Increament}
  //           {...this.props}
  //         />
  //       );
  //     }
  //   };
}
export default withCounter;
