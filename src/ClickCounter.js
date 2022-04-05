import withCounter from "./withCouter";

function ClickCounter(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <button onClick={props.Increament}>Hover {props.counter} timess</button>
    </>
  );
}
export default withCounter(ClickCounter);
