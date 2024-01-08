import Container from "react-bootstrap/esm/Container";

function MyFooter(props) {
  return (
    <footer className="bg-dark">
      <Container className="text-white-50 p-3 ">
        <h5>Contatti</h5>
        <p>{props.myContacts}</p>
      </Container>
    </footer>
  );
}
export default MyFooter;
