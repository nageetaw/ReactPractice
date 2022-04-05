import React from "react";
class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: this.props.name,
    };
    this.handleClick = this.handleClick.bind(this);
    console.log("in side constructor");
  }
  handleClick() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  componentDidUpdate() {
    console.log("in c omponent update");
  }
  componentDidMount() {
    console.log("in component mount");
  }
  componentWillUnmount() {
    console.log("in comoonent unmount");
  }
  render() {
    return (
      <>
        <h1>ChildComponent : {this.state.name}</h1>
        <h1>Counter value is : {this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    );
  }
}
export default ChildComponent;
