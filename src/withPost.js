// import React from "react";
// const withPost = function (oldComponent) {
//   return class newComponent extends React {
//     constructor(props) {
//       super(props);
//       this.IncreamentCounter = this.IncreamentCounter.bind(this);
//       this.state = {
//         count: 0,
//       };
//     }
//     IncreamentCounter() {
//       this.setState((prev) => ({ count: prev + 1 }));
//     }
//     render() {
//       return (
//         <oldComponent
//           increament={this.IncreamentCounter}
//           count={this.state.count}
//         />
//       );
//     }
//   };
// };
// export default withPost;
