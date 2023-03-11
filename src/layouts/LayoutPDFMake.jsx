import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LayoutPDFMake = (e) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 720 ? true : false
  );

  const [listMenu, setListMenu] = useState({
    title: "PDFMake",
    pathMain: "/pdfmake",
    list: [
      {
        name: "Into",
        path: "/into",
      },
      {
        name: "ติดตั้ง",
        path: "/install",
      },
    ],
  });

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 720 ? true : false);
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
      <Navbar>
        <Container>
          <Navbar.Brand>PDFMake</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ marginTop: "2rem" }}>
        <div style={{ display: "flex" }}>
          {!isMobile ? <SideBar isMobile={isMobile} listMenu={listMenu} /> : ""}
          <Outlet />
        </div>
      </Container>
    </div>
  );
};
export default LayoutPDFMake;
