import React from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends React.Component {
  render() {
    return (
      <>
        <h1>ParentComponent</h1>
        <ChildComponent name={"Nageeta"} />
      </>
    );
  }
}
export default ParentComponent;
