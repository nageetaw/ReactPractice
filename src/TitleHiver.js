import withCounter from "./withCouter";

function TitleHover(props) {
  return <h1 onMouseEnter={props.Increament}>Hover {props.counter} timess</h1>;
}
export default withCounter(TitleHover);
