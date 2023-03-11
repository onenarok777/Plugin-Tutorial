import errorPageImage from "../assets/images/error-page-404.svg";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const ErrorPage = () => {
  const Navigate = useNavigate();
  return (
    <Container>
      <img style={{ width: "100%", height: "80vh" }} src={errorPageImage}></img>
      <div style={{ display: "flex" }}>
        <Button
          variant="outline-primary"
          style={{ margin: "auto", width: "20rem", fontWeight: "bold" }}
          size="lg"
          onClick={() => Navigate("/")}
        >
          <FontAwesomeIcon icon={faHome} /> Go Home
        </Button>
      </div>
    </Container>
  );
};
export default ErrorPage;
