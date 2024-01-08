import { Alert } from "react-bootstrap";

function Welcome(props) {
  return (
    <>
      <Alert variant="light" className="display-2">
        {props.title}
      </Alert>
      <h2 className="display-6">{props.subtitle}</h2>
    </>
  );
}
export default Welcome;
