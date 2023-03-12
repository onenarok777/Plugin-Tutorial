import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const LayoutPDFMake = (e) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 720 ? true : false
  );

  const [listMenu, setListMenu] = useState({
    title: "PDFMake",
    pathMain: "/pdfmake",
    list: [
      {
        name: "Into",
        path: "into",
      },
      {
        name: "ติดตั้ง",
        path: "install",
      },
    ],
  });

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 992 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div>
      {isMobile ? <SideBar isMobile={isMobile} listMenu={listMenu} /> : ""}
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontWeight: "bold" }}>PDFMake</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container style={{ marginTop: "2rem" }}>
        <div style={{ display: "flex" }}>
          <div>
            {!isMobile ? (
              <SideBar isMobile={isMobile} listMenu={listMenu} />
            ) : (
              ""
            )}
          </div>
          <div style={{ paddingLeft: "1rem" }}>
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default LayoutPDFMake;
