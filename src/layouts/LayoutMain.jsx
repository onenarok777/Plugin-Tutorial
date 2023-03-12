import { Outlet, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const LayoutMain = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <h4 style={{ fontWeight: "bold" }}>Plugin-Tutorial</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link onClick={() => navigate("About")}>
                <h5>About</h5>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};
export default LayoutMain;
